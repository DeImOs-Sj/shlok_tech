import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { motion, useScroll, useTransform } from 'framer-motion';
import { fadeIn, staggerContainer, letterAnim } from '../variants';
import ThreeScene from './ThreeScene';

const shlok = '/bali.jpeg';

const AnimatedName = () => {
  const name = 'Shlok Jagtap';
  return (
    <motion.h1
      variants={staggerContainer(0.04, 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.7 }}
      className="text-[50px] font-bold leading-[0.8] lg:text-[106px] text-dark flex flex-wrap justify-center lg:justify-start"
      aria-label={name}
    >
      {name.split('').map((char, i) => (
        <motion.span
          key={i}
          variants={letterAnim}
          style={{ display: char === ' ' ? 'inline' : 'inline-block', whiteSpace: 'pre' }}
        >
          {char}
        </motion.span>
      ))}
    </motion.h1>
  );
};

const Banner = () => {
  const { scrollY } = useScroll();
  const imgY = useTransform(scrollY, [0, 600], [0, -70]);
  const sceneOpacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section
      className="relative min-h-[85vh] lg:min-h-[78vh] flex items-center overflow-hidden"
      id="home"
    >
      <motion.div style={{ opacity: sceneOpacity }} className="absolute inset-0 z-0">
        <ThreeScene />
      </motion.div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">

          {/* ── Text ── */}
          <div className="flex-1 text-center font-secondary lg:text-left">
            <AnimatedName />

            <motion.div
              variants={fadeIn('up', 0.15)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="text-dark/85 mr-4 font-medium">I am a</span>
              <TypeAnimation
                sequence={[
                  'Full-Stack Engineer',
                  2000,
                  'Blockchain Dev',
                  2000,
                  'AI / LLM Builder',
                  2000,
                  'Product Builder',
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>

            <motion.p
              variants={fadeIn('up', 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0 text-muted leading-relaxed text-lg"
            >
              Product-minded engineer shipping scalable, low-latency platforms with Next.js,
              React, NestJS &amp; Python.{' '}
              <span className="text-dark font-semibold">100K+ DAU</span> ·{' '}
              <span className="text-dark font-semibold">99.9% uptime</span> ·{' '}
              <span className="text-dark font-semibold">14+ hackathon wins</span> ·{' '}
              <span className="text-dark font-semibold">$100K grant secured</span>.
            </motion.p>

            <motion.div
              variants={fadeIn('up', 0.45)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <a href="mailto:shlokjagtap.0608@gmail.com">
                <button className="btn btn-lg">Contact Me</button>
              </a>
              <a href="https://github.com/DeImOs-Sj" target="_blank" rel="noreferrer" className="text-gradient btn-link">
                View GitHub
              </a>
            </motion.div>

            {/* Socials */}
            <motion.div
              variants={fadeIn('up', 0.6)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.7 }}
              className="flex text-[28px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              {[
                { href: 'https://www.linkedin.com/in/shlok-jagtap-5a8122228', Icon: FaLinkedin },
                { href: 'https://github.com/DeImOs-Sj', Icon: FaGithub },
                { href: 'https://twitter.com/jagtap_shlok?t=rezAT-M-1131s24Ihp7tVw&s=09', Icon: FaTwitter },
              ].map(({ href, Icon }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.25 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                  className="text-dark/60 hover:text-accent transition-all duration-300"
                >
                  <Icon />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* ── Image with parallax ── */}
          <motion.div
            variants={fadeIn('left', 0.25)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            style={{ y: imgY }}
            className="hidden lg:flex flex-1 justify-center max-w-[400px] lg:max-w-[540px]"
          >
            <div className="relative w-full">
              <div className="absolute inset-0 rounded-2xl border border-dark/12 z-10 pointer-events-none" />
              <img
                src={shlok}
                alt="Shlok Jagtap"
                className="relative w-full rounded-2xl object-cover shadow-xl"
                style={{ opacity: 0.88 }}
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1.8, duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-dark/40 text-[10px] font-primary tracking-[0.2em] font-bold"
        >
          <span>SCROLL</span>
          <div className="w-px h-8 bg-gradient-to-b from-dark/25 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
