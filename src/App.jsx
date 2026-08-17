import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import ProductViewer from "./components/ProductViewer";
import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";
import Showcase from "./components/Showcase";

gsap.registerPlugin(ScrollTrigger,SplitText)

function App() {
  return (
    <main>
      <NavBar></NavBar>
      <Hero></Hero>
      <ProductViewer></ProductViewer>
      <Showcase></Showcase>
    </main>
  );
}

export default App;
