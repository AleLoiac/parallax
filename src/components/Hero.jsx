import { useEffect, useRef } from "react";

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
        const value = window.scrollY;

        starsRef.current.style.transform = `translateX(${value * 0.25}px)`;
        moonRef.current.style.transform = `translateY(${value * 1.2}px)`;
        mountainsBehindRef.current.style.transform = `translateY(${
          value * 0.5
        }px)`;
        textRef.current.style.transform = `translate(${
          -value * 2
        }px, ${value}px)`;
        btnRef.current.style.transform = `translateY(${value}px)`;
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
        className="absolute text-white whitespace-nowrap text-[15vw] sm:text-[7.5vw] font-bold z-10 right-[-200px] sm:right-[-250px]"
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
