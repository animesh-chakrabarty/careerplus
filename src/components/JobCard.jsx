import { TbLocationFilled } from "react-icons/tb";
import { BsFillBookmarkFill } from "react-icons/bs";
import { MdOutlineDownloadDone } from "react-icons/md";

import Tag from "./Tag/GreyTag";

import { useDispatch, useSelector } from "react-redux";
import { setJobdetails } from "../redux/JobDetailsSlice";
import BlueTag from "./Tag/BlueTag";
import { useNavigate } from "react-router-dom";
import GreyTag from "./Tag/GreyTag";
import { setBookmark } from "../redux/BookmarkedJobSlice";

const JobCard = ({ jobDetails, isBookmarked }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // console.log(jobDetails);

  const jobDetailsLocal = {
    jobTitle: jobDetails?.job_title,
    employerLogo: jobDetails?.employer_logo,
    employerName: jobDetails?.employer_name,
    publisher: jobDetails?.job_publisher,
    jobCity: jobDetails?.job_city,
    jobIsRemote: jobDetails?.job_is_remote,
    jobEmploymentTitle: jobDetails?.job_employment_type,
    skills: jobDetails?.job_required_skills,
    experience: jobDetails?.job_required_experience,
    education: jobDetails?.job_required_education,
    postedOn: jobDetails?.job_publisher,
    applyLink: jobDetails?.job_apply_link,
  };

  const handleClick = () => {
    dispatch(setJobdetails(jobDetails));
    const windowWidth = window.innerWidth;
    windowWidth < 768 && navigate(`/jobDetails/${jobDetails?.job_id}`);
  };

  const handleBookMarkClick = () => {
    const dataExists = localStorage.getItem("careerPlus_bookmarked");

    if (dataExists) {
      const temp = JSON.parse(dataExists);
      let jobIds = temp?.jobIds;
      if (isBookmarked) {
        // If job is already bookmarked , remove it from list
        let jobIdsUpdated1 = jobIds.filter(
          (jobId) => jobId !== jobDetails?.job_id
        );
        const updatedTemp1 = {
          jobIds: jobIdsUpdated1,
        };
        localStorage.setItem(
          "careerPlus_bookmarked",
          JSON.stringify(updatedTemp1)
        );
      } else {
        // If job is not bookmarked , add it to the list
        let jobIdsUpdated2 = [...jobIds, jobDetails?.job_id];
        const updatedTemp2 = {
          jobIds: jobIdsUpdated2,
        };
        localStorage.setItem(
          "careerPlus_bookmarked",
          JSON.stringify(updatedTemp2)
        );
      }
    } else {
      const temp = {
        jobIds: [jobDetails?.job_id],
      };
      localStorage.setItem("careerPlus_bookmarked", JSON.stringify(temp));
    }

    const dataExists2 = localStorage.getItem("careerPlus_bookmarked");

    // console.log(JSON.parse(dataExists2));

    dispatch(setBookmark(JSON.parse(dataExists2)));
    // console.log(JSON.parse(dataExists2));
  };

  return (
    <div
      className=" border-2 w-[100%] rounded-xl px-4 py-4 font-lato cursor-pointer"
      onClick={handleClick}
    >
      {/* 1.Head */}
      <div className="flex flex-col gap-3 mb-2">
        {/* 1.1.Job Title */}
        <div className="font-extrabold text-[20px] opacity-75 flex justify-between items-center">
          {/* 1.1.1 Job Title */}
          <p>{jobDetailsLocal.jobTitle}</p>
          {/* 1.1.2 Save & Applied Button */}
          <div className="flex gap-3 ">
            <BsFillBookmarkFill
              onClick={(e) => {
                e.stopPropagation();
                handleBookMarkClick();
              }}
              className={`${isBookmarked && "text-blue-500"} `}
            />
            <MdOutlineDownloadDone size={25} />
          </div>
        </div>
        {/* 1.2.Company Logo & Name */}
        <div className="flex items-center gap-4 w-full text-[18px]">
          {jobDetailsLocal.employerLogo && (
            <img
              src={jobDetailsLocal.employerLogo}
              alt=""
              className="w-[15%]"
            />
          )}
          <p className="opacity-75">{jobDetailsLocal.employerName}</p>
        </div>
        {/* 1.3.Location & postedOn tag*/}
        <div className="flex justify-between items-center">
          <div>
            {(jobDetailsLocal?.jobCity ||
              jobDetailsLocal?.jobIsRemote ||
              jobDetails?.job_state ||
              jobDetails?.job_country) && (
              <div className="flex items-center gap-1 text-[17px] opacity-75">
                <TbLocationFilled />
                <p>
                  {jobDetailsLocal.jobIsRemote && "Remote  "}
                  {jobDetails?.job_city ||
                    jobDetails?.job_state ||
                    jobDetails?.job_country}
                </p>
              </div>
            )}
          </div>
          <div>
            <BlueTag tagTitle={jobDetailsLocal?.publisher} />
          </div>
        </div>
      </div>
      <hr />
      {/* 2.Body */}
      <div className="mt-2 flex flex-col gap-2">
        {/* 2.1.Employment Type */}
        <div className="">
          <GreyTag tagTitle={jobDetailsLocal.jobEmploymentTitle} />
        </div>
        {/* 2.2.Skills */}
        {jobDetailsLocal.skills && (
          <div className="flex gap-2">
            <span className="text-[17px] opacity-75 font-[600]">Skills: </span>
            <div className="flex flex-wrap gap-2">
              {jobDetailsLocal.skills?.map((skill, i) => (
                <div key={i}>
                  <GreyTag tagTitle={skill} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 2.3.Experience */}
        {jobDetailsLocal.experience.required_experience_in_months && (
          <div className="text-[17px]">
            <span className="opacity-75 font-[600]">Experience : </span>
            <span className="opacity-75">
              {jobDetailsLocal.experience.required_experience_in_months / 12}{" "}
              years
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobCard;
