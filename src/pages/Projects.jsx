import { Link } from "react-router";

function Projects() {
  const projects = [
    {
      batch: 1,
      title: "An Online Dating Website",
      team: "Team A",
      description:
        "A romantic-themed dating concept website built with HTML and CSS. Features include love tips, profile matching, user profiles and elegant animations.",
      demo: "https://cupidintheclouds-theeros.netlify.app/",
      code: "https://github.com/Rekk64/Dating_Website",
    },
    {
      batch: 1,
      title: "Cupid Dating Website",
      team: "Team B",
      description:
        "A lovely dating website built with HTML and CSS to offer a real chance at love, featuring match partners, and extra services with charming designs. ",
      demo: "https://cupidbyteamb.netlify.app/",
      code: "https://github.com/Merryposer/Cupid",
    },
    {
      batch: 1,
      title: "Venus Drift Dating App",
      team: "Team C",
      description:
        "A youthful dating concept website built with HTML and CSS. Features include music highlights, user profiles, chat options, trending content, and a Venus-inspired design with Dark Mode.",
      demo: "https://venusdrift.netlify.app/",
      code: "https://venusdrift.netlify.app/",
    },
    {
      batch: 2,
      title: "Thadingyut Travel Website",
      team: "Team A",
      description:
        "A festive Thadingyut travel website built with HTML and CSS. Showcases curated journeys, local culture, and immersive visuals.",
      demo: "https://luminousthadingyut.netlify.app/",
      code: "https://github.com/Unknown-as22/Luminous-Thadingyut-Team-A-",
    },
    {
      batch: 2,
      title: "Festival of Light",
      team: "Team B",
      description:
        "A Thadingyut Festival website built with HTML and CSS. It highlights the festival’s history, travel destinations, a seasonal gift shop, and a contact page.",
      demo: "https://festivaloflight.netlify.app/",
      code: "https://github.com/Scarletty3/The-festival-of-light",
    },
    {
      batch: 2,
      title: "Twinkle Pop-up Store",
      team: "Team C",
      description:
        "A festive Thadingyut pop-up website built with HTML and CSS. It features decorations, traditional gifts, sparklers, sky lanterns, and a playful Wish Page with easy, secure shopping.",
      demo: "https://twinkle-pop-up.netlify.app/",
      code: "https://github.com/Myuu-Myuu/Twinkle-pop-up-store",
    },
  ];

  const ProjectItem = ({ project, index }) => {
    const isOdd = index % 2 !== 0;

    return (
      <div className="relative md:grid md:grid-cols-2 md:gap-x-8 items-center">
        {/* Badge */}
        <div className="absolute top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg z-10 left-6 -translate-x-1/2 md:left-1/2 shadow-lg border-2 border-black">
          {String(index + 1).padStart(2, "0")}
        </div>

        {/* Card */}
        <div
          className={`ml-16 md:ml-0 animate-fadeInUp ${
            isOdd ? "md:col-start-2" : "md:text-right"
          }`}
        >
          {/* Card Container */}
          <div className="group relative min-h-72 rounded-xl overflow-hidden border border-gray-800 shadow-lg bg-linear-to-br from-slate-900 from-50% to-black to-100%">
            
            {/* Background*/}
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-700 to-gray-900 text-white text-4xl font-bold opacity-80">
              {project.team}
            </div>
            {/* Content Wrapper*/}
            <div className="bg-black/70 backdrop-blur-[2px] flex flex-col justify-center p-6">
              
              {/* Batch Badge */}
              <div className="flex w-full justify-end">
                <span className="text-xs font-bold bg-purple-600 text-white px-3 py-1 rounded-full shadow-lg mb-4">
                  Batch {project.batch}
                </span>
              </div>
                
                {/* Text Content */}
                <div className="flex flex-col items-center text-center">
                    <h3 className="text-2xl font-bold text-white mb-2">
                        {project.title}
                    </h3>

                    <p className="text-sm text-gray-400 mb-2">
                        <strong>Team:</strong> {project.team}
                    </p>

                    <p className="text-gray-300 text-sm mb-6 max-w-md">
                        {project.description || "Description coming soon..."}
                    </p>
                </div>

              {/* Button Container: Centered */}
              <div className="flex flex-wrap items-center px-10 gap-2 gap-y-2 w-full py-4 justify-center">
                {project.code && (
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-white border border-gray-600 hover:bg-white/10 transition-colors w-full sm:max-w-44 justify-center focus:outline-none focus:ring-0"
                  >
                    {/* Inline SVG for Code */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 18l6-6-6-6M8 6l-6 6 6 6"
                      />
                    </svg>
                    View Code
                  </a>
                )}

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold bg-gradient-to-r from-blue-500 to-purple-600 hover:shadow-lg hover:shadow-purple-500/30 transition-all w-full sm:max-w-44 justify-center focus:outline-none focus:ring-0"
                  >
                    {/* Inline SVG for Link */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 3h7v7m0-7L10 14m-4 7h14a2 2 0 002-2V7"
                      />
                    </svg>
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
return (
    <>
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-200 mb-6 animate-fadeInDown">
            Our Projects
          </h1>
          <p
            className="text-gray-400 px-5 text-sm animate-fadeIn lg:px-20"
            style={{ animationDelay: "0.2s" }}
          >
            Explore real-world projects built by our students.Each project
            showcases creativity and practical skills developed during our
            training programs.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="relative max-w-5xl mx-auto">
          { <div className="absolute top-0 bottom-0 w-0.5 bg-gray-800 left-6 md:left-1/2 md:-translate-x-1/2 animate-growLine"></div> }

          <div className="space-y-20 md:space-y-16">
            {projects.map((project, index) => (
              <ProjectItem key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl text-gray-300 font-bold mb-4">
            Ready to Build Your Own Project?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join our programs and create impressive projects that highlight your
            growth and skills.
          </p>
          <Link to="/courses">
          <button className="bg-white text-black px-8 py-3 rounded-lg hover:bg-gray-200 transition-all animate-fadeIn">Get Started</button>
          </Link>
        </div>
      </section>
    </>
  ); 
}
export default Projects;