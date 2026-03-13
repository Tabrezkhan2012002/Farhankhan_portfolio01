import { Fragment } from "react";
import { useState } from "react";
import { Route,Link,Routes, useNavigate } from "react-router";
import Contact from "./contact";
import Blog from "./Blog";
import About from "./About";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


function Navbar() {
    const [animate, setanimate] = useState("");
    const navigate=useNavigate();
    const startanimation = () => {
        setanimate("animate-[ping_1s_1]")
         setTimeout(() => {
      navigate("/Mywork");
    }, 1000); 
    }
    const blog=()=>{
      set
    }
useEffect(() => {
  AOS.init({
    duration: 1000, // animation duration in ms
    once: true,     // animate only once per element
  });
}, []);
    return (
        <Fragment>
            {/* NAVBAR */}
             
            <nav className="bg-white shadow">
                <div className="mx-auto max-w-7xl px-4 ">
                    <div className="flex h-16 items-center justify-between ">

                        {/* LEFT SIDE */}
                        <div className="flex items-center gap-4  transition-transform duration-500 hover:scale-125">
                            <img
                                src="/profile-pic (3).png"
                                alt="Mohd Farhan Khan"
                                className="h-12 w-12 rounded-full"
                            />

                            <p className="text-lg font-semibold">
                                <span className="text-indigo-700">Mohd</span>{" "}
                                <span className="text-black">Farhan Khan</span>
                            </p>
                        </div>

                        {/* RIGHT SIDE MENU */}
                        <div className="flex gap-8">
                            <p>
                               <Link to={"/Blog"} className="no-underline cursor-pointer text-gray-700 hover:text-indigo-600 " >Blog</Link> 
                            </p>

                            <p className>
                               <Link to={"/About"} className="no-underline cursor-pointer text-gray-700 hover:text-indigo-600">About</Link>
                            </p>
                            <p>
                                <Link to={"/Contact"} className="no-underline cursor-pointer text-gray-700 hover:text-indigo-600 "> Contact</Link>
                            </p>
                        </div>

                    </div>
                </div>
            </nav>
            <br /> <br />
            <hr />
            <br />

            {/* HERO SECTION */}
           

           
            <div className={`relative isolate px-4 sm:px-6 lg:px-8 ${animate} `}>
  <div className="mx-auto max-w-7xl flex flex-col-reverse lg:flex-row items-center justify-between gap-12 py-16">
    
    {/* LEFT SIDE TEXT */}
    <div className="max-w-xl flex-1 text-center lg:text-left animate-[bounce_1s_1]">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
        SEO Expert Optimization
      </h1>
      <p className="mt-6 text-base sm:text-lg text-gray-600">
        Hi, I’m Md Farhan, an SEO expert passionate about helping
        businesses grow online. I specialize in on-page SEO, technical
        SEO, and content strategies that drive organic traffic and
        improve rankings.
      </p>
      <div className="mt-8 flex justify-center lg:justify-start items-center">
        <button
          className="rounded-md bg-indigo-600 px-6 py-3 text-white font-semibold hover:bg-indigo-500 transition animate-pulse"
          onClick={startanimation}
        >
          Check My work
        </button>
<button onClick={startanimation}>
        <a href="https://www.linkedin.com/in/farhandm01/" target="_blank" rel="noopener noreferrer">
          <img
            src="/icons8-linkedin-50.png"
            alt="LinkedIn"
            className={`ml-4 transition-transform duration-500 hover:scale-110
                ${animate}`}
          />
        </a>
        </button>
      </div>
    </div>

    {/* RIGHT SIDE IMAGE */}
    <div className="flex justify-center flex-1 "
    data-aos="fade-left"
    data-aos-anchor="#example-anchor"
     data-aos-offset="400"
     data-aos-duration="900">
      <img
        src="/profile-pic (3).png"
        alt="Farhan"
        className="w-60 sm:w-72 lg:w-80 rounded-2xl shadow-xl animate-float transition-transform duration-500 hover:scale-125"
      />
    </div>

  </div>
</div>
<div>
<Blog/>
<About/>
<Contact/>
<br /><br />
<hr />

<div>
<footer className="bg-white "
data-aos="fade-up"
     data-aos-duration="2000">
  <div className="mx-auto max-w-7xl px-4 pt-16 pb-8 sm:px-6 lg:px-8 lg:pt-24">
    <div className="text-center">
      <h2 className="text-3xl font-extrabold text-gray-900 sm:text-5xl">
      Boost Your Website Traffic with Proven SEO Strategies
      </h2>

      <p className="mx-auto mt-4 max-w-sm text-gray-500">
       
      </p>

      <button className="mt-8 inline-block rounded-full border border-indigo-600 px-12 py-3 text-sm font-medium text-indigo-600 hover:bg-indigo-600 hover:text-white transition "
      > Lets Start

      </button >
      
    </div>

    <div className="mt-16 border-t border-gray-100 pt-8 sm:flex sm:items-center sm:justify-between lg:mt-24">

     
      <ul className="mt-8 flex justify-center gap-6 sm:mt-0 lg:justify-end">
        <li>
          <a href="#" rel="noreferrer" target="_blank" className="text-gray-700 transition hover:opacity-75">
            <span className="sr-only">Facebook</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </li>

        <li>
          <a href="#" rel="noreferrer" target="_blank" className="text-gray-700 transition hover:opacity-75">
            <span className="sr-only">Instagram</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </li>

        <li>
          <a href="#" rel="noreferrer" target="_blank" className="text-gray-700 transition hover:opacity-75">
            <span className="sr-only">Twitter</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
            </svg>
          </a>
        </li>

        <li>
          <a href="#" rel="noreferrer" target="_blank" className="text-gray-700 transition hover:opacity-75">
            <span className="sr-only">GitHub</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </li>

        <li>
          <a href="#" rel="noreferrer" target="_blank" className="text-gray-700 transition hover:opacity-75">
            <span className="sr-only">Dribbble</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </li>
      </ul>
    </div>
  </div>
</footer>
</div>


</div>





        </Fragment >
    );
}

export default Navbar;