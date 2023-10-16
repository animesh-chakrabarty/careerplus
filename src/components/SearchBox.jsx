import React from "react";

const SearchBox = () => {
  return (
    <div className="py-7">
      <form action="" className="flex flex-col items-center">
        <div className="flex justify-center gap-4 mb-3">
          <input type="text" placeholder="Job Title , Keyword..." className="px-10 py-2 rounded-xl outline-none border-2"/>
          <input type="text" placeholder="Location..." className="px-10 py-2 rounded-xl outline-none border-2"/>
        </div>
        <button className="bg-[#0071BD] px-4 py-2 rounded-xl text-white font-[600] text-[20px] ">Find Job</button>
      </form>
    </div>
  );
};

export default SearchBox;
