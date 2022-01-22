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
  const [allNews, setAllNews] = useState([]);
  const [companyQuote, setCompanyQuote] = useState(null);

  const quoteUrl =
    "https://financialmodelingprep.com/api/v3/quote/AAPL?apikey=75801e80587754d65c6b5eae45da6f34";

  const getSentiment = async () => {
    const res = await axios.get(`http://127.0.0.1:5000/${searchTerm}`);
    const newsRes = await axios.get(`http://192.168.29.156:8000/${searchTerm}`);
    const quoteRes = await axios.get(
      `https://financialmodelingprep.com/api/v3/quote/${searchTerm.toLocaleUpperCase()}?apikey=75801e80587754d65c6b5eae45da6f34`
    );

    console.log(quoteRes);
    setCompanyQuote(quoteRes.data[0]);
    setAllNews(newsRes.data);
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

      <div className="flex flex-col items-center w-full gap-20 pt-10">
        <div className="flex flex-col items-start gap-6 w-full px-20">
          <p className="bg-green-700 tracking-wide text-sm text-white font-bold px-3 rounded-md py-1">
            Predicted Sentiment :
          </p>
          <div className="flex gap-6 mobileL:flex-row flex-col w-full justify-center">
            <div className="bg-bgBlackSec border-[1px] flex flex-nowrap items-center gap-2 border-gray-300/30 py-1 px-4 rounded-md text-bgWhiteSec/80">
              <p className="text-white font-bold">
                {(sentimentPositive * 100).toPrecision(2)}
              </p>
              Positive
              <FcPositiveDynamic />
            </div>

            <div className="bg-bgBlackSec border-[1px] flex flex-nowrap items-center gap-2 border-gray-300/30 py-1 px-4 rounded-md text-bgWhiteSec/80">
              <p className="text-white font-bold">
                {(sentimentNeutral * 100).toPrecision(2)}
              </p>
              Neutral
              <FcNeutralTrading />
            </div>

            <div className="bg-bgBlackSec border-[1px] flex flex-nowrap items-center gap-2 border-gray-300/30 py-1 px-4 rounded-md text-bgWhiteSec/80">
              <p className="text-white font-bold">
                {(sentimentNegative * 100).toPrecision(2)}
              </p>
              Negative
              <FcNegativeDynamic />
            </div>
          </div>
        </div>

        {/* ``````````````````````` */}

        <div className="flex flex-col items-start gap-6 w-full px-20">
          <p className="bg-green-700 tracking-wide text-sm text-white font-bold px-3 rounded-md py-1">
            Companies Info :
          </p>

          <div className="flex gap-6 flex-wrap mobileL:flex-row flex-col w-full justify-center">
            <div className="bg-bgBlackSec border-[1px] flex flex-nowrap items-center gap-2 border-gray-300/30 py-1 px-4 rounded-md text-bgWhiteSec/80">
              Symbol :
              <p className="text-white font-bold">{companyQuote?.symbol}</p>
            </div>

            <div className="bg-bgBlackSec border-[1px] flex flex-nowrap items-center gap-2 border-gray-300/30 py-1 px-4 rounded-md text-bgWhiteSec/80">
              Name :<p className="text-white font-bold">{companyQuote?.name}</p>
            </div>

            <div className="bg-bgBlackSec border-[1px] flex flex-nowrap items-center gap-2 border-gray-300/30 py-1 px-4 rounded-md text-bgWhiteSec/80">
              Price :
              <p className="text-white font-bold">{companyQuote?.price}</p>
            </div>

            <div className="bg-bgBlackSec border-[1px] flex flex-nowrap items-center gap-2 border-gray-300/30 py-1 px-4 rounded-md text-bgWhiteSec/80">
              % change :
              <p className="text-white font-bold">
                {companyQuote?.changesPercentage}
              </p>
            </div>

            <div className="bg-bgBlackSec border-[1px] flex flex-nowrap items-center gap-2 border-gray-300/30 py-1 px-4 rounded-md text-bgWhiteSec/80">
              Change :
              <p className="text-white font-bold">{companyQuote?.change}</p>
            </div>

            <div className="bg-bgBlackSec border-[1px] flex flex-nowrap items-center gap-2 border-gray-300/30 py-1 px-4 rounded-md text-bgWhiteSec/80">
              Day Low :
              <p className="text-white font-bold">{companyQuote?.dayLow}</p>
            </div>

            <div className="bg-bgBlackSec border-[1px] flex flex-nowrap items-center gap-2 border-gray-300/30 py-1 px-4 rounded-md text-bgWhiteSec/80">
              Day High :
              <p className="text-white font-bold">{companyQuote?.dayHigh}</p>
            </div>

            <div className="bg-bgBlackSec border-[1px] flex flex-nowrap items-center gap-2 border-gray-300/30 py-1 px-4 rounded-md text-bgWhiteSec/80">
              Year Low :
              <p className="text-white font-bold">{companyQuote?.yearLow}</p>
            </div>

            <div className="bg-bgBlackSec border-[1px] flex flex-nowrap items-center gap-2 border-gray-300/30 py-1 px-4 rounded-md text-bgWhiteSec/80">
              Year High :
              <p className="text-white font-bold">{companyQuote?.yearHigh}</p>
            </div>

            <div className="bg-bgBlackSec border-[1px] flex flex-nowrap items-center gap-2 border-gray-300/30 py-1 px-4 rounded-md text-bgWhiteSec/80">
              Market Cap :
              <p className="text-white font-bold">{companyQuote?.marketCap}</p>
            </div>

            <div className="bg-bgBlackSec border-[1px] flex flex-nowrap items-center gap-2 border-gray-300/30 py-1 px-4 rounded-md text-bgWhiteSec/80">
              Volume :
              <p className="text-white font-bold">{companyQuote?.volume}</p>
            </div>

            <div className="bg-bgBlackSec border-[1px] flex flex-nowrap items-center gap-2 border-gray-300/30 py-1 px-4 rounded-md text-bgWhiteSec/80">
              Exchange :
              <p className="text-white font-bold">{companyQuote?.exchange}</p>
            </div>
          </div>
        </div>

        {/* ````````````````````````````` */}

        <div className="flex flex-col items-start gap-6 w-full px-10">
          <p className="bg-green-700 tracking-wide text-sm text-white font-bold px-3 rounded-md py-1 ml-10">
            Company News :
          </p>

          <div className="flex gap-4 flex-wrap justify-center mb-20">
            {allNews?.map((news, i) => {
              return <News key={i} newsHeadline={news[0]} time={news[2]} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
