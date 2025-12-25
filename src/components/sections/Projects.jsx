import { RevealOnScroll } from "../RevealOnScroll";

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
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Build a full-stack web app to streamline room renting and
                  lending with a seamless payment gateway, Esewa.
                </li>
                <li>Build responsive and reusable components with React.js.</li>
                <li>
                  Facilitated smooth integration of backend API from Django REST
                  Framework.
                </li>
                <li>Implemented real-time map interface.</li>
                <li>Implemented live chat system using WebRTC.</li>
              </ul>
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
                  className="text-blue-400 hover:text-blue-300 hidden transition-colors my-4"
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
                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] space-y-4 transition
                    "
            >
              <h4 className="font-semibold">AWS CLOUD CLUB NEPAL SITE 2025 </h4>

              <ul className="list-disc pl-5 space-y-2">
                <li>
                  {" "}
                  Built a modern, responsive site for AWS Cloud Club Nepal, a
                  student-led community focused on AWS cloud education and
                  events.
                </li>
                <li>
                  {" "}
                  Integrated Meetup and RSVP links for seamless event
                  registration.
                </li>
                <li>
                  {" "}
                  Intgrated sponser us Section with form links and brochure{" "}
                </li>
                <li>
                  {" "}
                  Worked with team members to continuously update content for
                  cloud workshops and the AWS Student Community Day Nepal 2025.
                </li>
              </ul>
              <div className="space-x-2 flex flex-wrap">
                {["Next.js", "Tailwindcss", "Shadcn"].map((tech, key) => (
                  <span
                    key={key}
                    className="px-3 py-1 rounded-xl text-blue-500 bg-blue-500/10 transition-all hover:-translate-y-1 hover:bg-blue-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="//www.awscloudclubnepal.com/"
                  className="text-blue-400 hover:text-blue-300  transition-colors my-4"
                >
                  View Project
                </a>
                <a
                  href="https://github.com/dibyam12/room-rental-system-react"
                  className="text-blue-400 hover:text-blue-300 hidden  transition-colors my-4 "
                >
                  Github Repo
                </a>
              </div>
            </div>

            <div
              className="p-8 rounded-xl border border-white/20 hover:-translate-y-1 hover:border-blue-500/30 
                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] space-y-4 transition
                    "
            >
              <h4 className="font-semibold">Nepal Youth Club Donation Site</h4>

              <p>
                Contributed as Front-end Developer .This is official page
                developed for the Nepal Youth Club for the smooth and seamless
                donation of amount to the victims of GenZ movement that recently
                happened.
              </p>
              <div className="space-x-2 flex flex-wrap">
                {["React.js", "Tailwindcss"].map((tech, key) => (
                  <span
                    key={key}
                    className="px-3 py-1 rounded-xl text-blue-500 bg-blue-500/10 transition-all hover:-translate-y-1 hover:bg-blue-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex  justify-between items-center ">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 hidden transition-colors my-4"
                >
                  View Project
                </a>
                <a
                  href="https://github.com/PRATIKGRX/NepalYouthClubDonationSite"
                  className="text-blue-400 hover:text-blue-300   transition-colors my-4 "
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
              <h4 className="font-semibold">Product Landing Page</h4>
              <p>The trumphet selling store's  productlanding page</p>
              <div className="space-x-2 flex flex-wrap">
                {["Html5", "CSS3", "Javascript"].map(
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
                  href="https://www.freecodecamp.org/certification/fcc5ab03e85-f9ad-4e76-b6c4-2f2c73fb8396/responsive-web-design"
                  className="text-blue-400 hover:text-blue-300  transition-colors my-4"
                >
                  View Projects
                </a>
                <a
                  href="https://www.freecodecamp.org/certification/fcc5ab03e85-f9ad-4e76-b6c4-2f2c73fb8396/responsive-web-design"
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
