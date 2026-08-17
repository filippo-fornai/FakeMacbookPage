import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { useMediaQuery } from "react-responsive";

const Highlights = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 1024px" });

  useGSAP(() => {
    gsap.to([".left-column", ".right-column"], {
      scrollTrigger: {
        trigger: "#highlights",
        start: isMobile ? "bottom bottom" : "top center",
      },
      y: 0,
      opacity: 1,
      stagger: 0.5,
      duration: 1,
      ease: "power1.inOut",
    });
  });

  return (
    <section id="highlights">
      <h2>There's never been a better time to upgrade.</h2>
      <h3>Here's what you get with your new MacBook Pro</h3>

      <div className="masonry">
        <div className="left-column">
          <div>
            <img
              src={
                import.meta.env.BASE_URL.substring(
                  0,
                  import.meta.env.BASE_URL.length - 1,
                ) + "/laptop.png"
              }
              alt="LOGO"
            />
            <p>Fly through demanding tasks up to 9.8x faster.</p>
          </div>
          <div>
            <img
              src={
                import.meta.env.BASE_URL.substring(
                  0,
                  import.meta.env.BASE_URL.length - 1,
                ) + "/sun.png"
              }
              alt="SUN"
            />
            <p>
              A stunning <br />
              Liquid Retina XDR <br />
              display.
            </p>
          </div>
        </div>

        <div className="right-column">
          <div className="apple-gradient">
            <img
              src={
                import.meta.env.BASE_URL.substring(
                  0,
                  import.meta.env.BASE_URL.length - 1,
                ) + "/ai.png"
              }
              alt="AI"
            />
            <p>
              Built for <br /> <span>Apple Intelligence.</span>
            </p>
          </div>
          <div>
            <img
              src={
                import.meta.env.BASE_URL.substring(
                  0,
                  import.meta.env.BASE_URL.length - 1,
                ) + "/battery.png"
              }
              alt="BATTERY"
            />
            <p>
              Up to
              <span className="green-gradient"> 14 more hours </span> <br />
              battery life.{" "}
              <span className="text-dark-100">(Up to 24 hourse total.)</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
