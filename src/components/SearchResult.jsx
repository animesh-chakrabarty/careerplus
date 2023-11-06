import { data } from "../constants/data";
import JobCard from "./JobCard";

import { useDispatch, useSelector } from "react-redux";
import JobDetails from "./JobDetails";
import { useEffect, useRef, useState } from "react";
import { useLazyFetchJobsQuery } from "../redux/JSearchAPI";
import { setMoreJobs } from "../redux/JobListSlice";

const SearchResult = ({ query }) => {
  let scrollHeight, clientHeight, scrollTop;
  let bookMarkedJobs = useSelector((state) => state.bookmarkedJobs.data);
  let appliedJobs = useSelector((state) => state.appliedJobs.data);
  const jobList = useSelector((state) => state.jobList.data);
  const [page, setPage] = useState(2);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const divRef = useRef(null);

  const callAPI = async () => {
    // const res = await fetch("https://catfact.ninja/fact");
    // const temp = await res.json();
    // console.log(temp);

    console.log(page);
    const url = `https://jsearch.p.rapidapi.com/search?query=${query}&page=${page}&num_pages=1`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "7f78384275msh3e1b33fcf8c3353p18d011jsn5fc80b4c10b4",
        "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
      },
    };

    try {
      setIsLoading(true);
      const response = await fetch(url, options);
      response && setIsLoading(false)
      const result = await response.json();
      const res = result?.data;
      console.log(res);
      dispatch(setMoreJobs(res));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    console.log("Should Call API");
    callAPI();
  }, [page]);

  useEffect(() => {
    const temp = () => {
      console.log("reached");
      setPage((prev) => prev + 1);
    };

    const handleScroll = (e) => {
      scrollHeight = divRef.current.scrollHeight;
      clientHeight = divRef.current.clientHeight;
      console.log(scrollHeight);
      console.log(clientHeight);
      scrollTop = divRef.current.scrollTop;
      console.log(scrollTop);
      scrollTop + clientHeight + 1 >= scrollHeight && temp();
    };

    if (divRef.current) {
      divRef.current.addEventListener("scroll", handleScroll);

      return () => {
        divRef.current.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <div className="flex h-full md:overflow-auto no-scrollbar ">
      {/* left */}
      <div
        className="searchResultLeft w-[35%] max-xl:w-[45%] max-lg:w-full h-full px-2 md:overflow-auto no-scrollbar flex flex-col gap-3"
        ref={divRef}
      >
        {jobList?.map((jobDetails) => {
          const isBookmarked = bookMarkedJobs.find(
            (jobDetailsTemp) => jobDetailsTemp?.job_id === jobDetails?.job_id
          );
          const isApplied = appliedJobs.find(
            (jobDetailsTemp) => jobDetailsTemp?.job_id === jobDetails?.job_id
          );
          return (
            <div key={jobDetails?.job_id}>
              <JobCard
                jobDetails={jobDetails}
                isBookmarked={isBookmarked}
                isApplied={isApplied}
              />
            </div>
          );
        })}
        {
          isLoading && <p>loading...</p>
        }
      </div>
      {/* right */}
      <div className="w-[60%]  max-xl:w-[50%] max-lg:hidden h-full  overflow-auto no-scrollbar">
        <JobDetails />
      </div>
    </div>
  );
};

export default SearchResult;
