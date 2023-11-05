import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBox = ({ jobRole, location }) => {
  const navigate = useNavigate();
  const [jobRoleState, setJobRoleState] = useState(jobRole);
  const [locationState, setLocationState] = useState(location);

  const HandleSubmit = (e) => {
    e.preventDefault();
    navigate(`/jobs/${jobRoleState}/${locationState}`);
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
            defaultValue={jobRole}
            onChange={(e) => setJobRoleState(e.target.value)}
            placeholder="Job Title , Keyword..."
            className="px-10 py-2 rounded-xl outline-none border max-md:w-full"
          />
          <input
            type="text"
            defaultValue={location}
            onChange={(e) => setLocationState(e.target.value)}
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
