import { RevealOnScroll }  from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex justify-center items-center py-20"
    >
      <RevealOnScroll>
      <div className="max-w-5xl mx-auto py-4">
        <h4 className="mb-4 text-center bg-gradient-to-r from-blue-500 to-cyan-400 font-bold text-3xl bg-clip-text text-transparent">
          Featured Projects
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div
            className="p-8 rounded-xl border border-white/20 hover:-translate-y-1 hover:border-blue-500/30 
                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] space-y-4 transition
                    "
          >
            <h4 className="font-semibold">Room Rental Management System</h4>
            <p>
              The system works as the intermediatory for the rentee and landlord
            </p>
            <div className="space-x-2 flex flex-wrap">
              {["React", "html", "Django", "Postgres", "Django-Rest"].map(
                (tech, key) => (
                  <span
                    key={key}
                    className="px-3 py-1 rounded-xl text-blue-500 bg-blue-500/10 transition-all hover:-translate-y-1 hover:bg-blue-500/30"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
            <div className="flex justify-between items-center">
              <a
                href="#"
                className="text-blue-400 hover:text-blue-300  transition-colors my-4"
              >
                View Projects
              </a>
              <a
                href="https://github.com/dibyam12/room-rental-system-react"
               className="text-blue-400 hover:text-blue-300  transition-colors my-4 "
              >
                Github Repo
              </a>
            </div>
          </div>
          <div
            className="p-8 rounded-xl border border-white/20 hover:-translate-y-1 hover:border-blue-500/30 
                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] space-y-4 transition
                    "
          >
            <h4 className="font-semibold">Landing Page</h4>
            <p>The trumphet selling store's landing page</p>
            <div className="space-x-2 flex flex-wrap">
              {["React", "html", "Django", "Postgres", "Django-Rest"].map(
                (tech, key) => (
                  <span
                    key={key}
                    className="px-3 py-1 rounded-xl text-blue-500 bg-blue-500/10 transition-all hover:-translate-y-1 hover:bg-blue-500/30
                    
                    "
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
            <div className="flex justify-between items-center">
              <a
                href="#"
                className="text-blue-400 hover:text-blue-300  transition-colors my-4"
              >
                View Projects
              </a>
              <a
                href="#"
               className="text-blue-400 hover:text-blue-300  transition-colors my-4 "
              >
                Github Repo
              </a>
            </div>
          </div>
        </div>
      </div>
      </RevealOnScroll>
    </section>
  );
};
