import { useState, useEffect, useRef } from "react";
import { Link } from "react-router";

const classesData = [
  {
    id: 1,
    romanNum: "I",
    name: "UI/UX Design",
    duration: 8,
    level: "Beginner",
    description:
      "This program teaches the fundamentals of user interface and user experience design using Figma. You will learn how to plan layouts, design wireframes, prototype interactions, and create digital products that feel smooth and intuitive.",
    path: "/courses/uiux",
  },
  {
    id: 2,
    romanNum: "II",
    name: "Web Foundation",
    duration: 6,
    level: "Beginner",
    description:
      "This beginner-friendly program introduces you to the core structure of the web: HTML, CSS, and JavaScript. You will learn how websites are built from scratch, how to style them, and how to make them interactive.",
    path: "/courses/web-foundation",
  },
  {
    id: 3,
    romanNum: "III",
    name: "Styling Mastery",
    duration: 4,
    level: "Beginner → Intermediate",
    description:
      "In this focused 4-week program, you'll learn how to bring websites to life using modern CSS techniques. From animations to clean UI layouts, this course teaches you how to make your projects visually appealing and user-friendly.",
    path: "/courses/styling-mastery",
  },
  {
    id: 4,
    romanNum: "IV",
    name: "React Mastery",
    duration: 8,
    level: "Intermediate",
    description:
      "React is one of the most in-demand frontend libraries in the world, and this program takes you from the basics to advanced concepts. You will learn how components work, how to manage state using hooks, and how to connect your frontend to real APIs.",
    path: "/courses/react-mastery",
  },
];

function Courses() {
  return (
    <>
      <section className="mx-auto mt-24 max-w-4xl p-5">
        <div className="mb-7 flex flex-col items-center justify-center">
          <h1 className="mb-5 text-3xl font-bold md:text-4xl">Our Courses</h1>
          <p className="mb-6 text-center text-xs text-gray-400 sm:w-3/4 md:text-sm lg:w-130">
            Carefully structured training programs designed to help you build an
            impressive portfolio that employers notice.
          </p>
        </div>
        {classesData.map((classData, i) => (
          <Classes key={classData.id} data={classData} i={i} />
        ))}
      </section>
    </>
  );
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
      <article className="appear-article my-5 rounded-lg bg-linear-to-br from-slate-900 from-50% to-black to-100% p-5 md:mx-3 md:p-7">
        <div className="flex justify-between">
          <div>
            <p className="mb-3 text-xs text-gray-600">
              Future Developer Program
            </p>
            <h2 className="mb-3 text-[22px] font-bold md:text-[24px]">
              {data.name}
            </h2>
          </div>
          <p className="text-xs text-gray-500 md:text-sm">{data.romanNum}</p>
        </div>
        <p className="mb-3 text-xs text-gray-400 md:text-sm">
          {data.duration} weeks <span className="mx-3">•</span> {data.level}
        </p>
        <p
          className={isExpanded ? "text-expanded" : "text-clamped"}
          style={{
            maxHeight: isExpanded ? fullTextHeightRef.current : undefined,
          }}
          ref={textRef}
        >
          {data.description}
        </p>
        {showButton && (
          <button onClick={handleToggle} className="toggle-button">
            {isExpanded ? "See Less" : "See More"}
          </button>
        )}
        <Link
          to={data.path}
          className="md:text-md mt-3 block text-sm text-blue-300 transition hover:text-blue-400"
        >
          <p>
            View Course Details <span className="mx-3">→</span>
          </p>
        </Link>
      </article>
    </>
  );
}

export default Courses;
