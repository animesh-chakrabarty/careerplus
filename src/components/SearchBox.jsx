import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { jobRoleSuggestionData } from "../constants/data";
import { locationSuggestionData } from "../constants/data";

const SearchBox = ({ jobRole, location }) => {
  const navigate = useNavigate();
  const routeLocation = useLocation();
  const [jobRoleState, setJobRoleState] = useState(jobRole);
  const [locationState, setLocationState] = useState(location);
  const [filteredJobRoleData, setFilteredJobRoleData] = useState([]);
  const [filteredLocationData, setFilteredLocationData] = useState([]);

  const HandleSubmit = (e) => {
    e.preventDefault();
    navigate(`/jobs/${jobRoleState}/${locationState}`);
  };

  const handleJobRoleFieldChange = (e) => {
    let value = e.target.value;
    setJobRoleState(value);
    console.log(value);
    if (value) {
      var tempArr = jobRoleSuggestionData.filter((item, i) => {
        return item.jobRole.toLowerCase().includes(value.toLowerCase());
      });
    }
    // console.log(tempArr)
    setFilteredJobRoleData(tempArr);
  };

  const handleLocationFieldChange = (e) => {
    let value = e.target.value;
    setLocationState(value);
    console.log(value);
    if (value) {
      var tempArr1 = locationSuggestionData.filter((item, i) => {
        return item.city.toLowerCase().includes(value.toLowerCase());
      });
    }
    // console.log(tempArr)
    setFilteredLocationData(tempArr1);
  };

  console.log(filteredLocationData);

  return (
    <div className="py-4 ">
      <form
        action="submit"
        className={`flex max-md:flex-col items-center justify-center mb-2  ${
          routeLocation.pathname == "/" ? "flex-col" : "md:gap-5"
        }`}
        onSubmit={HandleSubmit}
      >
        <div className="flex justify-center gap-4 mb-3 max-md:flex-col max-md:w-[70%] max-md:gap-2 ">
          {/* JobRole Search Div */}
          <div className="w-1/2 max-md:w-full relative ">
            <input
              type="text"
              defaultValue={jobRole}
              value={jobRoleState}
              onChange={handleJobRoleFieldChange}
              placeholder="Job Title , Keyword..."
              className="w-full px-10 py-2 rounded-xl outline-none border max-md:w-full bg-transparent "
            />
            {/* KeyWord Suggestion */}
            {filteredJobRoleData?.length > 0 && (
              <div
                className={`searchResult bg-gray-100 border-gray-200 border absolute mt-2 w-full  px-2 flex flex-col gap-2 py-2 z-10 max-h-[250px] overflow-auto no-scrollbar`}
              >
                {filteredJobRoleData.map((item, i) => (
                  <div
                    key={i}
                    className="py-[8px] pl-8 hover:bg-gray-200 "
                    onClick={() => {
                      console.log("clicked");
                      setJobRoleState(item.jobRole);
                      setFilteredJobRoleData([]);
                    }}
                  >
                    <p className="text-[16px] truncate cursor-pointer ">
                      {item.jobRole}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
          {/* Location Search Div */}
          <div className="w-1/2 max-md:w-full relative ">
            <input
              type="text"
              defaultValue={location}
              value={locationState}
              onChange={handleLocationFieldChange}
              placeholder="location..."
              className="w-full px-10 py-2 rounded-xl outline-none border max-md:w-full bg-transparent "
            />
            {/* KeyWord Suggestion */}
            {filteredLocationData?.length > 0 && (
              <div
                className={`searchResult bg-gray-100 border-gray-200 border absolute mt-2 w-full  px-2 flex flex-col gap-2 py-2 max-h-[250px] overflow-auto no-scrollbar`}
              >
                {filteredLocationData.map((item, i) => (
                  <div
                    key={i}
                    className="py-[8px] pl-8 hover:bg-gray-200 "
                    onClick={() => {
                      console.log("clicked");
                      setLocationState(item.city);
                      setFilteredLocationData([]);
                    }}
                  >
                    <p className="text-[16px] truncate cursor-pointer ">
                      {item.city}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <button
          className={`bg-[#0071BD] px-4 py-2 rounded-xl text-white font-[600] text-[20px] max-md:text-[16px] ${
            routeLocation.pathname != "/" && "md:mb-3 md:py-[6px]"
          }`}
        >
          Find Job
        </button>
      </form>

      <hr
        className={`${routeLocation.pathname == "/" && "hidden"} max-md:hidden`}
      />
    </div>
  );
};

export default SearchBox;
