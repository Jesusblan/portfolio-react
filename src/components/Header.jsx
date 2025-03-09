import "../styles/Header.css";
import Icon from "@mdi/react";
import { mdiMenu } from "@mdi/js";
import { mdiGithub } from "@mdi/js";
import { useState } from "react";

export default function Header() {
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
            <button onClick={() => setMenu(false)}>Home</button>
            <button onClick={() => setMenu(false)}>Proyectos</button>
            <button onClick={() => setMenu(false)}>CV</button>
          </div>
        </>
      );
    }
  }

  return (
    <div className="header">
      <DropMenu />
      <br />
      <Icon onClick={gitClick} path={mdiGithub} size={2} />
    </div>
  );
}
