import { useEffect, useState } from "react";

const Work = () => {
  const [projects, setProjects] = useState(null);
  useEffect(() => {
    let ignore = false;
    async function fetchData() {
      const res = await fetch("http://localhost:3000/projects");
      const data = await res.json();
      if (!ignore) {
        setProjects(data);
      }
    }
    fetchData();
    return () => {
      ignore = true;
    };
  }, []);
  if (projects === null) return <div>Loading...</div>;
  return (
    <section className="flex flex-col justify-center items-center gap-12 px-6 md:px-16  xl:px-48 py-32">
      <h2 className="text-5xl font-bold">Some of my work</h2>
      <div className="flex flex-wrap lg:flex-col gap-24">
        {projects &&
          projects.map((project) => {
            return (
              <div
                key={project.name}
                className="flex lg:flex-row flex-col items-center lg:items-start px-8 md:px-16 justify-center gap-8"
              >
                <img src={project.image} alt="" className="min-w-[40%] w-96" />
                <div className="flex flex-col gap-4 items-center lg:items-start">
                  <h3 className="font-semibold text-3xl">{project.name}</h3>
                  <p>{project.description}</p>
                  <a
                    target="_blank"
                    href={project.url}
                    className="underline underline-offset-2 text-cyan-100 font-bold"
                  >
                    Visit website
                  </a>
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default Work;
