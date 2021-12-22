import React from 'react'
import Feature from "../../components/feature/Feature"
import style from "./Feature.module.css"

function Features() {
    const featuresData = [
        {title: "Improving end distrusts instantly ", text: "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded."},
        {title: "Become the tended active", text: "Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to."},
        {title: "Message or am nothing", text: "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address."},
        {title: "Message or am nothing", text: "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush."}
    ]
    return (
        <div id="features" className="px-6 md:px-24 my-44 flex flex-wrap lg:flex-nowrap justify-between">
            <div className="max-w-md w-full">
                <h1 className={`${style["gpt3__features-heading"]} text-3xl mb-6`} >The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen</h1>
                <p style={{color: "#FF8A71"}} className="text-lg my-6">Request Early Access to Get Started</p>
            </div>
            <div className="maw-w-5xl">
                {featuresData.map((f,k) => {
                    return <Feature key={k} title={f.title} text={f.text} />
                })}
            </div>
        </div>
    )
}

export default Features
