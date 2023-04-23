import TimelinePoint from "./TimelinePoint";
import { useState, useEffect } from "react";

const Experience = () => {
  const [experience, setExperience] = useState(null);
  useEffect(() => {
    let ignore = false;
    async function fetchData() {
      const res = await fetch("http://localhost:3000/experience");
      const data = await res.json();
      if (!ignore) {
        setExperience(data);
      }
    }
    fetchData();
    return () => {
      ignore = true;
    };
  }, []);
  if (experience === null) return <div>Loading...</div>;
  return (
    <section className="flex pt-32 min-h-screen w-10/12 ml-12 items-center flex-col justify-center gap-16 ">
      <h2 className="text-5xl font-bold">Work Experience</h2>
      <div>
        {experience &&
          experience.map((exp, i) => {
            return (
              <TimelinePoint
                key={i}
                period={exp.period}
                title={exp.title}
                company={exp.company}
                tasks={exp.tasks}
              />
            );
          })}
      </div>
    </section>
  );
};

export default Experience;
