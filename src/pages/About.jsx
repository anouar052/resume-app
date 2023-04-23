import { useEffect, useState } from "react";
const About = () => {
  const [about, setAbout] = useState(null);
  useEffect(() => {
    let ignore = false;
    async function fetchData() {
      const res = await fetch("http://localhost:3000/about");
      const data = await res.json();
      if (!ignore) {
        setAbout(data.paragraphs);
        console.log(about);
      }
    }
    fetchData();
    return () => {
      ignore = true;
    };
  }, []);
  if (about === null) return <div>Loading...</div>;
  return (
    <section className="min-h-screen w-full flex flex-col justify-center items-center px-48 py-32 gap-6 ">
      <h2 className="text-5xl font-bold">
        <span></span>About me
      </h2>
      <div className="text-xl font-semibold leading-loose w-2/3 flex flex-col">
        <p>
          Welcome to my portfolio! I &apos;m
          <span className="text-cyan-500"> Mohamed Anouar Alahiane</span>
        </p>
        {about &&
          about.map((paragraph) => {
            return <p>{paragraph}</p>;
          })}
      </div>
    </section>
  );
};

export default About;
