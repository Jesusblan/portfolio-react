import "../styles/App.css";
import Icon from "@mdi/react";
import { mdiMenu } from "@mdi/js";
import { mdiGithub } from "@mdi/js";
import { useState } from "react";
import Info from "./Info";
import Projects from "./Projects";
import Curriculum from "./Curriculum";
import ProjectsCarousel from "./ProjectsCarousel.jsx";

export default function App() {
  function gitClick() {
    window.location.href = "https://github.com/Jesusblan";
  }

  function DropMenu() {
    const [isMenu, setMenu] = useState(false);

    if (isMenu === false) {
      return <Icon onClick={() => setMenu(true)} path={mdiMenu} size={2} />;
    } else {
      return (
        <>
          <Icon onClick={() => setMenu(false)} path={mdiMenu} size={2} />
          <div className="dropMenu">
            <button onClick={homeClick}>Home</button>
            <button onClick={projectsClick}>Proyectos</button>
            <button onClick={cvClick}>CV</button>
          </div>
        </>
      );
    }
  }

  const [isHome, setHome] = useState(true);
  const [isProjects, setProjects] = useState(false);
  const [isCv, setCv] = useState(false);

  function homeClick() {
    setHome(true);
    setProjects(false);
    setCv(false);
  }

  function projectsClick() {
    setHome(false);
    setProjects(true);
    setCv(false);
  }

  function cvClick() {
    setHome(false);
    setProjects(false);
    setCv(true);
  }

  function Content() {
    if (isHome == true) {
      return (
        <>
          <Info />
          <Projects />
        </>
      );
    } else if (isProjects == true) {
      return <ProjectsCarousel />;
    } else if (isCv == true) {
      return <Curriculum />;
    }
  }

  return (
    <>
      <div className="header">
        <DropMenu />
        <br />
        <Icon onClick={gitClick} path={mdiGithub} size={2} />
      </div>
      <Content />
    </>
  );
}
