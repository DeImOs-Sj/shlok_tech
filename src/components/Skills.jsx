import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../variants';
import { FaReact, FaNodeJs, FaPython, FaGitAlt, FaAws } from 'react-icons/fa';
import {
  SiNextdotjs, SiTypescript, SiTailwindcss, SiRedux,
  SiNestjs, SiGraphql, SiPostgresql, SiRedis,
  SiDocker, SiKubernetes, SiPrometheus, SiGrafana,
  SiSolidity, SiWeb3Dotjs, SiJavascript,
} from 'react-icons/si';
import { BsCpu, BsDatabase } from 'react-icons/bs';

const skillGroups = [
  {
    category: 'Frontend',
    skills: [
      { name: 'Next.js',     icon: SiNextdotjs,    color: '#1A1714' },
      { name: 'React',       icon: FaReact,        color: '#0e7490' },
      { name: 'TypeScript',  icon: SiTypescript,   color: '#1d4ed8' },
      { name: 'JavaScript',  icon: SiJavascript,   color: '#854d0e' },
      { name: 'Tailwind',    icon: SiTailwindcss,  color: '#0e7490' },
      { name: 'Redux',       icon: SiRedux,        color: '#4c1d95' },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'NestJS',   icon: SiNestjs,   color: '#9f1239' },
      { name: 'Node.js',  icon: FaNodeJs,   color: '#14532d' },
      { name: 'Python',   icon: FaPython,   color: '#1e3a5f' },
      { name: 'tRPC',     icon: BsCpu,      color: '#1e3a5f' },
      { name: 'GraphQL',  icon: SiGraphql,  color: '#6b21a8' },
      { name: 'Git',      icon: FaGitAlt,   color: '#9a3412' },
    ],
  },
  {
    category: 'Databases & AI',
    skills: [
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#1e3a5f' },
      { name: 'Redis',      icon: SiRedis,      color: '#9f1239' },
      { name: 'Pinecone',   icon: BsDatabase,   color: '#064e3b' },
      { name: 'LangChain',  icon: BsCpu,        color: '#14532d' },
      { name: 'RAG',        icon: BsCpu,        color: '#4c1d95' },
      { name: 'Web3.js',    icon: SiWeb3Dotjs,  color: '#9a3412' },
    ],
  },
  {
    category: 'Infra & Tools',
    skills: [
      { name: 'AWS',        icon: FaAws,         color: '#92400e' },
      { name: 'Docker',     icon: SiDocker,      color: '#1e3a5f' },
      { name: 'Kubernetes', icon: SiKubernetes,  color: '#1e3a5f' },
      { name: 'Prometheus', icon: SiPrometheus,  color: '#9a3412' },
      { name: 'Grafana',    icon: SiGrafana,     color: '#9a3412' },
      { name: 'Solidity',   icon: SiSolidity,    color: '#1A1714' },
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.94 },
  show: {
    opacity: 1, y: 0, scale: 1,
    transition: { type: 'spring', stiffness: 90, damping: 16 },
  },
};

const SkillCard = ({ skill }) => {
  const Icon = skill.icon;
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ scale: 1.06, y: -3 }}
      className="flex flex-col items-center gap-2 p-4 glass rounded-xl cursor-default transition-colors duration-200"
    >
      <Icon size={26} style={{ color: skill.color }} />
      <span className="text-[10px] font-primary tracking-widest text-muted">{skill.name}</span>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section className="py-16 lg:py-24" id="skills">
      <div className="container mx-auto">

        <motion.div
          variants={fadeIn('up', 0.15)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-16"
        >
          <h2 className="h2">Tech Stack.</h2>
          <p className="text-muted max-w-xl">
            Technologies I use across frontend, backend, databases, AI pipelines, and infrastructure.
          </p>
        </motion.div>

        <div className="flex flex-col gap-12">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={gi}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              variants={staggerContainer(0.07, 0.05)}
            >
              {/* Divider */}
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px flex-1 bg-gradient-to-r from-dark/20 to-transparent" />
                <span className="font-primary text-[10px] tracking-[4px] text-subtle uppercase border border-dark/12 px-4 py-1 rounded-full">
                  {group.category}
                </span>
                <div className="h-px flex-1 bg-gradient-to-l from-dark/20 to-transparent" />
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
                {group.skills.map((skill, si) => (
                  <SkillCard key={si} skill={skill} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
