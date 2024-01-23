import { IoClose } from "react-icons/io5";

type NavMobileProps = {
  setNavMobile: React.Dispatch<React.SetStateAction<boolean>>;
  navMobile:boolean
};

const NavMobile = ({navMobile,setNavMobile}:NavMobileProps) => {
  return (
    <nav
      className={`${
        navMobile ? "right-0 " : "-right-full"
      } h-screen fixed z-30 top-0 w-48 transition-all  flex items-center justify-center lg:hidden bg-[#251f3f]`}
    >
      <div className="text-3xl absolute left-4 top-6 cursor-pointer">
        <IoClose onClick={() => setNavMobile(false)} />
      </div>
      <ul className="space-y-4 text-center">
        <li className="text-lg">
          <a href="#">Home</a>
        </li>
        <li className="text-lg">
          <a href="#">Company</a>
        </li>
        <li className="text-lg">
          <a href="#">Features</a>
        </li>
        <li className="btn">
          <a href="#">Sign up</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavMobile;
