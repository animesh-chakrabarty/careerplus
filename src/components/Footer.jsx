import { ImGithub } from "react-icons/im";

const Footer = () => {
  return (
    <div className="bg-red-500 w-full h-[3%] flex justify-center">
      <div className="bg-black text-white h-[3%] w-[80%] max-xl:w-[90%] max-lg:w-full fixed bottom-0 flex items-center justify-between px-5 py-2 rounded-t-xl m-auto">
        <p>Made by Animesh</p>
        <ImGithub size={20} color="white" cursor="pointer" />
      </div>
    </div>
  );
};

export default Footer;
