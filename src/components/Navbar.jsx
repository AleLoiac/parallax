const Navbar = () => {
  const navElements = ["Home", "About", "Work", "Contact"];

  return (
    <nav className="absolute top-0 left-0 z-50 w-full py-[30px] px-[30px] sm:px-[100px] flex justify-between items-center">
      <a
        href="#"
        className="text-white font-bold text-3xl uppercase tracking-[2px]"
      >
        Logo
      </a>
      <ul className="flex invisible sm:visible justify-center items-center">
        {navElements.map((section) => {
          return (
            <li
              key={section}
              className="text-white py-[6px] px-[15px] hover:bg-white hover:text-[#2b1055] rounded-3xl"
            >
              <a href={`#${section.toLowerCase()}`}>{section}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
