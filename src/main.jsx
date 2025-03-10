import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./components/Header";
import Info from "./components/Info";

createRoot(document.getElementById("root")).render(
  <>
    <Header />
    <Info />
  </>,
);
