import check from '../assets/check.png';
import job from '../assets/job.png';
import mentor from '../assets/mentor.png';
import rocket from '../assets/rocket.png';
import tick from '../assets/tick.png';
import HomeCard from '../components/HomeCard';
const homeCards=[
  {id: 1, title: "Beginner Friendly",text: "Start From zero",bg:"#3B82F6",image: tick, },
  {id: 2, title: "Real Project",text: "Build Portfolio work",bg:"#22C55E", image: rocket,},
  {id: 3, title: "Mentor Support",text: "Ask anytime", bg:"#F97316",image: mentor,},
  {id: 4, title: "Job-Ready Skills",text: "Follow a power path",bg:"#EC4899", image: job,}
];

function Home() {
  return (
    <>
      <section className='w-full h-screen flex flex-col items-center'>
        <p className='text-xs text-gray-400 p-4'>Web Development</p>
        <h1 className='text-5xl text-gray-200 lg:text-8xl font-bold'>NORMAL</h1>
        <h1 className='text-5xl lg:text-8xl font-bold border-t-4 border-white p-2'>CODING</h1>
        <p className='text-xs lg:text-sm text-gray-400 p-4'>Coding School</p>
        <h2 className='w-xs text-10 text-center lg:text-xl lg:w-xl text-gray-200 p-6'>Become a modern web developer with real-world skills</h2>
        <div className='flex flex-col lg:flex-row '>
            <div className='flex p-2'><img src={check} alt="check" className='px-6 w-18'/><p>Beginner-Friendly</p></div>
            <div className='flex p-2'><img src={check} alt="check" className='px-6 w-18'/><p>Project-Based Learning</p></div>
            <div className='flex p-2'><img src={check} alt="check" className='px-6 w-18'/><p>Intern-ship Opportinities</p></div>
       </div>
        <div>
          <button className='p-2 bg-white rounded-md text-black font-bold text-sm'>Start Learning</button>
          <button className='p-6 text-white font-bold text-sm'>View Courses</button>
        </div>
        <h2 className='text-2xl lg:text-3xl text-gray-200 font-bold mt-14'>Why Learn With Us</h2>
        <p className='w-xs text-sm text-justify md:w-xl lg:w-xl lg:text-center text-gray-400 mt-10'>At Normal Coding, we believe that anyone can learn to code when concepts are explained 
          clearly and supported with real examples. Our programs are designed to eliminate confusion 
          and teach practical skills instead of unnecessary theory.
        </p>
        <div className='grid grid-cols-1  lg:grid-cols-2 gap-x-60 gap-y-6 p-15'>
        {homeCards.map((home)=> <HomeCard {...home}/>)}
        </div>
        <h2 className='text-2xl text-gray-200 font-bold mt-12'>Student Success</h2>
      <p className='w-full text-sm mt-4 mb-12 text-center'>
        <span className='text-gray-500 px-2'>Over</span>
        <span>100+ Students</span>
        <span className='text-gray-500 px-2'>learned coding with Normal Coding</span>
      </p>
      </section>
    </>
  )
}

export default Home