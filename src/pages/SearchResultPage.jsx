import React from "react";
import SearchBox from "../components/SearchBox";
import SearchResult from "../components/SearchResult";
import { useParams } from "react-router-dom";
import { useFetchJobsQuery } from "../redux/JSearchAPI";
import { useDispatch } from "react-redux";
import { setJobList } from "../redux/JobListSlice";

const SearchResultPage = () => {
  const { jobRole, location } = useParams();
  const dispatch = useDispatch();

  const query = jobRole + " " + location;
  const { data, isLoading } = useFetchJobsQuery(query);
  //   console.log(data.data);
  data && dispatch(setJobList(data.data));
  //   console.log(searchTerm)
  return (
    <div className="max-md:h-[87%] h-[90%] overflow-auto no-scrollbar">
      {/* 1.Top Div */}
      <div>
        <SearchBox />
      </div>
      {/* 2.Bottom Div */}
      {isLoading ? (
        <div className="text-center mt-5">Please hold on <br /> while we find <br /> the best jobs for you...</div>
      ) : (
        <div className="h-[100%] ">
          <SearchResult />
        </div>
      )}
    </div>
  );
};

export default SearchResultPage;
