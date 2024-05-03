import React from "react";
import Heading from "./Heading";

const blog = [
    {
        img: "Media/1.jpg",
        nm: "SMARTWATCH",
        des: "Apple Watch The Best For iPhone Users From $289",
        des1: "These are the people who make your life easier.Large tiles were arranged on the counter top plate near the window of the living room, they were connected to the kitchen..."
    }, {
        img: "Media/2.png",
        nm: "SMARTPHONE",
        des: "The Best Xiaomi Note 10 Exclusive Global Launch Hit",
        des1: "These are the people who make your life easier.Large tiles were arranged on the counter top plate near the window of the living room, they were connected to the kitchen..."
    },
    {
        img: "Media/3.png",
        nm: "SMARTPHONE",
        des: "The Best Xiaomi Note 10 Exclusive Global Launch Hit",
        des1: "These are the people who make your life easier.Large tiles were arranged on the counter top plate near the window of the living room, they were connected to the kitchen..."
    }
    ,
    {
        img: "Media/4.png",
        nm: "Electronics",
        des: "The Best Xiaomi Note 10 Exclusive Global Launch Hit",
        des1: "These are the people who make your life easier.Large tiles were arranged on the counter top plate near the window of the living room, they were connected to the kitchen..."
    }
    ,
    {
        img: "Media/5.jpg",
        nm: "GAMEPAD",
        des: "The Best Xiaomi Note 10 Exclusive Global Launch Hit",
        des1: "These are the people who make your life easier.Large tiles were arranged on the counter top plate near the window of the living room, they were connected to the kitchen..."
    }
    ,
    {
        img: "Media/6.jpg",
        nm: "SMARTPHONE",
        des: "The Best Xiaomi Note 10 Exclusive Global Launch Hit",
        des1: "These are the people who make your life easier.Large tiles were arranged on the counter top plate near the window of the living room, they were connected to the kitchen..."
    }
    ,
    {
        img: "Media/7.png",
        nm: "HEADPHONE",
        des: "The Best Xiaomi Note 10 Exclusive Global Launch Hit",
        des1: "These are the people who make your life easier.Large tiles were arranged on the counter top plate near the window of the living room, they were connected to the kitchen..."
    }
    ,
    {
        img: "Media/8.png",
        nm: "SMARTWATCH",
        des: "The Best Xiaomi Note 10 Exclusive Global Launch Hit",
        des1: "These are the people who make your life easier.Large tiles were arranged on the counter top plate near the window of the living room, they were connected to the kitchen..."
    }
    ,
    {
        img: "Media/9.jpg",
        nm: "ELECTRONICS",
        des: "The Best Xiaomi Note 10 Exclusive Global Launch Hit",
        des1: "These are the people who make your life easier.Large tiles were arranged on the counter top plate near the window of the living room, they were connected to the kitchen..."
    }
    ,
    {
        img: "Media/10.png",
        nm: "SMARTPHONE",
        des: "The Best Xiaomi Note 10 Exclusive Global Launch Hit",
        des1: "These are the people who make your life easier.Large tiles were arranged on the counter top plate near the window of the living room, they were connected to the kitchen..."
    },
    {
        img: "Media/11.png",
        nm: "ELECTRONICS",
        des: "The Best Xiaomi Note 10 Exclusive Global Launch Hit",
        des1: "These are the people who make your life easier.Large tiles were arranged on the counter top plate near the window of the living room, they were connected to the kitchen..."
    }
    ,
    {
        img: "Media/12.png",
        nm: "SMARTPHONE",
        des: "The Best Xiaomi Note 10 Exclusive Global Launch Hit",
        des1: "These are the people who make your life easier.Large tiles were arranged on the counter top plate near the window of the living room, they were connected to the kitchen..."
    }

]

const Blog = () => {
    return (
        <>
           <Heading val="Blog"></Heading>

            <div className="row m-0 p-0">
                {
                    blog.map((val) => {
                        return (
                            <>
                                <div className="col-lg-4 col-md-6 col-12 p-4">
                                    <div className="h-100 w-100" style={{ backgroundColor: "white" }}>
                                        <div className="mb-2 div_2">  <img src={val.img} className="img-fluid" alt="" /></div>
                                        <b className="fw-bold">{val.nm}</b> <br />
                                        <h5 className="fw-bold mt-2">{val.des}</h5>
                                        <h6 className="fw-normal">{val.des1}</h6>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Blog;
