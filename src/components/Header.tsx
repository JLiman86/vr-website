

import Logo from "../assets/img/logo.svg";
import Nav from "./Nav";
import { HiMenu } from "react-icons/hi";

type HeaderProps = {
  setNavMobile: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header = ({setNavMobile}:HeaderProps) => {

  
  return (
    <header data-aos-delay="700" data-aos="fade-down" className="py-6 relative z-10">
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
      
    </header>
  );
};

export default Header;
