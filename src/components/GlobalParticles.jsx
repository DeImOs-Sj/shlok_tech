import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const PARTICLE_COUNT = 1500; // Professional dense spray
const COLORS = [
  '#E4007C', // Holi Pink
  '#FFD700', // Holi Gold
  '#00BFFF', // Holi Cyan
  '#8A2BE2', // Blue Violet
  '#FF7F50', // Coral Spray
];

const HoliSpray = () => {
  const pointsRef = useRef();
  const { camera } = useThree();

  // Track global mouse since canvas has pointerEvents: none
  const globalMouse = useRef(new THREE.Vector2(0, 0));
  useEffect(() => {
    const onMove = (e) => {
      globalMouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      globalMouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  // Buffers for particle state
  // We use attributes for high performance
  const [positions, velocities, colors, ages] = useMemo(() => {
    const pos = new Float32Array(PARTICLE_COUNT * 3);
    const vel = new Float32Array(PARTICLE_COUNT * 3);
    const col = new Float32Array(PARTICLE_COUNT * 3);
    const age = new Float32Array(PARTICLE_COUNT);

    // Initialize all as "dead" (off-screen or tiny)
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      pos[i * 3] = 1000;
      age[i] = 1.0; // 1.0 means dead/completely aged

      const color = new THREE.Color(COLORS[Math.floor(Math.random() * COLORS.length)]);
      col[i * 3] = color.r;
      col[i * 3 + 1] = color.g;
      col[i * 3 + 2] = color.b;
    }
    return [pos, vel, col, age];
  }, []);

  const lastMouse = useRef(new THREE.Vector2(0, 0));
  const particleIdx = useRef(0);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;

    const currentPositions = pointsRef.current.geometry.attributes.position.array;
    const currentAges = pointsRef.current.geometry.attributes.age.array;
    const currentVelocities = velocities;

    // 1. Update existing particles
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      if (currentAges[i] < 1.0) {
        // Apply velocity
        currentPositions[i * 3] += currentVelocities[i * 3] * delta;
        currentPositions[i * 3 + 1] += currentVelocities[i * 3 + 1] * delta;
        currentPositions[i * 3 + 2] += currentVelocities[i * 3 + 2] * delta;

        // Apply air resistance (deceleration) for professional look
        currentVelocities[i * 3] *= 0.96;
        currentVelocities[i * 3 + 1] *= 0.96;
        currentVelocities[i * 3 + 2] *= 0.96;

        // Age them
        currentAges[i] += delta * 0.6; // Lifetime of ~1.6s
      }
    }

    // 2. Spawn new particles if mouse moved
    const mouseDist = lastMouse.current.distanceTo(globalMouse.current);
    if (mouseDist > 0.01) {
      // Calculate world position at z=0
      const vector = new THREE.Vector3(globalMouse.current.x, globalMouse.current.y, 0.5);
      vector.unproject(camera);
      const dir = vector.sub(camera.position).normalize();
      const distance = -camera.position.z / dir.z;
      const pos = camera.position.clone().add(dir.multiplyScalar(distance));

      // Emit a "burst" proportional to distance moved
      const burstSize = Math.min(25, Math.ceil(mouseDist * 150));
      for (let j = 0; j < burstSize; j++) {
        const idx = particleIdx.current;

        // Random spread for "spray" effect
        const angle = Math.random() * Math.PI * 2;
        const speed = 0.2 + Math.random() * 4.5;

        currentPositions[idx * 3] = pos.x;
        currentPositions[idx * 3 + 1] = pos.y;
        currentPositions[idx * 3 + 2] = pos.z;

        currentVelocities[idx * 3] = Math.cos(angle) * speed;
        currentVelocities[idx * 3 + 1] = Math.sin(angle) * speed;
        currentVelocities[idx * 3 + 2] = (Math.random() - 0.5) * 5.0;

        currentAges[idx] = 0; // Reset age

        particleIdx.current = (particleIdx.current + 1) % PARTICLE_COUNT;
      }
      lastMouse.current.copy(globalMouse.current);
    }

    pointsRef.current.geometry.attributes.position.needsUpdate = true;
    pointsRef.current.geometry.attributes.age.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={PARTICLE_COUNT}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={PARTICLE_COUNT}
          array={colors}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-age"
          count={PARTICLE_COUNT}
          array={ages}
          itemSize={1}
        />
      </bufferGeometry>
      <shaderMaterial
        transparent
        depthWrite={false}
        blending={THREE.NormalBlending}
        vertexShader={`
          attribute float age;
          attribute vec3 color;
          varying float vAge;
          varying vec3 vColor;
          void main() {
            vAge = age;
            vColor = color;
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            // Particle size shrinks as it ages
            gl_PointSize = (150.0 / -mvPosition.z) * (1.0 - smoothstep(0.0, 1.0, age));
            gl_Position = projectionMatrix * mvPosition;
          }
        `}
        fragmentShader={`
          varying float vAge;
          varying vec3 vColor;
          void main() {
            float dist = distance(gl_PointCoord, vec2(0.5));
            // Soft circular particles for professional "spray" look
            if (dist > 0.5) discard;
            float alpha = 1.0 - smoothstep(0.0, 0.5, dist);
            // Fade out as it ages
            alpha *= (1.0 - vAge);
            // Mute the colors slightly for professional look
            gl_FragColor = vec4(vColor, alpha * 0.45);
          }
        `}
      />
    </points>
  );
};

const GlobalParticles = () => (
  <div
    style={{
      position: 'fixed',
      inset: 0,
      zIndex: 1, // Behind text (z-10) but above background
      pointerEvents: 'none',
    }}
  >
    <Canvas
      camera={{ position: [0, 0, 15], fov: 60 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: 'transparent' }}
    >
      <HoliSpray />
    </Canvas>
  </div>
);

export default GlobalParticles;
