import { useEffect, useRef } from "react";

// ToDo: remove background, substitute animation with GPU optimazed ones,
// improve H2 effect slowing it down and increasing font on mobile

const Hero = () => {
  const starsRef = useRef(null);
  const moonRef = useRef(null);
  const mountainsBehindRef = useRef(null);
  const mountainsFrontRef = useRef(null);
  const textRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (
        starsRef.current &&
        moonRef.current &&
        mountainsBehindRef.current &&
        mountainsFrontRef.current &&
        textRef.current &&
        btnRef.current
      ) {
        let value = window.scrollY;
        starsRef.current.style.left = value * 0.25 + "px";
        moonRef.current.style.top = value * 1.2 + "px";
        mountainsBehindRef.current.style.top = value * 0.5 + "px";
        textRef.current.style.marginRight = value * 4 + "px";
        textRef.current.style.marginTop = value * 1.5 + "px";
        btnRef.current.style.transform = `translateY(${10 + value}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative bg-gradient-to-b from-[#2b1055] to-[#7597de] overflow-hidden min-h-screen p-[100px] flex justify-center items-center gradient-before-box"
    >
      <img src="/images/stars.png" ref={starsRef} className="parallax-image" />
      <img
        src="/images/moon.png"
        ref={moonRef}
        className="parallax-image mix-blend-screen"
      />
      <img
        src="/images/mountains_behind.png"
        ref={mountainsBehindRef}
        className="parallax-image"
      />
      <h2
        ref={textRef}
        className="absolute text-white whitespace-nowrap text-[7.5vw] font-bold z-10 right-[-200px] sm:right-[-250px]"
      >
        Moon Light
      </h2>
      <a
        href="#"
        ref={btnRef}
        className="py-[8px] px-[30px] rounded-4xl bg-white text-[#2b1055] text-2xl z-10 translate-y-[100px]"
      >
        Explore
      </a>
      <img
        src="/images/mountains_front.png"
        ref={mountainsFrontRef}
        className="parallax-image z-20"
      />
    </section>
  );
};

export default Hero;
