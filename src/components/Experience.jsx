import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../variants';

const experiences = [
  {
    company: 'Up&Up Life',
    role: 'Full Stack Developer',
    period: 'Sep 2024 – Present',
    type: 'Remote',
    bullets: [
      'Next.js frontend & NestJS/Python microservices serving 100K+ DAU with 99.9% uptime',
      'Turborepo monorepo enabling 3 parallel teams; Turborepo-based code-sharing across services',
      'Reduced p95 API latency 35–50% via Postgres indexing & Redis caching (<200ms)',
      'Built Prometheus + Loki + Grafana observability stack — MTTR reduced 60%',
      'k6 load tests simulating 50K+ concurrent users; 10× traffic scaled without infra expansion',
      'AWS: EC2 ASG, RDS read replicas, Route53, IAM — zero-downtime deployments',
    ],
  },
  {
    company: 'Mee Games',
    role: 'Lead Blockchain & Full-Stack AI Engineer',
    period: 'Dec 2023 – Sep 2024',
    type: 'Remote',
    bullets: [
      'AI memory & retrieval systems using LangChain, RAG pipelines & Pinecone — <2s response, 90%+ satisfaction',
      'Multi-RAG Quest Engine: 100+ personalised tasks/day with 95% relevance accuracy',
      'Full stack ownership: React/Next.js, Python/Node, vector DBs and blockchain infra',
      'DID smart contracts securing 5K+ user accounts on-chain',
      'Secured $100K XDC Network grant through technical architecture & security leadership',
    ],
  },
  {
    company: 'Spread Markets',
    role: 'Lead Blockchain Developer',
    period: 'Jan 2024 – Aug 2024',
    type: 'Remote',
    bullets: [
      'Production trading platform: 10K+ daily traders, real-time updates & automated settlement',
      'React UI with real-time streams, optimistic updates and <100ms perceived latency',
      'Led post-audit security hardening preventing potential $500K+ exploits',
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, x: -30 },
  show: {
    opacity: 1, x: 0,
    transition: { type: 'spring', stiffness: 68, damping: 18 },
  },
};

const Experience = () => {
  return (
    <section className="py-16 lg:py-24" id="experience">
      <div className="container mx-auto">

        <motion.div
          variants={fadeIn('up', 0.15)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-16"
        >
          <h2 className="h2">Work Experience.</h2>
          <p className="text-muted max-w-lg">
            Full-time roles shipping production systems at scale — from AI pipelines and DeFi platforms to 100K+ DAU infrastructure.
          </p>
        </motion.div>

        <motion.div
          className="relative flex flex-col gap-5"
          variants={staggerContainer(0.15, 0.05)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05 }}
        >
          {/* Vertical timeline line */}
          <div className="absolute left-[11px] top-4 bottom-4 w-px bg-gradient-to-b from-dark/20 via-dark/10 to-transparent hidden lg:block" />

          {experiences.map((exp, i) => (
            <motion.div key={i} variants={cardVariants} className="flex gap-6 lg:gap-8">

              {/* Timeline dot */}
              <div className="hidden lg:flex flex-col items-center pt-1 flex-shrink-0">
                <div className="w-6 h-6 rounded-full border border-dark/25 bg-primary flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-dark/50" />
                </div>
              </div>

              {/* Card */}
              <motion.div
                whileHover={{ x: 4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                className="flex-1 glass rounded-2xl p-6 border border-dark/10"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-5">
                  <div>
                    <h3 className="font-primary text-xl font-bold text-dark">{exp.company}</h3>
                    <p className="text-muted text-sm font-secondary mt-1">{exp.role}</p>
                  </div>
                  <div className="flex flex-col items-start sm:items-end gap-1 flex-shrink-0">
                    <span className="text-[10px] font-primary tracking-[3px] text-subtle border border-dark/12 px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                    <span className="text-[10px] text-subtle tracking-widest">{exp.type}</span>
                  </div>
                </div>

                <ul className="space-y-2">
                  {exp.bullets.map((b, bi) => (
                    <li key={bi} className="flex gap-3 text-sm text-muted leading-relaxed">
                      <span className="text-dark/25 mt-[5px] flex-shrink-0 text-[8px]">◆</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
