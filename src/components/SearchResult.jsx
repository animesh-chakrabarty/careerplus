import { data } from "../constants/data";
import JobCard from "./JobCard";

import { useSelector } from "react-redux";
import JobDetails from "./JobDetails";

const SearchResult = () => {
  let bookMarkedJobs = useSelector((state) => state.bookmarkedJobs.data);
  let appliedJobs = useSelector((state) => state.appliedJobs.data);
  const jobList = useSelector((state) => state.jobList.data);
  console.log(jobList)

  console.log(bookMarkedJobs);

  return (
    <div className="flex h-full md:overflow-auto no-scrollbar ">
      {/* left */}
      <div className="w-[35%] max-xl:w-[45%] max-lg:w-full h-full px-2 md:overflow-auto no-scrollbar flex flex-col gap-3">
        {jobList?.map((jobDetails) => {
          const isBookmarked = bookMarkedJobs.find(
            (jobDetailsTemp) => jobDetailsTemp?.job_id === jobDetails?.job_id
          );
          const isApplied = appliedJobs.find(
            (jobDetailsTemp) => jobDetailsTemp?.job_id === jobDetails?.job_id
          );
          return (
            <div key={jobDetails?.job_id}>
              <JobCard jobDetails={jobDetails} isBookmarked={isBookmarked} isApplied={isApplied}/>
            </div>
          );
        })}
      </div>
      {/* right */}
      <div className="w-[60%]  max-xl:w-[50%] max-lg:hidden h-full  overflow-auto no-scrollbar">
        <JobDetails />
      </div>
    </div>
  );
};

export default SearchResult;
