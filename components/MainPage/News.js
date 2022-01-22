import React from "react";

const News = ({ newsHeadline, time }) => {
  return (
    <div className="flex flex-col items-center max-w-[300px] min-w-[300px] border-2 border-bgWhiteSec/30 rounded-md">
      <div className="flex flex-col gap-2 p-2">
        <p className="text-lg font-bold text-left">{newsHeadline}</p>

        <p className="text-sm text-gray-400 text-left">{time}</p>
      </div>
    </div>
  );
};

export default News;
