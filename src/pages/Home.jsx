import { useState, useEffect } from "react";

const Home = () => {
  const [heroText, setHeroText] = useState(null);
  useEffect(() => {
    let ignore = false;
    async function fetchData() {
      const res = await fetch("http://localhost:3000/home");
      const data = await res.json();
      if (!ignore) {
        setHeroText(data);
      }
    }
    fetchData();
    return () => {
      ignore = true;
    };
  }, []);

  if (heroText === null) return <div>loading...</div>;

  return (
    <div className=" h-screen flex flex-col justify-center items-center gap-24 w-5/6 md:w-4/5 ">
      <h1 className="text-3xl md:text-4xl lg:text-5xl w-5/6 md:w-4/5 lg:w-3/5 font-semibold leading-[1.7em] md:leading-[1.5em] lg:leading-[1.5em]">
        {heroText.text}
      </h1>
      <div className="text-xl flex flex-wrap md:flex-row flex-col justify-center items-start md:items-center gap-6 md:gap-10 lg:gap-24 ">
        <p className="flex justify-center items-center gap-3">
          <span className="text-slate-300 ">
            <img src="/phone.svg" className="w-10" alt="" />
          </span>
          {heroText.phone}
        </p>
        <p className="flex justify-center items-center gap-3">
          <span className="text-slate-300 ">
            <img src="/website.svg" className="w-8" alt="" />
          </span>
          <a href="https://anouar-alh.com" target="_blank" rel="noreferrer">
            {heroText.website}
          </a>
        </p>
        <p className="flex justify-center items-center gap-3">
          <span className="text-slate-300 ">
            <img src="/gmail.svg" alt="" className="w-8" />
          </span>
          {heroText.gmail}
        </p>
      </div>
    </div>
  );
};

export default Home;
