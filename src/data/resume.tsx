import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";

export const DATA = {
  name: "Shlok Jagtap",
  initials: "SJ",
  url: "https://shlok.tech",
  location: "India",
  locationLink: "https://www.google.com/maps/place/india",
  description:
    "Full-stack engineer at UpAndUp.Life. NestJS, AWS, and the dashboards that tell me when something is on fire.",
  summary:
    "I write backends and the infra around them. At [UpAndUp.Life](https://upandup.life) that's a NestJS/TurboRepo setup about 10K people use every day. I was CTO at Mee Games (RAG plus the smart contracts), did a freelance stint at Spredd Markets, and spent a Linux Foundation cycle on Hyperledger.\n\nMost of the interesting work happens after the feature ships: logs, indexes, load tests. Weekends go to hackathons.",
  avatarUrl: "/bali.jpeg",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Typescript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "Python", icon: Python },
    { name: "Postgres", icon: Postgresql },
    { name: "Docker", icon: Docker },
    { name: "Kubernetes", icon: Kubernetes },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "shlokjagtap.0608@gmail.com",
    tel: "+91-8888890180",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/DeImOs-Sj",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/shlok-jagtap-5a8122228",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://twitter.com/jagtap_shlok",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:shlokjagtap.0608@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "UpAndUp.Life",
      href: "https://upandup.life",
      badges: [],
      location: "India · Remote",
      title: "Full Stack Engineer",
      logoUrl: "",
      start: "Feb 2025",
      end: "Present",
      description:
        "NestJS backend on TurboRepo, split into services. About 10K people hit it a day and it stays up.\nCut a few APIs from ~10s to under 250ms with Redis and better indexes.\nPrometheus, Grafana Cloud, and Loki for the dashboards. Debug time dropped a lot once we had actual traces.\nk6 against 10K concurrent users. Traffic went up about 10x after the Redis/DB work.\nAWS day-to-day: EC2, RDS, IAM, CloudWatch, Route53. Deploys without taking the site down.",
    },
    {
      company: "Mee Games",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Chief Technology Officer",
      logoUrl: "",
      start: "Jan 2025",
      end: "Dec 2025",
      description:
        "Part-time CTO. I owned the backend, the RAG stack, and the smart contracts we actually shipped.",
    },
    {
      company: "SoundcastAI",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "",
      start: "May 2024",
      end: "Dec 2025",
      description: "Full-time. AI / deep learning work on the product.",
    },
    {
      company: "Spredd Markets",
      href: "#",
      badges: [],
      location: "United States · Remote",
      title: "Full-stack Developer",
      logoUrl: "",
      start: "Jun 2025",
      end: "Nov 2025",
      description: "Freelance. Frontend, backend, and the blockchain bits they needed.",
    },
    {
      company: "GDSC WoW Pune",
      href: "#",
      badges: [],
      location: "India",
      title: "Tech Team",
      logoUrl: "",
      start: "Feb 2024",
      end: "Apr 2024",
      description: "Helped run the campus event. HTML/CSS and whatever the site needed that week.",
    },
    {
      company: "GDSC",
      href: "#",
      badges: [],
      location: "Pune",
      title: "Blockchain Lead",
      logoUrl: "",
      start: "Aug 2023",
      end: "Apr 2024",
      description: "Ran the blockchain track: workshops, hackathon prep, answering the same Solidity question 40 times.",
    },
    {
      company: "The Linux Foundation",
      href: "https://www.linuxfoundation.org/",
      badges: [],
      location: "Pune · Remote",
      title: "LFX Mentee @ Hyperledger",
      logoUrl: "",
      start: "Sep 2023",
      end: "Feb 2024",
      description: "Six-month Hyperledger mentorship. Open source, on-chain, a lot of reading other people's diffs.",
    },
    {
      company: "Carnera Technologies",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Software Development Engineer Intern",
      logoUrl: "",
      start: "Oct 2023",
      end: "Jan 2024",
      description:
        "Built a live collaborative editor (WebSockets, Node, Express, React, Mongo).\nWrote the REST APIs around it.\nAlso did CarneraIDX, their internal hackathon.",
    },
  ],
  education: [
    {
      school: "Polkadot Blockchain Academy",
      href: "https://polkadot.academy",
      degree: "Core Protocol Engineering, PBA 7 · Bali",
      logoUrl: "",
      start: "Aug 2025",
      end: "Sep 2025",
      description:
        "Runtime, Substrate pallets, XCM, Asset Hub, and a lot of JAM. I built a pallet that sponsored gas so transactions could go through for free, then spent a while on how XCM actually moves messages and assets. At the end Parity's JAM work got presented live by Gavin Wood. That's when it stopped being 'I use these protocols' and started being 'I know how they work'.",
    },
    {
      school: "Pune University",
      href: "https://www.unipune.ac.in",
      degree: "B.E. Computer Engineering · 8.90",
      logoUrl: "",
      start: "Jan 2021",
      end: "Jan 2025",
    },
  ],
  projects: [
    {
      title: "RecurrPay",
      href: "https://youtu.be/hbnYuTC46Js",
      dates: "Payroll on Stellar",
      active: true,
      description:
        "Recurring payroll on Stellar. We ran real money through it (about $50K) and the transfers actually landed.",
      technologies: ["Next.js", "NestJS", "Stellar SDK", "TypeScript"],
      links: [
        {
          type: "Demo",
          href: "https://youtu.be/hbnYuTC46Js",
          icon: <Icons.youtube className="size-3" />,
        },
      ],
      image: "/recurrpay.png",
      video: "",
    },
    {
      title: "Real-Time Code Editor",
      href: "https://youtu.be/5LPeXpVKeBA",
      dates: "Shared editor",
      active: true,
      description:
        "A shared editor with live cursors, Judge0 in the browser, and a video call. Built it because pairing over Slack screenshots is miserable.",
      technologies: ["React", "WebSockets", "WebRTC", "Judge0"],
      links: [
        {
          type: "Demo",
          href: "https://youtu.be/5LPeXpVKeBA",
          icon: <Icons.youtube className="size-3" />,
        },
      ],
      image: "/collaborative_code_editor.png",
      video: "",
    },
    {
      title: "Luminar",
      href: "https://devfolio.co/projects/luminar-d662",
      dates: "Cross-chain arb",
      active: true,
      description:
        "Watches prices across chains, jumps via Socket, settles in a couple of seconds. A thousand or so trades went through it.",
      technologies: ["React", "Pyth Oracle", "Socket Protocol", "Web3"],
      links: [
        {
          type: "Website",
          href: "https://devfolio.co/projects/luminar-d662",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/luminar.png",
      video: "",
    },
    {
      title: "Gaiaverse",
      href: "https://youtu.be/CK5c7_cPj4o",
      dates: "Voice agent",
      active: true,
      description:
        "An agent that can pick up a Twilio call, pull Chainlink prices, and answer from a Qwen/Llama pool. Mostly a 'can I wire all of this together' project.",
      technologies: ["Node.js", "TypeScript", "Twilio", "Chainlink", "RAG"],
      links: [
        {
          type: "Demo",
          href: "https://youtu.be/CK5c7_cPj4o",
          icon: <Icons.youtube className="size-3" />,
        },
      ],
      image: "/gaiaverse.png",
      video: "",
    },
    {
      title: "P2P AddressLogger",
      href: "https://github.com/DeImOs-Sj/P2P_AddressLogger",
      dates: "On-chain peers",
      active: true,
      description:
        "Writes peer addresses on-chain so you don't have to trust one node to remember who is who.",
      technologies: ["P2P", "Solidity", "Web3", "Blockchain"],
      links: [
        {
          type: "Source",
          href: "https://github.com/DeImOs-Sj/P2P_AddressLogger",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Demo",
          href: "https://youtu.be/WDlJ5oJLr20",
          icon: <Icons.youtube className="size-3" />,
        },
      ],
      image: "/p2p_address_logger.png",
      video: "",
    },
    {
      title: "FileDriel AI",
      href: "https://github.com/DeImOs-Sj/FileDriel-AI",
      dates: "File search",
      active: true,
      description:
        "Search that tries to match what you meant, not just the filename. React plus a small ML backend. Still rough.",
      technologies: ["AI", "React", "Node.js", "ML"],
      links: [
        {
          type: "Source",
          href: "https://github.com/DeImOs-Sj/FileDriel-AI",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/sentinal_ai.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Luminar",
      dates: "",
      location: "",
      description: "Cross-chain arb via Socket. Built at a hackathon, listed on Devfolio.",
      image: "/luminar.png",
      win: "",
      links: [
        {
          title: "Devfolio",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devfolio.co/projects/luminar-d662",
        },
      ],
    },
    {
      title: "RecurrPay",
      dates: "",
      location: "",
      description: "Payroll on Stellar. Weekend build that ended up moving real money.",
      image: "/recurrpay.png",
      win: "",
      links: [
        {
          title: "Demo",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://youtu.be/hbnYuTC46Js",
        },
      ],
    },
    {
      title: "Gaiaverse",
      dates: "",
      location: "",
      description: "Twilio + Chainlink + a Qwen/Llama pool. Wired together in a weekend.",
      image: "/gaiaverse.png",
      win: "",
      links: [
        {
          title: "Demo",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://youtu.be/CK5c7_cPj4o",
        },
      ],
    },
    {
      title: "P2P AddressLogger",
      dates: "",
      location: "",
      description: "Peer addresses on-chain so you don't trust one node to remember the rest.",
      image: "/p2p_address_logger.png",
      win: "",
      links: [
        {
          title: "GitHub",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/DeImOs-Sj/P2P_AddressLogger",
        },
        {
          title: "Demo",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://youtu.be/WDlJ5oJLr20",
        },
      ],
    },
    {
      title: "FileDriel AI",
      dates: "",
      location: "",
      description: "Search files by what you meant. Still a bit rough.",
      image: "/sentinal_ai.png",
      win: "",
      links: [
        {
          title: "GitHub",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/DeImOs-Sj/FileDriel-AI",
        },
      ],
    },
    {
      title: "CarneraIDX",
      dates: "2023",
      location: "Carnera Technologies",
      description: "Their internal hackathon. The live code editor started here.",
      image: "/collaborative_code_editor.png",
      win: "",
      links: [
        {
          title: "Demo",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://youtu.be/5LPeXpVKeBA",
        },
      ],
    },
  ],
};
