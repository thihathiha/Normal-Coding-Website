import { Link } from "react-router";
import logo2 from "../images/logo2.png";

function Footer() {
  return (
    <>
      <footer className="w-full bg-black pt-4 pl-6 lg:pl-10 mt-16">
        <section className="grid grid-cols-2 gap-6 md:grid-cols-3">
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center">
              <img src={logo2} alt="logo2" className="w-[80px] lg:w-[100px]" />
              <h1 className="font-bold">Normal Coding</h1>
            </div>
            <p className="pl-2 text-sm text-gray-400 lg:pl-4">
              We are Future Developers...
            </p>
            <div className="my-4 flex gap-4 pl-3 text-xl text-gray-400">
              <a
                className="hover:text-gray-200"
                href="https://www.facebook.com/normalcoding"
                target="_blank"
              >
                <i class="fa-brands fa-facebook"></i>
              </a>
              <a
                className="hover:text-gray-200"
                href="https://www.youtube.com/@normalcoding122"
                target="_blank"
              >
                <i class="fa-brands fa-youtube"></i>
              </a>
              <a
                className="hover:text-gray-200"
                href="https://www.tiktok.com/@normalcoding122"
                target="_blank"
              >
                <i class="fa-brands fa-tiktok"></i>
              </a>
            </div>
          </div>
          <div className="pl-2">
            <h2 className="font-semibold">Quick Links</h2>
            <ul className="mt-2 text-sm leading-8 text-gray-400">
              <li>
                <Link to="/" className="hover:text-gray-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/learning-path" className="hover:text-gray-300">
                  Learning Path
                </Link>
              </li>
              <li>
                <Link to="/feedback" className="hover:text-gray-300">
                  Feedback
                </Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-gray-300">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/aboutus" className="hover:text-gray-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-gray-300">
                  Our Projects
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold">Contact</h2>
            <p className="my-2 cursor-pointer text-sm text-gray-400">
              normalcoding@gmail.com
            </p>
            <p className="cursor-pointer text-sm text-gray-400">
              +959 955 838 689
            </p>
          </div>
        </section>
        <p className="mt-3 text-center text-xs text-gray-400 lg:mt-6">
          &copy; 2025 Normal Coding. All Rights Reserved
        </p>
      </footer>
    </>
  );
}

export default Footer;
