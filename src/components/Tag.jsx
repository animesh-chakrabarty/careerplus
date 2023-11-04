const Tag = ({ tagTitle, color }) => {
  return (
    <div
      className={`bg-${color} w-fit px-4 py-1 rounded-[6px] font-lato text-white font-[500] max-md:text-[14px] `}
    >
      {tagTitle}
    </div>
  );
};

export default Tag;
