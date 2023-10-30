import { ImGithub } from "react-icons/im";
import { Link } from "react-router-dom";
import { BsFillBookmarkFill } from "react-icons/bs";
import { MdOutlineDownloadDone } from "react-icons/md";

const Footer = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="bg-black text-white h-[3%] w-[80%] max-xl:w-[90%] max-lg:w-full fixed bottom-0 flex items-center justify-between px-5 py-2 rounded-t-xl m-auto max-md:hidden">
        <p>Made by Animesh</p>
        <ImGithub size={20} color="white" cursor="pointer" />
      </div>
      <div className="md:hidden fixed bottom-0 h-[7%] w-full flex justify-around bg-[black] py-2 rounded-t-2xl">
        <Link to="/bookmark" className="flex flex-col items-center">
          <BsFillBookmarkFill size={27} className="text-[25px]" color="white"/>
          <p className="text-white text-[14px]">Saved</p>
        </Link>
        <Link to="/applied" className="flex flex-col items-center">
          <MdOutlineDownloadDone size={50} color="white"/>
          <p className="text-white text-[14px]">Applied</p>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
