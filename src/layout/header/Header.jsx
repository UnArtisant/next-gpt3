import React from 'react'
import style from "./Header.module.css"
import peoples from "../../assets/people.png"
import ai from "../../assets/ai.png"

function Header() {
    return (
        <div className="flex px-24 ">
            <div className="flex flex-col items-start justify-center mr-20">
                <h1 className={`${style["gpt3__header-heading"]} my-2`} >Let’s Build Something amazing with GPT-3 OpenAI</h1>
                <p className={`${style["gpt3__header-description"]} my-2`}>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>

                <div className="flex items-center my-4">
                    <input className={`${style["gpt3__header-email-input"]} text-lg px-4 h-16 h-full w-96`} type="email" placeholder="Your Email Address" />
                    <button className={`${style["gpt3__header-email-btn"]} h-16 h-full`}>Get started</button>
                </div>
                <div className="flex items-center my-2">
                    <img src={peoples.src} alt="png" />
                    <p className="text-white ml-2">1,600 people requested access a visit in last 24 hours</p>
                </div>
                <div className="float-right">
                    <img src={ai.src} alt="ai" />
                </div>
            </div>
        </div>
    )
}

export default Header
