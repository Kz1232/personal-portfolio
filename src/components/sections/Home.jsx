import  { RevealOnScroll }  from "../RevealOnScroll";


export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex  justify-center items-center relative"
    >
      <RevealOnScroll>
      <div className="text-center px-4 z-10">
        <h1 className="text-transparent text-5xl md:text-7xl mb-7 bg-gradient-to-r from-blue-800 to-white bg-clip-text animate-gradient">
          Kshitiz Rai
        </h1>

        <p className="text-lg text-gray-400 mb-8 mx-auto  max-w-lg">
          {" "}
          I am a front-end developer creating astonishing and user friendly
          sites. I am an amateur in front-end desin. I like what i see and try
          to but can't properly translate the design to code as i am only
          starting right now
        </p>

        <div className="flex justify-center space-x-4">
          <a
            href="#"
            id="projects_btn"
            className="bg-blue-500 py-3 px-6 rounded overflow-hidden text-white shadow-lg relative transition hover:-translate-0.5 hover:shadow-[0_0_15px_10px_rgba(59,130,246,0.4)]"
          >
            View projects
          </a>
         
          <a
            href="#"
            id="Contact_btn"
            className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded  transition-all duration-300 hover:-translate-0.5 hover:shadow-[0_0_15px_10px_rgba(59,130,246,0.2) hover:bg-blue-500 hover:text-white ]"
          >
            Contact me
          </a>


        </div>
      </div>
      </RevealOnScroll>
    </section>
  );
};
