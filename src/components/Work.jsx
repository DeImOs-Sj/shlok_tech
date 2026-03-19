import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../variants';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'RecurrPay',
    category: 'B2B SaaS · Payments',
    description:
      'Automated recurring payroll & payment platform on Stellar. Processed $50K+ with 99.9% success rate.',
    tags: ['Next.js', 'NestJS', 'Stellar SDK', 'TypeScript'],
    image: '/recurrpay.png',
    github: null,
    live: 'https://youtu.be/hbnYuTC46Js?si=EDPFomO98I4hc4Bb',
    accent: 'bg-dark/8',
    topBar: 'from-dark/50 to-dark/20',
  },
  {
    title: 'Real-Time Code Editor',
    category: 'Collaboration · Dev Tools',
    description:
      'Collaborative editor with live cursors, in-browser code compilation (Judge0) and video calls. <100ms latency.',
    tags: ['React', 'WebSockets', 'WebRTC', 'Judge0'],
    image: '/collaborative_code_editor.png',
    github: null,
    live: 'https://youtu.be/5LPeXpVKeBA?si=lB90N93VygMISBd7',
    accent: 'bg-dark/6',
    topBar: 'from-dark/40 to-dark/15',
  },
  {
    title: 'Luminar',
    category: 'Cross-Chain · DeFi',
    description:
      'Cross-chain arbitrage platform executing 1000+ automated trades across chains with ~2s settlement via Socket Protocol.',
    tags: ['React', 'Pyth Oracle', 'Socket Protocol', 'Web3'],
    image: '/luminar.png',
    github: null,
    live: 'https://devfolio.co/projects/luminar-d662',
    accent: 'bg-dark/8',
    topBar: 'from-dark/50 to-dark/20',
  },
  {
    title: 'Gaiaverse',
    category: 'AI Platform',
    description:
      '24/7 AI-powered assistance using Qwen & Llama model pools, Twilio phone calls, Chainlink price feeds and RAG-powered digital agents.',
    tags: ['Node.js', 'TypeScript', 'Twilio', 'Chainlink', 'RAG'],
    image: '/gaiaverse.png',
    github: null,
    live: 'https://youtu.be/CK5c7_cPj4o?si=k3dDwyi2Q80o4YSa',
    accent: 'bg-dark/6',
    topBar: 'from-dark/40 to-dark/15',
  },
  {
    title: 'P2P AddressLogger',
    category: 'Blockchain · Web3',
    description:
      'Peer-to-peer address logging tool on blockchain — decentralised, trustless address tracking across nodes.',
    tags: ['P2P', 'Solidity', 'Web3', 'Blockchain'],
    image: '/p2p_address_logger.png',
    github: 'https://github.com/DeImOs-Sj/P2P_AddressLogger',
    live: 'https://youtu.be/WDlJ5oJLr20?si=ohamDlK_KsHfj-Za',
    accent: 'bg-dark/8',
    topBar: 'from-dark/50 to-dark/20',
  },
  {
    title: 'FileDriel AI',
    category: 'AI · Productivity',
    description:
      'AI-powered file management system with machine learning for intelligent organisation, semantic search and automation.',
    tags: ['AI', 'React', 'Node.js', 'ML'],
    image: '/sentinal_ai.png',
    github: 'https://github.com/DeImOs-Sj/FileDriel-AI',
    live: null,
    accent: 'bg-dark/6',
    topBar: 'from-dark/40 to-dark/15',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 32, scale: 0.96 },
  show: {
    opacity: 1, y: 0, scale: 1,
    transition: { type: 'spring', stiffness: 72, damping: 18 },
  },
};

const ProjectCard = ({ project }) => (
  <motion.div
    variants={cardVariants}
    whileHover={{ y: -5 }}
    transition={{ type: 'spring', stiffness: 200, damping: 20 }}
    className="glass rounded-2xl overflow-hidden flex flex-col"
  >
    <div className={`h-[2px] w-full bg-gradient-to-r ${project.topBar}`} />

    {project.image && (
      <div className="w-full h-60 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
        />
      </div>
    )}

    <div className="p-6 flex flex-col flex-1">
      <span className="text-xs font-primary tracking-[3px] text-subtle uppercase mb-3">
        {project.category}
      </span>

      <h3 className="text-2xl font-primary font-bold text-dark mb-3">
        {project.title}
      </h3>

      <p className="text-muted text-base leading-relaxed flex-1 mb-5">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-5">
        {project.tags.map((tag, i) => (
          <span
            key={i}
            className="text-xs px-3 py-1 rounded-full border border-dark/12 text-muted font-primary tracking-widest bg-dark/3"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex gap-4">
        {project.github && (
          <a href={project.github} target="_blank" rel="noreferrer"
            className="flex items-center gap-2 text-sm text-subtle hover:text-dark transition-colors font-primary tracking-widest">
            <FaGithub size={16} /> GITHUB
          </a>
        )}
        {project.live && (
          <a href={project.live} target="_blank" rel="noreferrer"
            className="flex items-center gap-2 text-sm text-subtle hover:text-dark transition-colors font-primary tracking-widest">
            <FaExternalLinkAlt size={14} /> {project.live.includes('youtu') ? 'DEMO' : 'VIEW'}
          </a>
        )}
      </div>
    </div>
  </motion.div>
);

const Work = () => {
  return (
    <section className="py-16 lg:py-24" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="h2 mb-0">Selected Projects.</h2>
          </motion.div>
          <motion.div
            variants={fadeIn('left', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col gap-4 lg:text-right"
          >
            <p className="text-muted max-w-sm">
              Spanning AI/LLM systems, blockchain/DeFi, real-time infrastructure, and B2B SaaS.
            </p>
            <a href="https://github.com/DeImOs-Sj" target="_blank" rel="noreferrer">
              <button className="btn btn-sm">All on GitHub</button>
            </a>
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={staggerContainer(0.08, 0.05)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05 }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Work;
