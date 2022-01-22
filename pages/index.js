import MainPage from "../components/MainPage/MainPage";

export default function Home() {
  return (
    <div className="w-full h-full">
      <div className="w-full bg-bgBlackSec h-auto">
        <p className="text-center text-2xl  font-bold uppercase underline decoration-from-font decoration-solid decoration-green-700 underline-offset-4 ">
          STOKS
        </p>
      </div>
      <MainPage />
    </div>
  );
}
