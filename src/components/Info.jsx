import "../styles/Info.css";

export default function Info() {
  function gitClick() {
    window.location.href = "https://github.com/Jesusblan";
  }

  return (
    <div className="info">
      <h1>Jesús Blanco</h1>
      <p>ReactJS - JavaScript - CSS - HTML</p>
      <p>
        Desarrollador web especializado en ReactJS. Esta es mi página personal,
        donde puedes conocer más sobre mis proyectos y habilidades. ¡Explora y
        no dudes en contactarme!
      </p>
      <p className="git" onClick={gitClick}>
        Echale un vistazo a mi GitHub!
      </p>
    </div>
  );
}
