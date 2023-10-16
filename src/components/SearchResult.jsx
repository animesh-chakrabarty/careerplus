import { data } from "../constants/data";
import JobCard from "./JobCard";

const SearchResult = () => {
  console.log(data);

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
      <div className="w-[65%] h-full bg-red-400 overflow-auto no-scrollbar">
        <div className="h-[400px] bg-white"></div>
        <div className="h-[400px] bg-black"></div>
        <div className="h-[400px] bg-blue-400"></div>
      </div>
    </div>
  );
};

export default SearchResult;
