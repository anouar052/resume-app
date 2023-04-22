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
    console.log(heroText);
    return () => {
      ignore = true;
    };
  }, []);

  if (heroText === null) return <div>loading...</div>;

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <h1 className=" text-5xl w-3/5 font-semibold leading-relaxed">
        {heroText.text}
      </h1>
    </div>
  );
};

export default Home;
