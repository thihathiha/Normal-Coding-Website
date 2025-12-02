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
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-200">
            Learning Path
          </h2>
          <p className="text-gray-400 text-sm">
            Follow our proven step-by-step journey from beginner to job-ready
            developer
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 px-4 pb-24">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-800 hidden sm:block"></div>
            <div className="space-y-8">
              {learningSteps.map((step, i) => (
                <div key={i} className="relative flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg z-10">
                    {step.number}
                  </div>
                  <div className="flex-1 bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-8 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
                    <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
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
      <section className="py-16 px-4 text-center">
        <button className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105">
          Start Your Journey
        </button>
      </section>

      <div>Learning Path Page</div>
    </>
  );
}

export default LearningPath