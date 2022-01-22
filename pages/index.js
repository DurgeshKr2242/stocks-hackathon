import MainPage from "../components/MainPage/MainPage";

export default function Home() {
  return (
    <div className="w-full h-full ">
      <div className="w-full py-2 border-b-[1px] border-bgWhiteSec/30 bg-bgBlackSec h-auto">
        <p className="text-center text-2xl  font-bold uppercase ">STOKS</p>
      </div>
      <MainPage />
    </div>
  );
}
