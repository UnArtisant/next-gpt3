import React from 'react'
import style from "./Possibility.module.css"
import possibility from "../../assets/possibility.png"
function Possibility() {
    return (
        <div className="px-24 flex flex-col md:flex-row items-center justify-center">
            <div className="flex items-center md:mr-20 max-w-2xl justify-start ">
                <img src={possibility.src} alt="possibility" />
            </div>
            <div  className="flex justify-end items-start flex-col max-w-2xl">
                <h4 style={{color : "#71E5FF"}} className="text-lg my-4" >Request Early Access to Get Started</h4>
                <h1 className={`${style["gpt3__possibility-heading"]} my-4 text-5xl font-bold`}>The possibilities are beyond your imagination</h1>
                <p className={`${style["gpt3__possibility-description"]} my-4`}>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
                <a style={{color: "#FF8A71"}} className="my-3" href="#">Request Early Access to Get Started</a>
            </div>
        </div>
    )
}

export default Possibility
