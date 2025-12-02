import backArrow from "../assets/backArrow.png";
import paint from "../assets/paint.png";
import book from "../assets/book.png";
import Details from "../components/Details.jsx";
import courseCheck from "../assets/courseCheck.png";
const skillSections = [
  {
    id: 1,
    title: "UX Fundamentals",
    items: ["User research", "User flows", "Problem definition"],
    image: courseCheck,
    bg: "bg-[#F97316]"
  },
  {
    id: 2,
    title: "UI Principles",
    items: ["Layout systems", "Spacing & alignment", "Reusable patterns"],
    image: courseCheck,
    bg: "bg-[#F97316]"
  },
  {
    id: 3,
    title: "Figma Essentials",
    items: ["Frames", "Components", "Auto-layout", "Styles"],
    image: courseCheck,
    bg: "bg-[#F97316]"
  },
  {
    id: 4,
    title: "Wireframing",
    items: ["Low-fidelity sketches", "Structure planning", "Layout testing"],
    image: courseCheck,
    bg: "bg-[#F97316]"
  },
  {
    id: 5,
    title: "Prototyping",
    items: ["Interactive flows", "Animation basics", "Usability testing"],
    image: courseCheck,
    bg: "bg-[#F97316]"
  },
  {
    id: 6,
    title: "Final Project",
    items: ["Complete App Prototype"],
    image: courseCheck,
    bg: "bg-[#F97316]"
  }
];
function Uiux() {
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
          <img src={paint} alt="paint" className="w-15" />
          <div>
            <h2 className="bg-white px-3 lg:text-2xl text-xl font-bold text-gray-900 mb-2">
              UI/UX Design Program
            </h2>
            <button className="text-xs px-2 py-2 bg-[#F97316] rounded-full">8 weeks</button>
            <button className="pl-2 text-xs">Beginner</button>
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
          <p className="text-20 text-center lg:text-sm text-gray-500 mt-4">Join our program and build real-world skills with hands-on project and expert guidance.</p>
          <button className="bg-[#F97316] p-2 rounded-md mt-4"><a href="#">Enroll Now</a></button>
         </div>
      </section>
    </>
  );
}

export default Uiux;
