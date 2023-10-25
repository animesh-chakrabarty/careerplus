import React from "react";
import { TbLocationFilled } from "react-icons/tb";
import Tag from "./Tag";
import BlueTag from "./BlueTag";

const JobDetails = ({ jobDetails }) => {
  //   console.log(jobDetails);
  const handleClick = () => {
    jobDetails?.employer_website && window.open(jobDetails?.employer_website);
  };

  const JD = jobDetails?.job_description && jobDetails?.job_description;
  let lines = JD?.split("\n");
  let linesArray = lines?.filter((line, i) => {
    return i % 2 == 0;
  });
  // console.log(linesArray);

  return (
    <div className="w-full border-2 py-3 px-4 rounded-xl font-lato">
      {/* 1. Head */}
      <div className="w-full flex flex-col gap-3 mb-3">
        {/* 1.1. Job Title */}
        <p className="font-extrabold text-[20px] opacity-75">
          {jobDetails?.job_title}
        </p>
        {/* 1.2. Company Info */}
        <div className="flex w-full items-center gap-5">
          {jobDetails?.employer_logo && (
            <img src={jobDetails?.employer_logo} alt="" className="w-[8%]" />
          )}
          <p
            className={`font-[500] text-[16px] ${
              jobDetails?.employer_website &&
              "underline cursor-pointer text-blue-600 "
            }`}
            onClick={handleClick}
          >
            {jobDetails?.employer_name}
          </p>
        </div>
        {/* 1.3. Location */}
        <div className="flex justify-between items-center">
          <div>
            {(jobDetails?.job_city ||
              jobDetails?.job_is_remote ||
              jobDetails?.job_state ||
              jobDetails?.job_country) && (
              <div className="flex items-center gap-1 text-[17px] opacity-75">
                <TbLocationFilled />
                <p>
                  {jobDetails.job_is_remote && "Remote  "}
                  {jobDetails?.job_city ||
                    jobDetails?.job_state ||
                    jobDetails?.job_country}
                </p>
              </div>
            )}
          </div>
          <div>
            <BlueTag tagTitle={jobDetails?.job_publisher} />
          </div>
        </div>
      </div>
      <hr />
      {/* 2.Body */}
      <div className="mt-3 flex flex-col gap-3">
        {/* 2.1. Employment Type */}
        <div className="">
          <Tag tagTitle={jobDetails.job_employment_type} />
        </div>
        {/* 2.2. Skills*/}
        {jobDetails?.job_required_skills && (
          <div className="flex gap-2">
            <span className="font-[600] text-[17px] opacity-70">Skills: </span>
            <div className="flex flex-wrap gap-2">
              {jobDetails?.job_required_skills?.map((skill, i) => (
                <div key={i}>
                  <Tag tagTitle={skill} />
                </div>
              ))}
            </div>
          </div>
        )}
        {/* 2.3. JD */}
        {jobDetails?.job_description && (
          <div className="opacity-70 text-[16px]">
            <p className="font-[600] text-[17px]">Job Description : </p>
            {linesArray?.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        )}
        {/* 2.4. Experience */}
        {jobDetails?.job_required_experience?.required_experience_in_months && (
          <div className="opacity-70 text-[16px]">
            <span className="font-[600] text-[17px]">Experience : </span>
            <span>
              {jobDetails?.job_required_experience
                ?.required_experience_in_months / 12}{" "}
              years
            </span>
          </div>
        )}
        {/* 2.5. Education */}
          {
            jobDetails?.job_required_education?.degree_mentioned && <div>
              <span>Education : </span>
              <span>{
                  

                }</span>
            </div>
          }
        {/* 2.6. Estimated salary */}

        {/* 2.7. Apply Link */}
      </div>
    </div>
  );
};

export default JobDetails;
