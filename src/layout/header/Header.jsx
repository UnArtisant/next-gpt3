import React from 'react'
import style from "./Header.module.css"
import peoples from "../../assets/people.png"
import ai from "../../assets/ai.png"

function Header() {
    return (
        <div className="flex flex-col lg:flex-row px-12 md:px-24 ">
            <div className="flex flex-col items-start justify-center">
                <h1 className={`${style["gpt3__header-heading"]} my-2`} >Let’s Build Something amazing with GPT-3 OpenAI</h1>
                <p className={`${style["gpt3__header-description"]} my-2`}>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>

                <div className="flex w-full items-center my-4">
                    <input className={`${style["gpt3__header-email-input"]} text-lg px-4 h-16  w-full `} type="email" placeholder="Your Email Address" />
                    <button className={`${style["gpt3__header-email-btn"]} h-16`}>Get started</button>
                </div>
                <div className="flex w-full justify-center md:justify-start flex-col md:flex-row items-center my-2">
                    <img src={peoples.src} alt="png" />
                    <p className="text-white ml-2 text-center md:text-left">1,600 people requested access a visit in last 24 hours</p>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <img  style={{maxHeight: 1550}} src={ai.src} alt="ai" />
            </div>
        </div>
    )
}

export default Header
