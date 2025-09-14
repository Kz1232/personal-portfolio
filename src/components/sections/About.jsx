import { RevealOnScroll }  from "../RevealOnScroll";


const frontendSkills = ["Html", "Css", "Js", "React", "Next-js"];
const backendSkills = ["Python", "AWS", "MongoDB", "Django"];
export const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex  justify-center items-center "
    >
      <RevealOnScroll>
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="font-bold mb-8 text-center bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent text-3xl">
          About me
        </h1>
        <div className=" p-8 rounded-xl border border-white/10 transition-all hover:-translate-y-1 ">
          <p className="text-gray-400 mb-6 ">
            Passionate developer building a scalable web apps and make
            innovations on daily basis with consistent mindset
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-xl p-6 transition-all hover:-translate-y-1">
              <h3 className="text-gray-400">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className=" px-3 py-1 rounded-full text-blue-500 bg-blue-500/10 transition hover:bg-blue-500/20 hover:shadow-[0_2px_10px_rgba(59,130,240,0.2)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-xl p-6 transition-all hover:-translate-y-1 ">
              <h3 className="text-gray-400">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className=" px-3 py-1 rounded-full bg-blue-500/10 transition hover:bg-blue-500/20 hover:shadow-[0_2px_10px_rgba(59,130,240,0.2)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          <div className="rounded-xl border-white/20 border transition hover:-translate-y-1 p-8">
            <h3 className="font-bold text-xl mb-4 text-white">Education</h3>
            <ul className="list-disc list-inside space-y-4">
              <li ><strong>Bachelor Computer Engineering</strong> - Khowpa Engineering College (2078 - current)</li>
              <li ><strong>+2 Science</strong> - Ambition Academy (2076 - 2077)</li>
            </ul>
          </div>
          <div className="rounded-xl border-white/20 border transition hover:-translate-y-1 p-8">
            <h3 className="font-bold text-xl mb-4 text-white">Work Experience</h3>
            <div className="space-y-4">
              <div>
              <h4 className="font-semibold">Software Engineer at Leapfrog (2023-current)</h4>
              <p>Developed a scalable software and delivered it to the client in best</p>
                </div>
              <div>
              <h4 className="font-semibold">Software intern  at Leapfrog (2022)</h4>
              <p>Assisted in building front-end componenets to the senior developer</p>
                </div>
            </div>
          </div>
        </div>
      </div>
      </RevealOnScroll>
    </section>
  );
};
