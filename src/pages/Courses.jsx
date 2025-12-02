import { useState, useEffect, useRef } from "react";

const classesData = [
  {
    id: 1,
    romanNum: "I",
    name: "Web Foundation",
    duration: 6,
    level: "Beginner",
    description: "This beginner-friendly program introduces you to the core structure of the web: HTML, CSS, and JavaScript. You will learn how websites are built from scratch, how to style them, and how to make them interactive."
  }, {
    id: 2,
    romanNum: "II",
    name: "React Mastery",
    duration: 8,
    level: "Intermediate",
    description: "React is one of the most in-demand frontend libraries in the world, and this program takes you from the basics to advanced concepts. You will learn how components work, how to manage state using hooks, and how to connect your frontend to real APIs."
  }, {
    id: 3,
    romanNum: "III",
    name: "Styling Mastery",
    duration: 4,
    level: "Beginner → Intermediate",
    description: "In this focused 4-week program, you'll learn how to bring websites to life using modern CSS techniques. From animations to clean UI layouts, this course teaches you how to make your projects visually appealing and user-friendly."
  }, {
    id: 4,
    romanNum: "IV",
    name: "UI/UX Design",
    duration: 8,
    level: "Beginner",
    description: "This program teaches the fundamentals of user interface and user experience design using Figma. You will learn how to plan layouts, design wireframes, prototype interactions, and create digital products that feel smooth and intuitive."
  },
]

function Courses() {

  return (
    <>
      <section className="p-5 my-3 mx-auto max-w-4xl">
        <div className="flex flex-col items-center justify-center mb-7">
          <h1 className="text-3xl md:text-4xl font-bold mb-5">Our Courses</h1>
          <p className="text-xs md:text-sm text-center sm:w-3/4 lg:w-130 text-gray-400 ">Carefully structured training programs designed to help you build an impressive portfolio that employers notice.</p>
        </div>
        {classesData.map((classData, i) => <Classes key={classData.id} data={classData} i={i} />)}
      </section>
    </>
  )
}

function Classes({ data }) {

  const [isExpanded, setIsExpanded] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const textRef = useRef(null);
  const fullTextHeightRef = useRef("0px");

  useEffect(() => {
    const checkHeightAndSetButton = () => {
      const scrollHeight = textRef.current.scrollHeight;
      fullTextHeightRef.current = `${scrollHeight}px`;

      setShowButton(scrollHeight > textRef.current.clientHeight);
    };

    window.addEventListener("resize", checkHeightAndSetButton);
    const timeoutId = setTimeout(checkHeightAndSetButton, 0);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <>
      <article className="appear-article p-5 md:p-7 md:mx-3 my-5 bg-linear-to-br from-slate-900 from-50% to-black to-100% rounded-lg">
        <div className="flex justify-between">
          <div>
            <p className="text-xs text-gray-600 mb-3">Future Developer Program</p>
            <h2 className="text-[22px] md:text-[24px] font-bold mb-3">{data.name}</h2>
          </div>
          <p className="text-xs md:text-sm text-gray-500">{data.romanNum}</p>
        </div>
        <p className="text-xs md:text-sm text-gray-400 mb-3">{data.duration} weeks <span className="mx-3">•</span> {data.level}</p>
        <p className={isExpanded ? "text-expanded" : "text-clamped"}
          style={{
            maxHeight: isExpanded ? fullTextHeightRef.current : undefined,
          }}
          ref={textRef}>{data.description}</p>
        {showButton && (
          <button onClick={handleToggle} className="toggle-button">
            {isExpanded ? "See Less" : "See More"}
          </button>
        )}
        <a className="block text-sm md:text-md text-blue-300 transition hover:text-blue-400 mt-3" href="#">
          <p>View Course Details <span className="mx-3">→</span></p>
        </a>
      </article>
    </>
  )
}

export default Courses