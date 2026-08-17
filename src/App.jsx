import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import ProductViewer from "./components/ProductViewer";
import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";
import Showcase from "./components/Showcase";
import Footer from "./components/Footer";
import Highlights from "./components/Highlights";
import Performance from "./components/Performance";
import Features from "./components/Features";

gsap.registerPlugin(ScrollTrigger,SplitText)

function App() {
  return (
    <main>
      <NavBar></NavBar>
      <Hero></Hero>
      <ProductViewer></ProductViewer>
      <Showcase></Showcase>
      <Performance></Performance>
      <Features></Features>
      <Highlights></Highlights>
      <Footer></Footer>
    </main>
  );
}

export default App;
