import { Fragment, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import Contact from "./contact";
import Blog from "./Blog";
import About from "./About";
import AOS from "aos";
import "aos/dist/aos.css";

function Navbar() {

  const [animate, setanimate] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  const startanimation = () => {
    setanimate("animate-[ping_1s_1]");
    setTimeout(() => {
      navigate("/Mywork");
    }, 1000);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <Fragment>

  
      <nav className="bg-white shadow w-full">
        <div className="mx-auto max-w-7xl px-4">

          <div className="flex h-16 items-center justify-between">

            <div className="flex items-center gap-4 transition-transform duration-500 hover:scale-110">
              <img
                src="profile-pic (3).png"
                className="h-12 w-12 rounded-full"
                alt="profile"
              />

              <p className="text-lg font-semibold">
                <span className="text-indigo-700">Mohd</span>{" "}
                <span className="text-black">Farhan Khan</span>
              </p>
            </div>

        
            <div className="hidden md:flex gap-8">
              <Link to="/Blog" className="text-gray-700 hover:text-indigo-600">
                Blog
              </Link>

              <Link to="/About" className="text-gray-700 hover:text-indigo-600">
                About
              </Link>

              <Link to="/Contact" className="text-gray-700 hover:text-indigo-600">
                Contact
              </Link>
            </div>

           
            <button
              className="md:hidden text-3xl"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              ☰
            </button>

          </div>

        
          {menuOpen && (
            <div className="flex flex-col gap-4 pb-4 md:hidden">
              <Link to="/Blog" className="text-gray-700 hover:text-indigo-600">
                Blog
              </Link>

              <Link to="/About" className="text-gray-700 hover:text-indigo-600">
                About
              </Link>

              <Link to="/Contact" className="text-gray-700 hover:text-indigo-600">
                Contact
              </Link>
            </div>
          )}

        </div>
      </nav>


     

      <div className={`relative isolate px-4 sm:px-6 lg:px-8 ${animate}`}>
        <div className="mx-auto max-w-7xl flex flex-col-reverse lg:flex-row items-center justify-between gap-12 py-16">


          <div className="max-w-xl flex-1 text-center lg:text-left animate-[bounce_1s_1]">

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
              SEO Expert Optimization
            </h1>

            <p className="mt-6 text-base sm:text-lg text-gray-600">
              Hi, I’m Md Farhan, an SEO expert passionate about helping
              businesses grow online. I specialize in on-page SEO,
              technical SEO, and content strategies that drive
              organic traffic and improve rankings.
            </p>

            <div className="mt-8 flex justify-center lg:justify-start items-center">

              <button
                className="rounded-md bg-indigo-600 px-6 py-3 text-white font-semibold hover:bg-indigo-500 transition animate-pulse"
                onClick={startanimation}
              >
                Check My Work
              </button>

              <a
                href="https://www.linkedin.com/in/farhandm01/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="icons8-linkedin-50.png"
                  alt="LinkedIn"
                  className="ml-4 transition-transform duration-500 hover:scale-110"
                />
              </a>

            </div>
          </div>


          <div
            className="flex justify-center flex-1"
            data-aos="fade-left"
            data-aos-offset="400"
            data-aos-duration="900"
          >

            <img
              src="profile-pic (3).png"
              alt="Farhan"
              className="w-60 sm:w-72 lg:w-80 rounded-2xl shadow-xl transition-transform duration-500 hover:scale-110"
            />

          </div>

        </div>
      </div>



      <div>

        <Blog />

        <About />

        <Contact />

        <hr className="my-10" />



    

        <footer
          className="bg-white"
          data-aos="fade-up"
          data-aos-duration="2000"
        >

          <div className="mx-auto max-w-7xl px-4 pt-16 pb-8 sm:px-6 lg:px-8 lg:pt-24">

            <div className="text-center">

              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-5xl">
                Boost Your Website Traffic with Proven SEO Strategies
              </h2>

              <button className="mt-8 inline-block rounded-full border border-indigo-600 px-12 py-3 text-sm font-medium text-indigo-600 hover:bg-indigo-600 hover:text-white transition">
                Lets Start
              </button>

            </div>

          </div>

        </footer>

      </div>

    </Fragment>
  );
}

export default Navbar;
