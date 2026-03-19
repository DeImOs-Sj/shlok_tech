import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.5 });

  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">

          {/* Decorative image — multiply blend works on beige */}
          {/* <motion.div
            variants={fadeIn('right', 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-multiply bg-top opacity-40"
          /> */}

          {/* Text */}
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2">About me.</h2>
            <h3 className="h3 mb-4 text-dark">
              Full-Stack Engineer. Blockchain Builder. AI Systems.
            </h3>
            <p className="text-muted leading-relaxed mb-6">
              Product-minded full-stack engineer with strong experience building scalable,
              low-latency platforms using Next.js, React, Python, NestJS and distributed systems.
              I own features end-to-end — design → API → UI → production → observability.
              Shipped systems serving 100K+ DAU with real-time features, LLM memory/RAG pipelines,
              and 99.9% uptime.
            </p>

            {/* Stats */}
            <div className="flex gap-x-8 lg:gap-x-10 mt-6 mb-10">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2 pt-3">
                  {inView ? <CountUp start={0} end={100} duration={3} /> : null}K+
                </div>
                <div className="font-primary text-sm tracking-[2px] text-muted">
                  Daily<br />Users
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2 pt-3">
                  {inView ? <CountUp start={0} end={14} duration={3} /> : null}+
                </div>
                <div className="font-primary text-sm tracking-[2px] text-muted">
                  Hackathon<br />Wins
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2 pt-3">
                  $100K
                </div>
                <div className="font-primary text-sm tracking-[2px] text-muted">
                  Grant<br />Secured
                </div>
              </div>
            </div>

            <div className="flex gap-x-8 items-center">
              <a href="mailto:shlokjagtap.0608@gmail.com">
                <button className="btn btn-lg">Contact me</button>
              </a>
              <a href="https://github.com/DeImOs-Sj" target="_blank" rel="noreferrer" className="text-gradient btn-link">
                GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
