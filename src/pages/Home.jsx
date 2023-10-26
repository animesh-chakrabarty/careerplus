import SearchBox from "../components/SearchBox";
import SearchResult from "../components/SearchResult";

const Home = () => {
  return (
    <div className=" py-2 px-4 h-[90%] overflow-auto no-scrollbar">
      <p className="font-robotoSlab text-center text-5xl max-md:text-3xl leading-[60px] font-[600]">
      Uniting Jobs from <br />Every Major Portal for You with <br />
        <span className="text-7xl max-md:text-5xl leading-[80px] blaugrana_gradient ">
          CareerPlus
        </span>
      </p>
      <SearchBox />
      <SearchResult />
    </div>
  );
};

export default Home;
