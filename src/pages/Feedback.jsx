import { feedbackData } from "../data/FeedbackData";
import { Link } from "react-router";

function Feedback() {
  return (
    <>
      <section className="w-[90%] flex flex-col items-center mx-auto lg:w-[75%]">
        <h1 className="font-semibold text-gray-200 text-4xl mb-4">Students Feedback</h1>
        <p className="text-gray-400 text-sm">Hear from students who transformed their careers with Normal Coding</p>
        <div className="grid grid-cols-1 w-full gap-6 my-16 lg:grid-cols-2">
          {feedbackData.map(feedback => 
            <div key={feedback} className="bg-linear-to-bl from-gray-800 to-black rounded-md shadow-2xl p-12">
              <span className="text-3xl text-yellow-600">{"★".repeat(feedback.rating)}{"☆".repeat(5 - feedback.rating)}</span>
              <p className="text-gray-200 text-sm lg:text-md max-w-[360px] my-6 leading-6">{feedback.comment}</p>
              <strong className="block text-sm text-gray-300">{feedback.name}</strong>
              <span className="text-sm text-gray-400">{feedback.batch}</span>
            </div>)}
        </div>
        <div className="w-full bg-linear-to-bl from-gray-800 to-black rounded-md shadow-2xl p-12 flex flex-col items-center gap-6">
          <h2 className="text-gray-200 text-2xl font-semibold">Ready to Start Your Journey?</h2>
          <p className="text-gray-400 text-sm">Join over 200+ students who have successfully learned coding with Normal Coding</p>
          <Link to="/courses" className="text-sm text-black px-7 py-3 lg:px-10 lg:py-4 bg-gray-200 rounded">View Our Courses</Link>
        </div>
      </section>
    </>
  )
}

export default Feedback