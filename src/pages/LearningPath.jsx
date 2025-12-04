import { Link } from "react-router";

function LearningPath() {
  const learningSteps = [
    {
      number: "01",
      title: "UI/UX Design",
      description:
        "Understanding design helps you communicate better with clients...",
    },
    {
      number: "02",
      title: "Web Foundation",
      description:
        "Your journey begins here, even if you have never touched...",
    },
    {
      number: "03",
      title: "Styling Mastery",
      description: "Once you understand the basics, it's time to make...",
    },
    {
      number: "04",
      title: "React Mastery",
      description: "In this stage, you move into real frontend development...",
    },
    {
      number: "05",
      title: "Internship / Portfolio",
      description:
        "Once your skills are ready, you'll work on real projects...",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="mt-12 px-4 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-4xl font-bold text-gray-200">
            Learning Path
          </h2>
          <p className="text-sm text-gray-400 px-5">
            Follow our proven step-by-step journey from beginner to job-ready
            developer
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="px-4 py-12 pb-24">
        <div className="mx-auto max-w-4xl">
          <div className="relative">
            <div className="absolute top-0 bottom-0 left-6 hidden w-0.5 bg-gray-800 sm:block"></div>
            <div className="space-y-8">
              {learningSteps.map((step, i) => (
                <div key={i} className="relative flex items-start gap-6">
                  <div className="z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-lg font-bold text-white">
                    {step.number}
                  </div>
                  <div className="flex-1 rounded-lg border border-gray-700 bg-gradient-to-br from-gray-900 to-gray-800 p-8 transition-all duration-300 hover:border-gray-600 hover:shadow-xl hover:shadow-blue-500/10">
                    <h3 className="mb-4 text-2xl font-bold">{step.title}</h3>
                    <p className="text-sm leading-relaxed text-gray-400">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-16 text-center">
        <Link to="/courses">
          <button className="cursor-pointer rounded-lg bg-white px-8 py-3 text-black transition-all duration-300 hover:scale-105 hover:bg-gray-100">
            Start Your Journey
          </button>
        </Link>
      </section>
    </>
  );
}

export default LearningPath;
