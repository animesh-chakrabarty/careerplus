import React from "react";
import { useParams } from "react-router-dom";

const JobDetailsPage = () => {
  const { jobId } = useParams();
  console.log(jobId);
  return <div>JobDetailsPage</div>;
};

export default JobDetailsPage;
