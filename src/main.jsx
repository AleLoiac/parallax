import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Background from "./components/Background";
import About from "./components/About";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Background>
      <Navbar />
      <Hero />
      <About />
    </Background>
  </StrictMode>
);
