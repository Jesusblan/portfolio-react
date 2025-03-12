import "../styles/Info.css";

export default function Info() {

    
  function gitClick() {
    window.location.href = "https://github.com/Jesusblan";
  }

  return (
    <div className="info">
      <h1>Jesús Blanco</h1>
      <p>ReactJS - JavaScript - CSS - HTML</p>
      <p>Lorem ipsilum relleno wapo ahora me pienso que piner blabralbralbr seguro que se ma hace largo al final yatusabe bjabajabja eso mu bien</p>
      <p className="git" onClick={gitClick}>
        Echale un vistazo a mi GitHub!
      </p>
    </div>
  );
}
