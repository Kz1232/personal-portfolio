export const MobileMenu = ({ menuOpen, setmenuOpen }) => {
  return (
    <div
      className={`z-40 w-full fixed top-0 left-0 bg-[rgba(20,20,20,0.8)] flex flex-col items-center justify-center 
            transition-all duration-300 ease-in-out
            ${
              menuOpen
                ? "h-screen opacity-100 pointer-events-auto"
                : " h-0 opacity-0 pointer-events-none"
            } `}
    >
      <button
        onClick={() => setmenuOpen(false)}
        className="absolute top-6 right-5 text-white text-3xl  cursor-pointer"
        aria-label="Close Menu"
      >
        &times;
        </button>
        <a
          href="#home"
          className={`font-bold text-2xl text-white transform transition-transform duration-1000
            ${
              menuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
            }`}
          onClick={() => setmenuOpen(false)}
        >
          Home
        </a>
        <a
          href="#about"
          className={`font-bold text-2xl text-white transform transition-transform duration-1000
            ${
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
            }`}
          onClick={() => setmenuOpen(false)}
        >
          about
        </a>
        <a
          href="#projects"
          className={`font-bold text-2xl text-white transform transition-transform duration-1000
            ${
              menuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
            }`}
          onClick={() => setmenuOpen(false)}
        >
          Projects
        </a>
        <a
          href="#contact"
          className={`font-bold text-2xl text-white transform transition-transform duration-1000
            ${
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
            }`}
          onClick={() => setmenuOpen(false)}
        >
          Contact
        </a>
    </div>
  );
};
