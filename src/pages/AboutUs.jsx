import sayar from '../assets/sayar.jpg'
import sayarma from '../assets/sayarma.jpg'
import linkedIn from '../assets/linked_in.webp'
import gitHub from '../assets/github.webp'
import browser from '../assets/browser.webp'
import twitter from '../assets/twitter.webp'
import { useState, useEffect, useRef } from "react";

const instructorsData = [{
  id: 1,
  image: sayar,
  name: "ThiHa Aung",
  role: "Senior Frontend Instructor & Founder",
  location: "Dubai, UAE/Yangon, Myanmar",
  bio: "Frontend specialist with expertise in React, and UI/UX design. Previously worked with international teams building scalable web applications. Focuses on teaching clean code practices and modern design patterns that students can apply immediately in their projects.",
  contact: {
    linkedIn: "",
    gitHub: "",
    portfolio: ""
  }
}, {
  id: 2,
  image: sayarma,
  name: "Inzali",
  role: "Lead Instructor & Admin",
  location: "Yangon, Myanmar",
  bio: "Full-stack developer with  experience building web applications for companies in  Myanmar. Specializes in React and modern web development practices. Passionate about teaching practical coding skills that lead to real career opportunities.",
  contact: {
    linkedIn: "",
    gitHub: "",
    twitter: "",
    portfolio: ""
  }
}]

function AboutUs() {
  return (
    <>
      <section className="mt-28 max-w-4xl flex flex-col items-start justify-center gap-13 p-5 mx-auto my-3 ">

        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-5">Who We Are</h1>
          <p className="text-xs md:text-sm text-start max-w-3xl text-gray-400">NormalCoding is a modern online training platform created to provide high-quality, beginner-friendly coding education. We focus on practical skills that are directly useful for real-world development, ensuring students learn the exact tools and concepts used by professional developers.</p>
        </div>
        <div>
          <h2 className="text-[22px] md:text-[24px] font-bold mb-3">Our Mission</h2>
          <p className="text-xs md:text-sm text-start max-w-3xl text-gray-400 ">Our mission is to empower new developers by providing a clear learning path, real-life projects, and continuous guidance. We aim to remove the common fears and confusion that beginners face and replace them with confidence, structure, and practical experience.</p>
        </div>
        <div className='w-full'>
          <h2 className="text-[22px] md:text-[24px] font-bold mb-3">What We Teach</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <li className="appear-article p-5 bg-linear-to-br from-slate-900 from-50% to-black to-100% rounded-lg">
              <h3 className="text-[17px] font-semibold mb-2">Web Development</h3>
              <p className="text-xs text-gray-500">HTML, CSS, JavaScript fundamentals</p>
            </li>
            <li className="appear-article p-5 bg-linear-to-br from-slate-900 from-50% to-black to-100% rounded-lg">
              <h3 className="text-[17px] font-semibold mb-2">React Frontend</h3>
              <p className="text-xs text-gray-500">Modern component-based development</p>
            </li>
            <li className="appear-article p-5 bg-linear-to-br from-slate-900 from-50% to-black to-100% rounded-lg">
              <h3 className="text-[17px] font-semibold mb-2">Professsional UI/UX</h3>
              <p className="text-xs text-gray-500">Design thinking and Figma mastery</p>
            </li>
            <li className="appear-article p-5 bg-linear-to-br from-slate-900 from-50% to-black to-100% rounded-lg">
              <h3 className="text-[17px] font-semibold mb-2">CSS Animation</h3>
              <p className="text-xs text-gray-500">Visual design and smooth interactions</p>
            </li>
          </ul>
        </div>
        <div className='w-full'>
          <h2 className="text-[22px] md:text-[24px] font-bold mb-3">What Makes Us Different</h2>
          <p className="text-xs md:text-sm text-start max-w-3xl text-gray-400 mb-5">Unlike many traditional courses that overwhelm students with theory, we focus on understanding through practice. Each concept is explained with examples, tasks, and projects so students can apply what they learn immediately. Our teaching style is direct, supportive, and designed for absolute beginners.</p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <li className="flex items-center p-4 bg-slate-900 text-xs text-gray-400 gap-2 rounded-md"><div className="inline-block w-2 h-2 bg-[#22C55E] rounded-full"></div> Clear teaching</li>
            <li className="flex items-center p-4 bg-slate-900 text-xs text-gray-400 gap-2 rounded-md"><div className="inline-block w-2 h-2 bg-[#22C55E] rounded-full"></div>Real practice</li>
            <li className="flex items-center p-4 bg-slate-900 text-xs text-gray-400 gap-2 rounded-md"><div className="inline-block w-2 h-2 bg-[#22C55E] rounded-full"></div>Updated curriculum</li>
            <li className="flex items-center p-4 bg-slate-900 text-xs text-gray-400 gap-2 rounded-md"><div className="inline-block w-2 h-2 bg-[#22C55E] rounded-full"></div>Friendly support</li>
            <li className="flex items-center p-4 bg-slate-900 text-xs text-gray-400 gap-2 rounded-md"><div className="inline-block w-2 h-2 bg-[#22C55E] rounded-full"></div>Internship pathways</li>
          </ul>
        </div>
        <div className='w-full'>
          <h2 className="text-[22px] md:text-[24px] font-bold mb-3">Meet the Instructors</h2>
          <p className='text-xs md:text-sm text-start max-w-3xl text-gray-400'>Learn from experienced developers who have worked on real projects internationally and are passionate about helping you succeed.</p>
          {instructorsData.map(data => <Instructors key={data.id} data={data} />)}
        </div>
      </section>
    </>
  )
}

function Instructors({ data }) {
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
      <article className='appear-article flex flex-col md:flex-row gap-5 p-5 my-5 bg-linear-to-br from-slate-900 from-50% to-black to-100% rounded-lg'>
        <div className='w-[150px] h-[150px] overflow-hidden shrink-0'>
          <img className='w-full h-full rounded-lg object-auto' src={data.image} alt="profile picture" />
        </div>
        <div>
          <h3 className="text-[20px] font-semibold mb-2">{data.name}</h3>
          <p className='text-[14px] text-blue-300 mb-2'>{data.role}</p>
          <p className='text-[12px] text-gray-400 mb-2'>{data.location}</p>
          <p className={isExpanded ? "text-expanded" : "text-clamped"}
            style={{
              maxHeight: isExpanded ? fullTextHeightRef.current : undefined,
            }}
            ref={textRef}>{data.bio}</p>
          {showButton && (
            <button onClick={handleToggle} className="toggle-button">
              {isExpanded ? "See Less" : "See More"}
            </button>
          )}
          <ul className='flex gap-2 mt-3'>
            <li className='w-10'><a href={data.contact.linkedIn}><img src={linkedIn} alt="LinkedInIcon" /></a></li>
            <li className='w-10'><a href={data.contact.gitHub}><img src={gitHub} alt="LinkedInIcon" /></a></li>
            {data.id === 2 && <li className='w-10'><a href={data.contact.twitter}><img src={twitter} alt="LinkedInIcon" /></a></li>}
            <li className='w-10'><a href={data.contact.portfolio}><img src={browser} alt="LinkedInIcon" /></a></li>
          </ul>
        </div>
      </article>
    </>
  )
}


export default AboutUs