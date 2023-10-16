import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { BiBookReader } from "react-icons/bi";

const Coursecard = () => {
    return (
        <>
            <div className="course bg-slate-50 p-5 rounded-lg ">
                <h1 className='inline-flex font-bold text-5xl'>Our Courses &nbsp; <BiBookReader className='text-cyan-500 ' /></h1>

                <div className="my-10 flex flex-wrap justify-center items-center checkout-card-container">
                {/* all course card container---------------------------------------------------- */}

                    <div className="w-80 max-w-sm border m-5 mb-10  rounded-lg shadow bg-gray-800 border-gray-700 hover:scale-110 duration-100">
                        <a href="#">
                            <img className="w-full h-64 rounded-t-lg" src="images/c2.jpg" alt="product image" />
                        </a>
                        <div className="px-5 pb-5">

                            <h5 className="text-xl text-left font-bold tracking-tight text-white">
                                Lorem ipsum dolor sit amet. lorem10</h5>

                            <p className="text-left text-slate-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptas culpa quos,
                            </p>
                            <div className="flex items-center mt-2.5 mb-5">
                                <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <span className="  text-xs font-semibold mr-2 px-2.5 py-0.5 rounded bg-blue-200 text-blue-800 ml-3">5.0</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-3xl font-bold  text-white mr-10 ">2000 tk</span>
                                <a href="#" className="text-black  font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-yellow-300 hover:bg-yellow-400 hover:text-black ">
                                    See details <FaArrowRight className='inline-block' /> </a>
                            </div>
                        </div>
                    </div>

        
                </div>
                {/* course card container closes here */}


                <a href="#" className='mb-10 px-32 py-4 bg-stone-200 hover:bg-stone-300 hover:outline-none hover:text-black text-black   font-medium rounded-lg text-base text-center  '>
                    See all <FaArrowRight className='inline-block' />  </a>
            </div>
        </>
    )
}

export default Coursecard