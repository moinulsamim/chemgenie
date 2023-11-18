import React from 'react'




const FeaturedStudent = () => {

    const featuredList = [
        {
            img: "/Images/bannerPic.jpg",
            name: "MD. Moinul Hossain Samim",
            clg: "Notre Dame College, Dhaka",
            rank: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, Lorem ipsum dolor sit amet.",
        },
        {
            img: "/Images/bannerPic.jpg",
            name: "MD. Moinul Hossain Samim",
            clg: "Notre Dame College, Dhaka",
            rank: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, Lorem ipsum dolor sit amet.",
        },
        {
            img: "/Images/bannerPic.jpg",
            name: "MD. Moinul Hossain Samim",
            clg: "Notre Dame College, Dhaka",
            rank: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, Lorem ipsum dolor sit amet.",
        },
        {
            img: "/Images/bannerPic.jpg",
            name: "MD. Moinul Hossain Samim",
            clg: "Notre Dame College, Dhaka",
            rank: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, Lorem ipsum dolor sit amet.",
        },
        {
            img: "/Images/bannerPic.jpg",
            name: "MD. Moinul Hossain Samim",
            clg: "Notre Dame College, Dhaka",
            rank: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, Lorem ipsum dolor sit amet.",
        },
        {
            img: "/Images/bannerPic.jpg",
            name: "MD. Moinul Hossain Samim",
            clg: "Notre Dame College, Dhaka",
            rank: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, Lorem ipsum dolor sit amet.",
        },

    ]



    return (
        <>
            <section className=" py-8 ">
                <div className="w-full mt-8 flex flex-wrap justify-center items-center ">



                    {
                        featuredList.map((e,index) => {
                            return (
                                <div className=" bg-slate-50 flex flex-wrap justify-center items-center md:w-60 w-32 p-2 m-2 shadow-lg rounded-md md:p-6 md:m-6 ">
                                    <img src={e.img} className=' md:w-32 md:h-32 rounded-lg mb-4 ' alt="" />
                                    <div className="font-bold md:text-md text-sm mb-2 text-center">{e.name}</div>
                                    <p className="text-grey-darker md:text-base text-sm mb-4 text-center">{e.clg}</p>
                                    <p className="text-grey-darker md:text-sm text-xs mb-4 text-center">{e.rank}</p>
                                    
                                </div>
                            )
                        })

                    }













                </div>
            </section>


        </>
    )
}

export default FeaturedStudent