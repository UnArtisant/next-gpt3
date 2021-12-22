import React from 'react'
import style from "./WhatGP3.module.css"
import Feature from "../../components/feature/Feature"

function WhatGPT3() {
    return (
        <div id="whatgpt3" className="px-6 my-24 md:px-24">
            <div className={`${style["gtp3__whats-container"]} p-8 md:p-16 `}>
                <div className="">
                    <Feature title="What is GPT-3" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by." />
                </div>
                <div className="flex flex-wrap justify-between items-center my-12">
                    <h1 className={`${style["gpt3__whats-heading"]} leading-20 text-3xl max-w-xl`}>The possibilities are beyond your imagination </h1>
                    <p style={{color: "#FF8A71"}} className={`my-6 lg:my-0 text-lg`}>Explore The Library</p>
                </div>
                <div className="flex items-start  flex-wrap lg:flex-nowrap justify-between w-full">
                    <Feature title="Chatbots" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. " />
                    <Feature title="Knowledgebase" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
                    <Feature title="Education" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
                </div>
            </div>
        </div>
    )
}

export default WhatGPT3
