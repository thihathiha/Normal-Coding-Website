import check from "../assets/check.png";
import job from "../assets/job.png";
import mentor from "../assets/mentor.png";
import rocket from "../assets/rocket.png";
import tick from "../assets/tick.png";
import HomeCard from "../components/HomeCard";
import { Link } from "react-router";

const homeCards = [
  {
    id: 1,
    title: "Beginner Friendly",
    text: "Start From zero",
    bg: "#3B82F6",
    image: tick,
  },
  {
    id: 2,
    title: "Real Project",
    text: "Build Portfolio work",
    bg: "#22C55E",
    image: rocket,
  },
  {
    id: 3,
    title: "Mentor Support",
    text: "Ask anytime",
    bg: "#F97316",
    image: mentor,
  },
  {
    id: 4,
    title: "Job-Ready Skills",
    text: "Follow a power path",
    bg: "#EC4899",
    image: job,
  },
];

function Home() {
  return (
    <>
      <section className="flex min-h-screen w-full flex-col items-center">
        <p className="p-4 text-xs text-gray-400">Web Development</p>
        <h1 className="text-5xl font-bold text-gray-200 lg:text-8xl">NORMAL</h1>
        <h1 className="border-t-4 border-white p-2 text-5xl font-bold lg:text-8xl">
          CODING
        </h1>
        <p className="p-4 text-xs text-gray-400 lg:text-sm">Coding School</p>
        <h2 className="text-10 w-xs p-6 text-center text-gray-200 lg:w-xl lg:text-xl">
          Become a modern web developer with real-world skills
        </h2>
        <div className="flex flex-col lg:flex-row">
          <div className="flex p-2">
            <img src={check} alt="check" className="w-18 px-6" />
            <p>Beginner-Friendly</p>
          </div>
          <div className="flex p-2">
            <img src={check} alt="check" className="w-18 px-6" />
            <p>Project-Based Learning</p>
          </div>
          <div className="flex p-2">
            <img src={check} alt="check" className="w-18 px-6" />
            <p>Internship Opportunities</p>
          </div>
        </div>
        <div className="mt-6 mb-8">
          <Link to="/learning-path">
            <button className="cursor-pointer rounded-md bg-white px-4 py-3 text-sm font-bold text-black">
              Start Learning
            </button>
          </Link>
          <Link to="/courses">
            <button className="cursor-pointer px-4 py-3 text-sm font-bold text-white">
              View Courses
            </button>
          </Link>
        </div>
        <h2 className="mt-14 text-3xl font-bold text-gray-200 lg:text-4xl">
          Why Learn With Us
        </h2>
        <p className="mt-10 w-xs text-justify text-sm text-gray-400 md:w-xl lg:w-xl lg:text-center">
          At Normal Coding, we believe that anyone can learn to code when
          concepts are explained clearly and supported with real examples. Our
          programs are designed to eliminate confusion and teach practical
          skills instead of unnecessary theory.
        </p>
        <div className="grid grid-cols-1 gap-x-60 gap-y-6 p-15 lg:grid-cols-2">
          {homeCards.map((home) => (
            <HomeCard {...home} />
          ))}
        </div>
        <h2 className="mt-12 text-3xl font-bold text-gray-200">
          Student Success
        </h2>
        <p className="mt-4 mb-12 w-full text-center text-sm">
          <span className="px-2 text-gray-500">Over</span>
          <span>100+ Students</span>
          <span className="px-2 text-gray-500">
            learned coding with Normal Coding
          </span>
        </p>
      </section>
    </>
  );
}

export default Home;
