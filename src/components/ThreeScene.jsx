import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
// Dark warm-brown wireframe shapes visible on beige background
const FloatingShape = ({ position, speed, scale, color }) => {
  const meshRef = useRef();
  const initY = position[1];

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.x += speed * 0.4;
    meshRef.current.rotation.y += speed;
    meshRef.current.position.y = initY + Math.sin(t * speed * 0.9) * 0.35;
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <icosahedronGeometry args={[1, 0]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.1}
        wireframe
        transparent
        opacity={0.35}
      />
    </mesh>
  );
};

const TorusKnot = () => {
  const meshRef = useRef();

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.x = t * 0.22;
    meshRef.current.rotation.y = t * 0.16;
  });

  return (
    <mesh ref={meshRef} position={[3.8, 0.5, -3]}>
      <torusKnotGeometry args={[1, 0.28, 128, 16]} />
      <meshStandardMaterial
        color="#2A2018"
        emissive="#2A2018"
        emissiveIntensity={0.08}
        wireframe
        transparent
        opacity={0.28}
      />
    </mesh>
  );
};



const Scene = () => (
  <>
    <ambientLight intensity={0.6} color="#F2EDE4" />
    <pointLight position={[6, 6, 6]} color="#8B4A3A" intensity={1.2} />
    <pointLight position={[-6, -4, 4]} color="#3D2E24" intensity={0.8} />

    <FloatingShape position={[5.5, 2, -2]} speed={0.007} scale={0.7} color="#2A2018" />
    <FloatingShape position={[-5, -1.5, -3]} speed={0.005} scale={1.0} color="#3D2E24" />
    <FloatingShape position={[2.5, -3.5, -1.5]} speed={0.009} scale={0.5} color="#4A3830" />
    <FloatingShape position={[-3.5, 4, -4]} speed={0.006} scale={0.8} color="#2A2018" />

    <TorusKnot />
  </>
);

const ThreeScene = () => (
  <div
    className="absolute inset-0 pointer-events-none z-0"
    style={{ opacity: 0.7 }}
  >
    <Canvas
      camera={{ position: [0, 0, 9], fov: 60 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: 'transparent', width: '100%', height: '100%' }}
    >
      <Scene />
    </Canvas>
  </div>
);

export default ThreeScene;
