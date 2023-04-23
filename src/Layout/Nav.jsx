import { Link } from "react-router-dom";
import { useState } from "react";
const Nav = () => {
  const navLinks = ["home", "about", "skills", "work", "experience"];
  const [active, setActive] = useState("home");
  // const handleClick = (e) => {
  //   e.preventDefault();
  //   setActive(e.target.innerText);
  // };

  return (
    <header className=" absolute top-0 left-0 w-full px-24 flex items-center justify-between">
      <h2 className="text-4xl font-bold">
        <Link to="/">
          Alh <span className="text-cyan-400 text-6xl">.</span>
        </Link>
      </h2>
      <nav className="flex items-center justify-around gap-8 font-semibold">
        {navLinks.map((navLink) => {
          if (active === navLink) {
            return (
              <Link to={`/${navLink}`} key={navLink} className="text-cyan-400">
                {navLink}
              </Link>
            );
          } else {
            return (
              <Link
                to={`/${navLink}`}
                key={navLink}
                className="hover:border-b-cyan-200 hover:border-b-2 py-2"
                onClick={(e) => {
                  setActive(e.target.innerText);
                }}
              >
                {navLink}
              </Link>
            );
          }
        })}
      </nav>
    </header>
  );
};

export default Nav;
