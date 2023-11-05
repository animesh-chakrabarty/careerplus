import React, { useState } from "react";
// import { useLazyFetchJobsQuery } from "../redux/JSearchAPI";
import { useDispatch } from "react-redux";
import { setJobList } from "../redux/JobListSlice";
import { useNavigate } from "react-router-dom";

const SearchBox = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [jobRole, setJobRole] = useState("");
  const [location, setLocation] = useState("");

  // const [triggerQuery, res] = useLazyFetchJobsQuery();
  // console.log(res?.data?.data);

  // res && dispatch(setJobList(res?.data?.data));

  const HandleSubmit = (e) => {
    e.preventDefault();
    console.log(jobRole);
    console.log(location);

    // const query = jobRole + " " + location;
    navigate(`/jobs/${jobRole}/${location}`);

    // console.log(query);
    // triggerQuery(query);
  };

  return (
    <div className="py-4">
      <form
        action="submit"
        className="flex flex-col  items-center "
        onSubmit={HandleSubmit}
      >
        <div className="flex justify-center gap-4 mb-3 max-md:flex-col max-md:w-[70%] max-md:gap-2 ">
          <input
            type="text"
            value={jobRole}
            onChange={(e) => setJobRole(e.target.value)}
            placeholder="Job Title , Keyword..."
            className="px-10 py-2 rounded-xl outline-none border max-md:w-full"
          />
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Location..."
            className="px-10 py-2 rounded-xl outline-none border"
          />
        </div>
        <button className="bg-[#0071BD] px-4 py-2 rounded-xl text-white font-[600] text-[20px] max-md:text-[16px]">
          Find Job
        </button>
      </form>
    </div>
  );
};

export default SearchBox;
