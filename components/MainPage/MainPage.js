import React, { useEffect, useState } from "react";
import { FcPositiveDynamic } from "react-icons/fc";
import { FcNegativeDynamic } from "react-icons/fc";
import { FcNeutralTrading } from "react-icons/fc";
import axios from "axios";
import News from "./News";
const MainPage = () => {
  const [sentimentPositive, setSentimentPositive] = useState(0);
  const [sentimentNeutral, setSentimentNeutral] = useState(0);
  const [sentimentNegative, setSentimentNegative] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  const getSentiment = async () => {
    const res = await axios.get(`http://127.0.0.1:5000/${searchTerm}`);
    console.log(res.data.Positive);
    console.log(res.data.Neutral);
    console.log(res.data.Negative);
    setSentimentPositive(res.data.Positive);
    setSentimentNeutral(res.data.Neutral);
    setSentimentNegative(res.data.Negative);
    //   setSentiment(res.data.Positive);
    //   console.log(sentiment.Positive);
  };

  return (
    <div className="flex flex-col items-center gap-10">
      <header className="bg-bgBlackSec py-20 w-full flex justify-center mobileL:px-0 px-4">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          type="text"
          placeholder="Company code"
          className="bg-bgBlack border-[1px] tracking-wide border-gray-300/30 rounded-l-md py-1 px-2 min-w-[230px]"
        />
        <button
          onClick={getSentiment}
          className="bg-green-700 tracking-wide text-sm text-white font-bold px-3 rounded-r-md"
        >
          Get Analytics
        </button>
      </header>

      {/* 
            SHOWWWW
     */}

      <div className="flex flex-col items-center w-full gap-12">
        <div className="flex gap-6 mobileL:flex-row flex-col">
          <p className="bg-bgBlackSec border-[1px] flex items-center gap-2 border-gray-300/30 py-1 px-4 rounded-md text-bgWhiteSec/80">
            <p className="text-white font-bold">
              {(sentimentPositive * 100).toPrecision(2)}
            </p>
            Positive
            <FcPositiveDynamic />
          </p>

          <p className="bg-bgBlackSec border-[1px] flex-nowrap flex items-center gap-2 border-gray-300/30 py-1 px-4 rounded-md text-bgWhiteSec/80">
            <p className="text-white font-bold">
              {(sentimentNeutral * 100).toPrecision(2)}
            </p>
            Neutral
            <FcNeutralTrading />
          </p>
          <p className="bg-bgBlackSec border-[1px] flex items-center gap-2 border-gray-300/30 py-1 px-4 rounded-md text-bgWhiteSec/80">
            <p className="text-white font-bold">
              {(sentimentNegative * 100).toPrecision(2)}
            </p>
            Negative
            <FcNegativeDynamic />
          </p>
        </div>
        <div className="flex gap-10 flex-wrap">
          <News />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
