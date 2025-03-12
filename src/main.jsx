import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./components/App";
import background from "./assets/fondo.jpg";

createRoot(document.getElementById("root")).render(
  <div
    style={{
      backgroundImage: `url(${background})`,
      backgroundSize: "cover",
      height: "100%",
      position: "",
    }}
  >
    <App />
  </div>,
);
