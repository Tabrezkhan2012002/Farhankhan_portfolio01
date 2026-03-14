import { Fragment } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  const skills = {
    analyticsTools: [
      "Google Analytics",
      "Google Search Console",
      "SEMRUSH",
      "Ahrefs",
      "Screaming Frog",
      "Ubersuggest",
    ],
    onPageSEO: [
      "Meta Titles & Descriptions",
      "Schema Markup",
      "Alt Tag Optimization",
      "Content Optimization",
      "Internal Linking",
    ],
    technicalSEO: [
      "Robots.txt Creation",
      "Sitemap Creation",
      "Technical SEO Audits",
    ],
    offPageSEO: [
      "Guest Post & PR Submissions",
      "Link Building Strategy",
      "Competitor Analysis",
      "Local SEO",
    ],
  };

  return (
    <Fragment>
      <section className="bg-gray-50 py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto "
          data-aos="zoom-in-down">


          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Expertise
            </h2>
            <br />
            <hr />

            <div className="w-24 h-1 text-indigo-700 mx-auto mt-4 rounded"></div>


          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 "
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">


            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300">
              <h3 className="text-lg font-semibold text-blue-600 mb-4">
                Analytics & Tools
              </h3>

              <ul className="space-y-2 text-gray-600">
                {skills.analyticsTools.map((tool, idx) => (
                  <li key={idx}>• {tool}</li>
                ))}
              </ul>
            </div>


            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300">
              <h3 className="text-lg font-semibold text-blue-600 mb-4">
                On-Page SEO
              </h3>

              <ul className="space-y-2 text-gray-600">
                {skills.onPageSEO.map((skill, idx) => (
                  <li key={idx}>• {skill}</li>
                ))}
              </ul>
            </div>


            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300">
              <h3 className="text-lg font-semibold text-blue-600 mb-4">
                Technical SEO
              </h3>

              <ul className="space-y-2 text-gray-600">
                {skills.technicalSEO.map((skill, idx) => (
                  <li key={idx}>• {skill}</li>
                ))}
              </ul>
            </div>


            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300">
              <h3 className="text-lg font-semibold text-blue-600 mb-4">
                Off-Page SEO
              </h3>

              <ul className="space-y-2 text-gray-600">
                {skills.offPageSEO.map((skill, idx) => (
                  <li key={idx}>• {skill}</li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default About;