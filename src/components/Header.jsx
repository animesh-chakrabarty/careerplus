import logo from "../assets/logo.png";
import { BsFillBookmarkFill } from "react-icons/bs";
import { MdOutlineDownloadDone } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="h-[6%] flex items-center justify-between px-4 border-b-2 mt-1 ">
      <Link to="/" className="h-full pb-1">
        <img src={logo} alt="" className="h-[100%]" />
      </Link>
      <div className="flex items-center gap-10 mx-5">
        <Link to="/bookmark" className="flex flex-col items-center">
          <BsFillBookmarkFill size={25} />
          <p>Saved</p>
        </Link>
        <Link to="/applied" className="flex flex-col items-center">
          <MdOutlineDownloadDone size={30} />
          <p>Applied</p>
        </Link>
      </div>
    </div>
  );
};

export default Header;
