import logo from "../assets/logo.png";
import { BsFillBookmarkFill } from "react-icons/bs";
import { MdOutlineDownloadDone } from "react-icons/md";
import { Link } from "react-router-dom";

import { SiGithub } from "react-icons/si";

const Header = () => {
  return (
    <div className="h-[6%] max-md:h-[5%] flex items-center justify-between px-4 md:border-b-2 mt-1 ">
      <Link to="/" className="h-full pb-1">
        <img src={logo} alt="" className="h-[100%]" />
      </Link>
      {/* Saved & Applied section for md and above */}
      <div className="flex items-center gap-10 mx-5 max-md:hidden">
        <Link to="/bookmark" className="flex flex-col items-center">
          <BsFillBookmarkFill size={25} className="text-[25px]" />
          <p>Saved</p>
        </Link>
        <Link to="/applied" className="flex flex-col items-center">
          <MdOutlineDownloadDone size={30} />
          <p>Applied</p>
        </Link>
      </div>
      {/* Github Button for below md */}
      <div className="pb-1 md:hidden">
        <SiGithub
          onClick={() => {
            window.open(
              "https://github.com/Animesh-Chakrabarty/Project-Job-Search-Portal"
            );
          }}
          size={27}
        />
      </div>
    </div>
  );
};

export default Header;
