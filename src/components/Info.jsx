import "../styles/Info.css"

export default function Info() {
    function gitClick(){
        window.location.href="https://github.com/Jesusblan"
    }

    return (
        <div className="info">
            <h1>Jesús Blanco</h1>

            <p>Desarrollador web con experiencia en JavasCript &#40;ReactJS&#41;, CSS y HTML.</p>
            <p className="git" onClick={gitClick}>Echale un vistazo a mi GitHub!</p>
        </div>

    );
}