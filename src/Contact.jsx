import { Fragment } from "react";

function Contact() {
  return (
    <Fragment>
      <div className="isolate bg-white py-16 flex justify-center relative"
      data-aos="zoom-in-left">

       
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-1/2 -translate-x-1/2 rotate-30 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 w-[60rem] h-[35rem]"
          ></div>
        </div>

   
        <div className="w-full max-w-md">

      
          <div className="text-center mb-8">
            <h2 className="text-3xl font-semibold text-gray-900">
              Contact Me
            </h2>

            <p className="mt-2 text-sm text-gray-600">
              Feel free to reach out for SEO consultation or collaboration.
            </p>
          </div>

         
          <form className="space-y-4">

            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="First Name"
                className="border rounded-md px-3 py-2 text-sm w-full"
              />

              <input
                type="text"
                placeholder="Last Name"
                className="border rounded-md px-3 py-2 text-sm w-full"
              />
            </div>

            <input
              type="text"
              placeholder="Company"
              className="border rounded-md px-3 py-2 text-sm w-full"
            />

            <input
              type="email"
              placeholder="Email"
              className="border rounded-md px-3 py-2 text-sm w-full"
            />

            <input
              type="text"
              placeholder="Phone"
              className="border rounded-md px-3 py-2 text-sm w-full"
            />

            <textarea
              rows="4"
              placeholder="Message"
              className="border rounded-md px-3 py-2 text-sm w-full"
            ></textarea>

            <button
              type="submit"
              className="w-full rounded-md bg-indigo-600 py-2 text-sm font-semibold text-white hover:bg-indigo-500 transition"
            >
              Send Message
            </button>

          </form>
        </div>
      </div>
    </Fragment>
  );
}

export default Contact;