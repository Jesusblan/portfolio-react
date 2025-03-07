import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./components/App.jsx";
import Menu from "./components/Menu.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <Header />
    <Menu />
  </>,
);
