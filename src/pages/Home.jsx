import SearchBox from "../components/SearchBox";
import SearchResult from "../components/SearchResult";

const Home = () => {
  return (
    <div className=" py-2 px-4 h-[90%] overflow-auto no-scrollbar">
      <p className="font-robotoSlab text-center text-5xl leading-[60px] font-[600]">
        Find your dream job <br /> all major portals in one place here at{" "}
        <br />{" "}
        <span className="text-7xl leading-[80px] blaugrana_gradient ">
          CareerPlus
        </span>
      </p>
      <SearchBox />
      <SearchResult />
    </div>
  );
};

export default Home;
