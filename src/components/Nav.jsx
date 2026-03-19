import React from 'react';
import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { BsBriefcase, BsChatSquare, BsBuilding } from 'react-icons/bs';
import { HiOutlineCode } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Nav = () => {
  return (
    <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        <div className="w-full bg-primary/75 h-[65px] backdrop-blur-2xl rounded-full max-w-[520px] mx-auto px-5 flex justify-between text-2xl text-dark/40 border border-dark/10 shadow-sm">
          <Link to="home" activeClass="active" smooth spy offset={-200}
            className="cursor-pointer w-[60px] flex items-center justify-center hover:text-dark transition-colors">
            <BiHomeAlt />
          </Link>
          <Link to="about" activeClass="active" smooth spy
            className="cursor-pointer w-[60px] flex items-center justify-center hover:text-dark transition-colors">
            <BiUser />
          </Link>
          <Link to="experience" activeClass="active" smooth spy
            className="cursor-pointer w-[60px] flex items-center justify-center hover:text-dark transition-colors">
            <BsBuilding />
          </Link>
          <Link to="work" activeClass="active" smooth spy
            className="cursor-pointer w-[60px] flex items-center justify-center hover:text-dark transition-colors">
            <BsBriefcase />
          </Link>
          <Link to="skills" activeClass="active" smooth spy
            className="cursor-pointer w-[60px] flex items-center justify-center hover:text-dark transition-colors">
            <HiOutlineCode />
          </Link>
          <Link to="contact" activeClass="active" smooth spy
            className="cursor-pointer w-[60px] flex items-center justify-center hover:text-dark transition-colors">
            <BsChatSquare />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
