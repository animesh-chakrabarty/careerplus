import SearchBox from "../components/SearchBox";
import SearchResult from "../components/SearchResult";
import { useParams } from "react-router-dom";
import { useFetchJobsQuery } from "../redux/JSearchAPI";
import { useDispatch } from "react-redux";
import { setJobList } from "../redux/JobListSlice";
import { useEffect } from "react";
import { setJobdetails } from "../redux/JobDetailsSlice";
import loader  from "../assets/loader.svg";

const SearchResultPage = () => {
  const { jobRole, location } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setJobdetails({}));
  }, []);

  console.log(jobRole, location);

  const query = jobRole + " " + location;
  // console.log(query);
  const { data, isFetching } = useFetchJobsQuery({
    jobRole:query,
    page:1,
  });
  // console.log(isFetching);
  data && dispatch(setJobList(data.data));
  return (
    <div className="max-md:h-[87%] h-[90%] overflow-auto no-scrollbar">
      {/* 1.Top Div */}
      <div>
        <SearchBox jobRole={jobRole} location={location} />
      </div>
      {/* 2.Bottom Div */}
      {isFetching ? (
        <div className="text-center mt-5 flex flex-col ">
          <img src={loader} alt="" className="h-20"/>
          Please hold on <br /> while we find <br /> the best jobs for you...
        </div>
      ) : (
        <div className="h-[100%]">
          <SearchResult query={query}/>
        </div>
      )}
    </div>
  );
};

export default SearchResultPage;
