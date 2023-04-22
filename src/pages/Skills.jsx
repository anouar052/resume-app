import { useState, useEffect } from "react";

const Skills = () => {
  const [skills, setSkills] = useState(null);
  useEffect(() => {
    let ignore = false;
    async function fetchData() {
      const res = await fetch("http://localhost:3000/skills");
      const data = await res.json();
      if (!ignore) {
        setSkills(data);
      }
    }
    fetchData();
    console.log(skills);
    return () => {
      ignore = true;
    };
  }, []);
  if (skills === null) return <div>Loading...</div>;
  return (
    <section className="min-h-screen w-full flex flex-col justify-center items-center px-48 py-32 gap-6 ">
      <h2 className="text-5xl font-bold">My skills</h2>
      <div className="w-2/3 flex flex-col gap-24">
        {skills &&
          skills.map((category) => {
            return (
              <div className="flex flex-col gap-6">
                <h3 className="text-3xl font-semibold">{category.category}</h3>
                <ul className="flex  items-center gap-5">
                  {category.list.map((skill) => {
                    return (
                      <li
                        key={skill.name}
                        className="flex flex-col justify-center items-center"
                      >
                        <img
                          src={skill.icons}
                          width={48}
                          height={48}
                          className="w-16 h-16"
                          alt=""
                        />
                        <span>{skill.name}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default Skills;
