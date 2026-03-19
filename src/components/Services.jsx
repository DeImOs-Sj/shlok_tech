import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const services = [
  {
    name: 'Full-Stack Engineering',
    description:
      'End-to-end product features on Next.js frontends and NestJS/Python microservices. Served 100K+ DAU, 99.9% uptime. p95 latency <200ms via Postgres indexing & Redis caching.',
    link: 'GitHub',
    href: 'https://github.com/DeImOs-Sj',
  },
  {
    name: 'Blockchain & Smart Contracts',
    description:
      'DeFi trading platforms (10K+ daily traders), DID smart contracts securing 5K+ accounts. Led post-audit security hardening preventing $500K+ exploits. $100K XDC grant recipient.',
    link: 'GitHub',
    href: 'https://github.com/DeImOs-Sj',
  },
  {
    name: 'AI & LLM Systems',
    description:
      'LangChain RAG pipelines with Pinecone, AI memory & retrieval systems (<2s response, 90%+ satisfaction). Multi-RAG Quest Engines with 95% relevance accuracy.',
    link: 'GitHub',
    href: 'https://github.com/DeImOs-Sj',
  },
  {
    name: 'Infrastructure & DevOps',
    description:
      'AWS (EC2 ASG, RDS replicas, Route53, IAM), Docker, Kubernetes. k6 load tests for 50K+ concurrent users. Prometheus/Loki/Grafana observability — MTTR reduced 60%.',
    link: 'GitHub',
    href: 'https://github.com/DeImOs-Sj',
  },
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">

          {/* Left col */}
          <div
            variants={fadeIn('right', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="h2 mb-6">What I Build.</h2>
            <h3 className="h3 max-w-[455px] mb-16 leading-snug text-dark/80">
              Full-Stack · Blockchain · AI Systems · DevOps.
            </h3>
            <a href="https://github.com/DeImOs-Sj" target="_blank" rel="noreferrer">
              <button className="btn btn-sm">See my Projects</button>
            </a>
          </div>

          {/* Services list */}
          <motion.div
            variants={fadeIn('left', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="flex-1"
          >
            {services.map((service, index) => {
              const { name, description, link, href } = service;
              return (
                <div
                  className="border-b border-dark/10 h-[146px] mb-[38px] flex group hover:border-dark/30 transition-colors duration-300"
                  key={index}
                >
                  <div className="max-w-[476px]">
                    <h4 className="text-[24px] tracking-wider font-primary font-semibold mb-4 text-dark group-hover:text-accent transition-colors duration-300">
                      {name}
                    </h4>
                    <p className="font-secondary leading-tight text-muted text-base">
                      {description}
                    </p>
                  </div>
                  <div className="flex flex-col flex-1 items-end">
                    <a href={href} target="_blank" rel="noreferrer" className="btn w-9 h-9 mb-[42px] flex justify-center items-center text-dark">
                      <BsArrowUpRight />
                    </a>
                    <a href={href} target="_blank" rel="noreferrer" className="text-sm text-subtle hover:text-dark transition-colors">
                      {link}
                    </a>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
