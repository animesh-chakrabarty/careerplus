import React from "react";

const Tag = ({ tagTitle }) => {
  return (
    <div className="bg-[#ecebe9] w-fit px-4 py-1 rounded-[6px] font-robotoSlab text-gray-500 font-[500] ">
      {tagTitle}
    </div>
  );
};

export default Tag;
