import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./components/Header";
import Info from "./components/Info";
import Proyects from "./components/Proyects";
import background from "./assets/fondo.jpg";

export default function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        height: "100%",
        position: "",
      }}
    >
      <Header />
      <Info />
      <Proyects />
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
