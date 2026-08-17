import React, { useRef } from "react";
import { performanceImages, performanceImgPositions } from "../constants";
import { useMediaQuery } from "react-responsive";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Performance = () => {
  const isMobile = useMediaQuery({ query: "(max-width:1024px)" });
  const performanceImagesPositions = performanceImgPositions;
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      ".content p",
      { opacity: 0, y: 10 },
      {
        opacity: 1,
        y: 0,
        ease: "power1.out",
        scrollTrigger: {
          trigger: ".content p",
          start: "top bottom",
          end: "top center",
          scrub: true,
          invalidateOnRefresh: true,
        },
      },
    );

    if (isMobile) return;
    const tl = gsap.timeline({
      defaults: { ease: "power1.inOut", duration: 2, overwrite: "auto" },
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "center center",
        scrub: true,
        invalidateOnRefresh: true,
      },
    });

    performanceImagesPositions.forEach((pos)=>{
      if(pos.id === "p5")return;

      const toVars = {y:0, autoAlpha:1};
      if(pos.left !== undefined) toVars.left = `${pos.left}%`;
      if(pos.right !== undefined) toVars.right = `${pos.right}%`;
      if(pos.bottom !== undefined) toVars.bottom = `${pos.bottom}%`;
      if(pos.transform !== undefined) toVars.transfrom = pos.transform;

      tl.to(`.${pos.id}`,toVars,0)

    })

  },{scope:sectionRef,dependencies:[isMobile]});

  return (
    <section id="performance" ref={sectionRef}>
      <h2>Next-level graphics performance. Game on.</h2>

      <div className="wrapper">
        {performanceImages.map(({ id, src, alt }, index) => (
          <img
            key={index}
            src={
              import.meta.env.BASE_URL.substring(
                0,
                import.meta.env.BASE_URL.length - 1,
              ) + src
            }
            className={id}
            alt={alt || `Performance Image #${index + 1}`}
          />
        ))}
      </div>

      <div className="content">
        <p>
          Run graphics-intensive workflows with a responsiveness that keeps up
          with your imagination. The M4 family of chips features a GPU with a
          second-generation hardware-accelerated ray tracing engine that renders
          images faster,{" "}
          <span className="text-white">
            so gaming feels more immersive and realistic than ever.
          </span>{" "}
          And Dynamic Caching optimizes fast on-chip memory to dramatically
          increase average GPU utilization — driving a huge performance boost
          for the most demanding pro apps and games.
        </p>
      </div>
    </section>
  );
};

export default Performance;
