import "../styles/Projects.css";

export default function Projects() {
  return (
    <div className="proyectos">
      <h2>Proyectos</h2>
      <p onClick={() => window.location.href="https://cv-react-jesusblanco.netlify.app"}>C.V Aplication</p>
      <p onClick={() => window.location.href="https://github.com/Jesusblan/weather-app"}>Wheater app</p>
      <p onClick={() => window.location.href="https://jesusblan.github.io/restaurant-js/"}>Restaurant page</p>
      <p onClick={() => window.location.href="https://github.com/Jesusblan/imageCarousel-dropdownMenus-js"}>Image Carousel</p>
    </div>
  );
}
