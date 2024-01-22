import { useState } from "react";

import Logo from "../assets/img/logo.svg";

import Nav from "./Nav";
import NavMobile from "./NavMobile";

import { HiMenu } from "react-icons/hi";

const Header = () => {

  const [navMobile, setNavMobile] = useState(true);
  return (
    <header className="py-6 relative">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <a href="#">
            <img className="h-[30px]" src={Logo} alt="" />
          </a>
          <Nav />
          <div onClick={()=>setNavMobile(true)} className="lg:hidden text-3xl text-white cursor-pointer">
            <HiMenu />
          </div>
        </div>
      </div>
      <div className={`${navMobile ? "right-0 ":"-right-full" } fixed z-10 top-0 bottom-0 w-48 transition-all`}>
        <NavMobile setNavMobile={setNavMobile}/>
      </div>
    </header>
  );
};

export default Header;
