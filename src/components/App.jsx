import "../styles/App.css";
import Icon from "@mdi/react";
import { mdiMenu } from "@mdi/js";
import { mdiGithub } from "@mdi/js";
import { useState } from "react";
import Info from "./Info";
import Proyects from "./Proyects";

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
            <button onClick={proyectsClick}>Proyectos</button>
            <button onClick={cvClick}>CV</button>
          </div>
        </>
      );
    }
  }

  const [isHome, setHome] = useState(true);
  const [isProyects, setProyects] = useState(false);
  const [isCv, setCv] = useState(false);

  function homeClick() {
    setHome(true);
    setProyects(false);
    setCv(false);
  }

  function proyectsClick() {
    setHome(false);
    setProyects(true);
    setCv(false);
  }

  function cvClick() {
    setHome(false);
    setProyects(false);
    setCv(true);
  }

  function Content() {
    if (isHome == true) {
      return (
        <>
          <Info />
          <Proyects />
        </>
      );
    } else if (isProyects == true) {
      return <h1>proyectos</h1>;
    } else if (isCv == true) {
      return <h1>Cv</h1>;
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
