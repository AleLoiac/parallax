const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen w-screen p-[100px] flex justify-center items-center"
    >
      <img src="/images/stars.png" className="parallax-image" />
      <img src="/images/moon.png" className="parallax-image mix-blend-screen" />
      <img src="/images/mountains_behind.png" className="parallax-image" />
      <h2 className="absolute text-white whitespace-nowrap text-[7.5vw] font-bold z-10">
        Moon Light
      </h2>
      <a
        href="#"
        className="py-[8px] px-[30px] rounded-4xl bg-white text-[#2b1055] text-2xl z-10 translate-y-[100px]"
      >
        Explore
      </a>
      <img src="/images/mountains_front.png" className="parallax-image z-20" />
    </section>
  );
};

export default Hero;
