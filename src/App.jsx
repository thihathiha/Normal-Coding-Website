
import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import LearningPath from "./pages/LearningPath";
import Feedback from "./pages/Feedback";
import Courses from "./pages/Courses";
import Uiux from "./pages/Uiux";
import WebFoundation from "./pages/WebFoundation";
import StylingMastery from "./pages/StylingMastery";
import ReactMastery from "./pages/ReactMastery";
import AboutUs from "./pages/AboutUs";
import Projects from "./pages/Projects";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen justify-between">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/learning-path" element={<LearningPath />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/uiux" element={<Uiux />} />
            <Route path="/courses/web-foundation" element={<WebFoundation />} />
            <Route
              path="/courses/styling-mastery"
              element={<StylingMastery />}
            />
            <Route path="/courses/react-mastery" element={<ReactMastery />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
