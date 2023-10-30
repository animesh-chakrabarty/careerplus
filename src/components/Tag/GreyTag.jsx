import React from "react";

const GreyTag = ({ tagTitle }) => {
  return (
    <div className="bg-[#ecebe9] w-fit px-4 py-1 rounded-[6px] font-lato text-gray-500 font-[500]  max-md:text-[14px]">
      {tagTitle}
    </div>
  );
};

export default GreyTag;
