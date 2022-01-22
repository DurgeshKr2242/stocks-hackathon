import React from "react";

const News = () => {
  const url =
    "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=bd34a85ab81a4b86b7942bffd62aba76";
  return (
    <div>
      <div className="flex flex-col items-center max-w-[300px] border-2 border-bgWhiteSec/30 rounded-md">
        <div>
          <img
            className="max-w-[300px] rounded-md"
            src="https://s.yimg.com/os/creatr-uploaded-images/2022-01/d16b6010-7ae4-11ec-bf9f-eb33b1461c99"
            alt="newss"
          />
        </div>
        <div className="flex flex-col gap-2 p-2">
          <p className="text-lg font-bold text-center">
            Godzilla is headed to Apple TV+ in the MonsterVerse’s first
            live-action series
          </p>
          <p className="text-base text-left font-bold text-gray-400">
            -Engadget
          </p>

          <p className="text-sm text-gray-400">
            Legendary Pictures has been trying to make the MonsterVerse a thing
            for a while now, and following Godzilla and King Kong’s return to
            the movie theaters back in 2014, kaiju are now heading to the small
            screen in an upcoming series on Apple TV+.Not content t…
          </p>
        </div>
      </div>
    </div>
  );
};

export default News;
