import { Fragment } from "react"

function Blog() {
    return (
        <Fragment>
            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">

                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                            Experience
                        </h2>
                        <p className="mt-2 text-lg/8 text-gray-600">
                            I have three years of experience in different places.
                        </p>
                    </div>

                    <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        <div data-aos="fade-up"
                            data-aos-duration="3000">
                            <div className="group relative grow w-60 sm:w-72 lg:w-80 rounded-2xl shadow-xl animate-float transition-transform duration-500 hover:scale-125"
                            >
                                <img src="/spikee-png-scaled.png" alt="" className="h-40" />
                                <p className="text-lg font-semibold text-indigo-700 m-4">
                                    I have worked as an SEO specialist for this company, focusing on improving website visibility, optimizing content, and driving targeted traffic through effective search engine strategies.
                                </p>
                            </div>
                        </div>

                        <article className="flex max-w-xl flex-col items-start justify-between">
                            <div data-aos="fade-up"
                                data-aos-duration="3000">


                                <div className="group relative grow w-60 sm:w-72 lg:w-80 rounded-2xl shadow-xl animate-float transition-transform duration-500 hover:scale-125"
                                >
                                    <img src="/images.jpg" alt="" />
                                    <p className="text-lg font-semibold text-indigo-700 m-4">
                                        I have worked as an SEO specialist for this company, focusing on improving website visibility, optimizing content, and driving targeted traffic through effective search engine strategies.
                                    </p>
                                </div>
                            </div>
                        </article>
                        <div data-aos="fade-up"
                            data-aos-duration="3000">


                            <div className="group relative grow w-60 sm:w-72 lg:w-80 rounded-2xl shadow-xl animate-float transition-transform duration-500 hover:scale-125"
                            >
                                <img src="/72c0b2_555566b6e49a48a09cf53b301fce6769~mv2.avif" alt="" />
                                <p className="text-lg font-semibold text-indigo-700 m-4">
                                    I have worked as an SEO specialist for this company, focusing on improving website visibility, optimizing content, and driving targeted traffic through effective search engine strategies.
                                </p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </Fragment>
    )
}

export default Blog