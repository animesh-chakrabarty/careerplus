import { ImGithub } from "react-icons/im";

const Footer = () => {
  return (
    <div
      className="bg-black text-white h-[3%] w-[80%] absolute bottom-0 flex items-center justify-between px-5 py-2 rounded-t-xl
    
    "
    >
      <p>Made by Animesh</p>
      <ImGithub size={20} color="white" cursor="pointer" />
    </div>
  );
};

export default Footer;
