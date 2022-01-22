import React from "react";

const MainPage = () => {
  return (
    <div className="flex flex-col items-center gap-20 ">
      <header className="bg-bgBlackSec py-20 w-full flex justify-center">
        <input
          type="text"
          placeholder="Company code"
          className="bg-bgBlack border-[1px] tracking-wide border-bgWhiteSec/30 rounded-l-md py-1 px-2 min-w-[230px]"
        />
        <button className="bg-green-700 tracking-wide text-sm text-white font-bold px-3 rounded-r-md">
          Get Analytics
        </button>
      </header>
      <div className="flex gap-10 flex-wrap">
        <div className="flex flex-col items-center max-w-md">
          <div>
            <img
              className="max-w-sm min-w-sm"
              src="https://s.yimg.com/os/creatr-uploaded-images/2022-01/d16b6010-7ae4-11ec-bf9f-eb33b1461c99"
              alt="newss"
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-lg font-bold text-center">
              Godzilla is headed to Apple TV+ in the MonsterVerse’s first
              live-action series
            </p>
            <p className="text-base text-center font-bold text-gray-700">
              -Engadget
            </p>

            <p className="text-sm">
              Legendary Pictures has been trying to make the MonsterVerse a
              thing for a while now, and following Godzilla and King Kong’s
              return to the movie theaters back in 2014, kaiju are now heading
              to the small screen in an upcoming series on Apple TV+.Not content
              t…
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
