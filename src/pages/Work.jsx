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
    <section className="flex flex-col justify-center items-center gap-12 px-48 py-32">
      <h2 className="text-5xl font-bold">Some of my work</h2>
      {projects &&
        projects.map((project) => {
          return (
            <div className="flex items-center justify-center gap-8">
              <img src={project.image} alt="" className="w-2/5" />
              <div className="flex flex-col gap-4">
                <h3 className="font-semibold text-3xl">{project.name}</h3>
                <p>{project.description}</p>
                <a
                  href={project.url}
                  className="underline underline-offset-1 text-cyan-100"
                >
                  Visit website
                </a>
              </div>
            </div>
          );
        })}
    </section>
  );
};

export default Work;
