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
      title: "A Cute Dating Website",
      team: "Team B",
      description:
        "A dating website built with HTML and CSS to offer a real chance at love.....",
      demo: "https://cupidbyteamb.netlify.app/",
      code: "https://github.com/Merryposer/Cupid",
    },
    {
      batch: 1,
      title: "Venus Drift Dating App",
      team: "Team C",
      description:
        "A youthful dating concept website built with HTML and CSS. Features include zodiac insights, music highlights, user profiles, chat options, trending content, and a Venus-inspired design with Dark Mode.",
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
      <div className="relative items-center md:grid md:grid-cols-2 md:gap-x-8">
        {/* Badge */}
        <div className="absolute top-1/2 left-6 z-10 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-black bg-gradient-to-br from-blue-500 to-purple-600 text-lg font-bold text-white shadow-lg md:left-1/2">
          {String(index + 1).padStart(2, "0")}
        </div>

        {/* Card */}
        <div
          className={`animate-fadeInUp ml-16 md:ml-0 ${
            isOdd ? "md:col-start-2" : "md:text-right"
          }`}
        >
          <div className="group relative min-h-72 overflow-hidden rounded-xl border border-gray-800 bg-gray-900 shadow-lg">
            {/* Background */}
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 text-4xl font-bold text-white opacity-80">
              {project.team}
            </div>

            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 p-6 text-center backdrop-blur-[2px]">
              <span className="absolute top-4 right-4 rounded-full bg-purple-600 px-3 py-1 text-xs font-bold text-white shadow-lg">
                Batch {project.batch}
              </span>

              <h3 className="mb-2 text-2xl font-bold text-white">
                {project.title}
              </h3>

              <p className="mb-2 text-sm text-gray-400">
                <strong>Team:</strong> {project.team}
              </p>

              <p className="mb-6 max-w-md text-sm text-gray-300">
                {project.description || "Description coming soon..."}
              </p>

              <div className="flex items-center gap-4">
                {project.code && (
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-lg border border-gray-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10"
                  >
                    {/* Inline SVG for Code */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
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
                    className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 text-sm font-bold transition-all hover:shadow-lg hover:shadow-purple-500/30"
                  >
                    {/* Inline SVG for Link */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
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
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="animate-fadeInDown mb-6 text-4xl font-bold text-gray-200 md:text-5xl">
            Our Projects
          </h1>
          <p
            className="animate-fadeIn text-sm text-gray-400"
            style={{ animationDelay: "0.2s" }}
          >
            Explore real-world projects built by our students. Each project
            showcases creativity and practical skills developed during our
            training programs.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-5xl">
          {
            <div className="animate-growLine absolute top-0 bottom-0 left-6 w-0.5 bg-gray-800 md:left-1/2 md:-translate-x-1/2"></div>
          }

          <div className="space-y-20 md:space-y-16">
            {projects.map((project, index) => (
              <ProjectItem key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-2xl font-bold text-gray-300">
            Ready to Build Your Own Project?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-gray-300">
            Join our programs and create impressive projects that highlight your
            growth and skills.
          </p>
          <Link to="/courses">
            <button className="cursor-pointer animate-fadeIn rounded-lg bg-white px-8 py-4 font-semibold text-black transition-all hover:bg-gray-200">
              Get Started
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}

export default Projects;
