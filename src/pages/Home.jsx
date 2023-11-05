import SearchBox from "../components/SearchBox";
import SearchResult from "../components/SearchResult";
import Tag from "../components/Tag";

const Home = () => {
  return (
    <div className=" py-2 px-4 max-md:px-0 h-[90%]  overflow-hidden no-scrollbar ">
      <p className="text-center text-5xl max-md:text-3xl leading-[60px] font-[500] font-robotoSlab ">
        Uniting Jobs from <br />
        Every Major Portal <br className="md:hidden" />
        for You with <br />
        <span className="text-7xl max-md:text-5xl leading-[80px] blaugrana_gradient ">
          CareerPlus
        </span>
      </p>
      <SearchBox />
      {/* <div className=" md:hidden text-[20px] text-center font-[600] mt-3 font-lato">
        <p className="text-gray-600 ">
          Here at <span className="blaugrana_gradient">CareerPlus</span> ,{" "}
          <br />
          You will find jobs from <br /> multiple portals such as :
        </p>
        <ul className="mt-2">
          <li>Linkedln</li>
          <li>Indeed</li>
          <li>InternShala</li>
          <li>InstaHyre</li>
          <li>WellFound</li>
          <li>SimplyHired</li>
          <li>GlassDoor</li>
          <li>BeeBee India</li>
          <li>CutShort</li>
          <li>SmartRecruiters</li>
          <li>Shine</li>
          <li>Mogul</li>
          <li className="font-[500] text-[18px] ">and many more...</li>
        </ul>
      </div> */}
    </div>
  );
};

export default Home;
