import { ImLocation } from "react-icons/im";
import Tag from "./Tag";

import { useDispatch } from "react-redux";
import { setJobdetails } from "../redux/JobDetailsSlice";

const JobCard = ({ jobDetails }) => {
  const dispatch = useDispatch();
  const jobDetailsLocal = {
    jobTitle: jobDetails?.job_title,
    employerLogo: jobDetails?.employer_logo,
    employerName: jobDetails?.employer_name,
    jobCity: jobDetails?.job_city,
    jobIsRemote: jobDetails?.job_is_remote,
    jobEmploymentTitle: jobDetails?.job_employment_type,
    skills: jobDetails?.job_required_skills,
    experience: jobDetails?.job_required_experience,
    education: jobDetails?.job_required_education,
    postedOn: jobDetails?.job_publisher,
    applyLink: jobDetails?.job_apply_link,
  };

  // console.log(jobDetailsLocal);

  const handleClick = () => {
    console.log("clicked");
    dispatch(setJobdetails(jobDetails));
  };

  return (
    <div
      className=" border-2 w-[450px] rounded-xl px-4 py-4 font-lato cursor-pointer"
      onClick={handleClick}
    >
      {/* 1.Head */}
      <div className="flex flex-col gap-3 mb-2">
        {/* 1.1.Job Title */}
        <p className="font-extrabold text-[20px]">{jobDetailsLocal.jobTitle}</p>
        {/* 1.2.Company Logo & Name */}
        <div className="flex items-center gap-4 w-full text-[18px]">
          {jobDetailsLocal.employerLogo && (
            <img
              src={jobDetailsLocal.employerLogo}
              alt=""
              className="max-w-[30%]"
            />
          )}
          <p>{jobDetailsLocal.employerName}</p>
        </div>
        {/* 1.3.Location */}
        {jobDetailsLocal?.jobIsRemote ||
          (jobDetailsLocal?.jobCity && (
            <div className="flex items-center gap-1 text-[17px]">
              <ImLocation />
              <p>
                {jobDetailsLocal.jobIsRemote
                  ? "Remote"
                  : jobDetailsLocal.jobCity}
              </p>
            </div>
          ))}
      </div>
      <hr />
      {/* 2.Body */}
      <div className="mt-2 flex flex-col gap-2">
        {/* 2.1.Employment Type */}
        <div className="">
          <Tag tagTitle={jobDetailsLocal.jobEmploymentTitle} />
        </div>
        {/* 2.2.Skills */}
        {jobDetailsLocal.skills && (
          <div className="flex gap-2">
            <span className="text-[17px]">Skills: </span>
            <div className="flex flex-wrap gap-2">
              {jobDetailsLocal.skills?.map((skill, i) => (
                <div key={i}>
                  <Tag tagTitle={skill} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 2.3.Experience */}
        {jobDetailsLocal.experience.required_experience_in_months && (
          <div className="text-[17px]">
            <span>Experience : </span>
            <span>
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
