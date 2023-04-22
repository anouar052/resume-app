import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <header className=" absolute top-0 left-0 w-full px-24 flex items-center justify-between">
      <h2>Alh.</h2>
      <nav className="flex items-center justify-around gap-4">
        <Link to="/">home</Link>
        <Link to="/about">About</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/work">Work</Link>
      </nav>
    </header>
  );
};

export default Nav;
