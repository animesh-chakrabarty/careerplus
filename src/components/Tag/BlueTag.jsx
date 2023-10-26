import React from "react";

const BlueTag = ({ tagTitle }) => {
  return (
    <div className="bg-[#0071BD] w-fit px-4 py-1 rounded-[6px] font-lato text-white font-[500] ">
      {tagTitle}
    </div>
  );
};

export default BlueTag;
