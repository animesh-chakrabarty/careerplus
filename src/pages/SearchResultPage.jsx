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
  const { data } = useFetchJobsQuery(query);
  //   console.log(data.data);
  data && dispatch(setJobList(data.data));
  //   console.log(searchTerm)
  return (
    <div className="h-[75%]  ">
      {/* 1.Top Div */}
      <div>
        <SearchBox />
      </div>
      {/* 2.Bottom Div */}
      <div className="h-[100%] overflow-auto">
        <SearchResult />
      </div>
    </div>
  );
};

export default SearchResultPage;
