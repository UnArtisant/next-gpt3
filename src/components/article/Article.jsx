import React from 'react'
import "./Article.module.css"
function Article({title, img}) {
    return (
     <div className="flex flex-col max-w-md h-full relative my-6 lg:my-0">
        <div className="">
            <img src={img} alt="article"/>
        </div>
        <div style={{background: "#042C54"}} className="w-full h-full flex flex-col justify-between py-8 px-6">
            <div>
                <p className="text-white text-xs">21 septembre</p>
            <h1 className="text-white text-2xl font-bold mb-2">{title}</h1>
            </div>
            <div className="">
                <p className="text-white text-md">Read full article</p>
            </div>
        </div>
     </div> 
    )
}

export default Article
