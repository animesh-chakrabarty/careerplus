import React from "react";
import { useSelector } from "react-redux";
import JobCard from "../components/JobCard";
import JobDetails from "../components/JobDetails";

const Bookmark = () => {
  const bookmark = useSelector((state) => state.bookmarkedJobs.data);
  console.log(bookmark);
  return (
    <div className="flex h-[86%] lg:h-[89%] mt-2 overflow-auto no-scrollbar ">
      {/* left */}
      <div className=" w-[35%] max-xl:w-[45%] max-md:w-full h-full px-2 overflow-auto no-scrollbar flex flex-col gap-3  ">
        {bookmark.map((jobDetails) => {
          return (
            <div key={jobDetails?.jobDetails?.job_id}>
              <JobCard jobDetails={jobDetails} isBookmarked={true} />
            </div>
          );
        })}
      </div>
      {/* right */}
      <div className="w-[60%]  max-xl:w-[50%] max-md:hidden h-full  overflow-auto no-scrollbar">
        <JobDetails />
      </div>
    </div>
  );
};

export default Bookmark;
