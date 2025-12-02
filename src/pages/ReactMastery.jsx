import backArrow from "../assets/backArrow.png";
import react from "../assets/react.png";
import book from "../assets/book.png";
import Details from "../components/Details.jsx";
import checkPurple from "../assets/checkPurple.png";
const skillSections = [
  {
    id: 1,
    title: "React Fundamentals",
    items: ["JSX", "Components", "Props & State"],
    image: checkPurple,
    bg: "bg-[#C084FC]"

  },
  {
    id: 2,
    title: "Hook",
    items: ["useState", "useEffect", "Custom hooks"],
    image: checkPurple,
    bg: "bg-[#C084FC]"
  },
  {
    id: 3,
    title: "State Management",
    items: ["Lifting state", "Context API", "Global state basics"],
    image: checkPurple,
    bg: "bg-[#C084FC]"
  },
  {
    id: 4,
    title: "API Integration",
    items: ["Fetching data", "Loading/error handling", "Rendering dynamic content"],
    image: checkPurple,
    bg: "bg-[#C084FC]"
  },
  {
    id: 5,
    title: "Routing & Navigation",
    items: ["React Router", "Dynamic routes", "Navigation flows"],
    image: checkPurple,
    bg: "bg-[#C084FC]"
  },
  {
    id: 6,
    title: "Final Project",
    items: ["Complete React App"],
    image: checkPurple,
    bg: "bg-[#C084FC]"
  }
];
function ReactMastery() {
  return (
    <>
      <section className="p-4">
        <a href="/courses" className="inline-block">
          <div className="flex cursor-pointer items-center">
            <img src={backArrow} alt="BackArrow" className="h-5 w-5" />
            <span className="text-md pl-2 text-gray-300">Back to Courses</span>
          </div>
        </a>
        <div className="flex items-center p-4">
          <img src={react} alt="react" className="w-15" />
          <div>
            <h2 className="bg-white px-3 lg:text-2xl text-xl font-bold text-gray-900 mb-2">
             Styling Mastery Program
            </h2>
            <button className="text-xs px-2 py-2 bg-[#C084FC] rounded-full">4 weeks</button>
            <button className="pl-2 text-xs">Beginner - Intermediate</button>
          </div>
        </div>
        <div className="flex items-center p-4">
          <img src={book} alt="book" className="w-7"/>
          <h3>Course Outline</h3>
          </div>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6 w-full">
            {skillSections.map(section => (
              <Details key={section.id} {...section} />
            ))}
          </div>
         </div>
         <div className="flex flex-col justify-around items-center bg-[#0F172A] mt-8 p-4 rounded-xl w-full shadow-lg">
          <h2 className="text-2xl text-gray-300 font-bold mt-4 ">Ready to Start Learning?</h2>
          <p className="text-20 text-center lg:text-sm text-gray-400 mt-4">Join our program and build real-world skills with hands-on project and expert guidance.</p>
          <button className="bg-[#C084FC] p-2 rounded-md mt-4"><a href="#">Enroll Now</a></button>
         </div>
      </section>
    </>
  );
}

export default ReactMastery