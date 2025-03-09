import "../styles/Header.css";
import Icon from "@mdi/react";
import { mdiMenu } from "@mdi/js";
import { mdiGithub } from "@mdi/js";

export default function Header() {
  function gitClick() {
    window.location.href = "https://github.com/Jesusblan";
  }

  function dropMenu(){
    return (
        <div className="dropMenu">
            <button>Home</button>
            <button>Proyectos</button>
            <button>CV</button>
        </div>
    );
  }

  return (
    <div className="header">
      <Icon path={mdiMenu} size={2} />
      <br />
      <Icon onClick={gitClick} path={mdiGithub} size={2} />
    </div>
  );
}
