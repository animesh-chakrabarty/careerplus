import { data } from "../constants/data";
import JobCard from "./JobCard";

import { useSelector } from "react-redux";

const SearchResult = () => {
  // console.log(data);
  const jobDetailsTemp = useSelector(state=>state.jobDetails);

  console.log("1")
  console.log(jobDetailsTemp);

  return (
    <div className="flex h-full overflow-auto no-scrollbar">
      {/* left */}
      <div className=" w-[35%] h-full px-2 overflow-auto no-scrollbar flex flex-col gap-3">
        {data?.data?.map((jobDetails) => (
          <div key={jobDetails?.job_id}>
            <JobCard jobDetails={jobDetails} />
          </div>
        ))}
      </div>
      {/* right */}
      <div className="w-[65%] h-full  overflow-auto no-scrollbar">
        <div className="h-[400px] bg-red-400"></div>
        <div className="h-[400px] bg-black"></div>
        <div className="h-[400px] bg-blue-400"></div>
      </div>
    </div>
  );
};

export default SearchResult;
