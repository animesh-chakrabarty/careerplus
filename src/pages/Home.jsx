import SearchBox from "../components/SearchBox";
import SearchResult from "../components/SearchResult";

const Home = () => {
  return (
    <div className=" py-2 px-4 max-md:px-0 h-[90%] max-md:h-[89%] overflow-hidden no-scrollbar">
      <p className="text-center text-5xl max-md:text-3xl leading-[60px] font-[500] font-robotoSlab ">
      Uniting Jobs from <br />Every Major Portal for You with <br />
        <span className="text-7xl max-md:text-5xl leading-[80px] blaugrana_gradient ">
          CareerPlus
        </span>
      </p>
      <SearchBox />
      {/* <SearchResult /> */}
    </div>
  );
};

export default Home;
