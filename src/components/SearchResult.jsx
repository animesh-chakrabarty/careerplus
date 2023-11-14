import JobCard from "./JobCard";
import loader from "../assets/loader.svg";

import { useDispatch, useSelector } from "react-redux";
import JobDetails from "./JobDetails";
import { useEffect, useState } from "react";
import { useLazyFetchJobsQuery } from "../redux/JSearchAPI";
import { setMoreJobs } from "../redux/JobListSlice";

const SearchResult = ({ query }) => {
  const dispatch = useDispatch();
  let bookMarkedJobs = useSelector((state) => state.bookmarkedJobs.data);
  let appliedJobs = useSelector((state) => state.appliedJobs.data);
  const jobList = useSelector((state) => state.jobList.data);
  const [pageNo, setPageNo] = useState(2);

  const [triggerFunction, { data: res, isFetching, isError, error }] =
    useLazyFetchJobsQuery();

  console.log(isFetching);

  useEffect(() => {
    if (!isFetching && res) {
      dispatch(setMoreJobs(res?.data));
    }
  }, [isFetching, res, dispatch]);

  const loadMoreJobs = () => {
    console.log("load more jobs");
    setPageNo((prev) => prev + 1);
    triggerFunction({
      jobRole: query,
      page: pageNo,
    });
  };

  return (
    <div className="flex h-full md:overflow-auto no-scrollbar ">
      {/* left */}
      <div className="searchResultLeft w-[35%] max-xl:w-[45%] max-lg:w-full h-full px-2 md:overflow-auto no-scrollbar flex flex-col gap-3 ">
        {jobList?.map((jobDetails, i) => {
          const isBookmarked = bookMarkedJobs.find(
            (jobDetailsTemp) => jobDetailsTemp?.job_id === jobDetails?.job_id
          );
          const isApplied = appliedJobs.find(
            (jobDetailsTemp) => jobDetailsTemp?.job_id === jobDetails?.job_id
          );
          return (
            <div key={i}>
              <JobCard
                jobDetails={jobDetails}
                isBookmarked={isBookmarked}
                isApplied={isApplied}
              />
            </div>
          );
        })}

        {isFetching ? (
          <div className="flex items-center justify-center">
            <img src={loader} alt="" className="h-12" />
            <span>Loading...</span>
          </div>
        ) : !isFetching && isError ? (
          <div className="text-red-500 text-center ">Something Went Wrong</div>
        ) : (
          <div
            className="w-full bg-[#0071BD] text-center font-[16px] text-white cursor-pointer py-[2px]"
            onClick={loadMoreJobs}
          >
            Load more Jobs
          </div>
        )}
      </div>
      {/* right */}
      <div className="w-[60%]  max-xl:w-[50%] max-lg:hidden h-full  overflow-auto no-scrollbar">
        <JobDetails />
      </div>
    </div>
  );
};

export default SearchResult;
