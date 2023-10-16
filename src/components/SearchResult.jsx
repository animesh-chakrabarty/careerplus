import React from "react";
import { data } from "../constants/data";
import JobCard from "./JobCard";

const SearchResult = () => {
  console.log(data)

  return (
    <div>
      {data?.data?.map((jobDetails) => (
        <div key={jobDetails?.job_id}>
          <JobCard jobDetails={jobDetails} />
        </div>
      ))}
    </div>
  );
};

export default SearchResult;
