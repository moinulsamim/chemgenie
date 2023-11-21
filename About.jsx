import React from 'react'

const About = () => {
    return (
        <div>
            <section className="pt-10 overflow-hidden bg-gray-50 md:pt-0 sm:pt-16 2xl:pt-16">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="grid items-center grid-cols-1 md:grid-cols-2">

                        <div>
                            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                                Afnan Bin Siddique
                            </h2>
                            
                            <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                 Possimus itaque laudantium maiores unde. Est, dolorem accusantium? Nulla dicta soluta et.
                            </p>

                            <p className="mt-4 text-xl text-gray-600 md:mt-8">
                                <span className="relative inline-block">
                                    <span className="absolute inline-block w-full bottom-0.5 h-2 bg-yellow-300"></span>
                                    <span className="relative"> Thank you. </span>
                                </span>
                                
                            </p>
                        
                        </div>

                        <div className="relative">
                            <img className="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2" src={"https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg"} alt="" />

                            <img className="rounded-full relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110 scale-75" src={"Images/bannerPic.jpg"} alt="" />
                        </div>

                        <p>

                        </p>

                    </div>
                </div>
            </section>


        </div>
    )
}

export default About