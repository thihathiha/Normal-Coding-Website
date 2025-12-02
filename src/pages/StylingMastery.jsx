import backArrow from "../assets/backArrow.png";
import styling from "../assets/styling.png";
import book from "../assets/book.png";
import Details from "../components/Details.jsx";
import checkPink from "../assets/checkPink.png";
const skillSections = [
  {
    id: 1,
    title: "Advanced CSS Concepts",
    items: ["Specificity", "Pseudo-elements", "CSS variables"],
    image: checkPink,
    bg: "bg-[#EC4899]"
  },
  {
    id: 2,
    title: "HTML Essentials",
    items: ["Tags & structure", "Forms, tables, images", "Semantic HTML"],
    image: checkPink,
    bg: "bg-[#EC4899]"
  },
  {
    id: 3,
    title: "CSS Fundamentals",
    items: ["Selectors & properties", "Box model", "Flexbox & Grid basics"],
    image: checkPink,
    bg: "bg-[#EC4899]"
  },
  {
    id: 4,
    title: "Responsive Design",
    items: ["Mobile-first approach", "Media queries", "Adaptive layouts"],
    image: checkPink,
    bg: "bg-[#EC4899]"
  },
  {
    id: 5,
    title: "JavaScript Basics",
    items: ["Variables & functions", "DOM manipulation", "Events & interactions"],
    image: checkPink,
    bg: "bg-[#EC4899]"
  },
  {
    id: 6,
    title: "Final Project",
    items: ["Multi-page website"],
    image: checkPink,
    bg: "bg-[#EC4899]"
  }
];
function StylingMastery() {
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
          <img src={styling} alt="styling" className="w-15" />
          <div>
            <h2 className="bg-white px-3 lg:text-2xl text-xl font-bold text-gray-900 mb-2">
             Styling Mastery Program
            </h2>
            <button className="text-xs px-2 py-2 bg-[#EC4899] rounded-full">4 weeks</button>
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
          <p className="text-20 text-center lg:text-sm text-gray-500 mt-4">Join our program and build real-world skills with hands-on project and expert guidance.</p>
          <button className="bg-[#EC4899] p-2 rounded-md mt-4"><a href="#">Enroll Now</a></button>
         </div>
      </section>
    </>
  );
}

export default StylingMastery