import React from 'react'
import style from  "./Feature.module.css"
function Feature({ title, text }) {
    return (
        <div className="flex flex-wrap justify-between px-2">
            <div style={{maxWidth: "180px"}} className="w-full">
                <span className={style.bar} />
                <h1 className="text-white text-xl md:text-2xl leading-10 font-bold my-4">{title}</h1>
            </div>
            <p style={{color: "#81AFDD"}} className="text-white text-md lg:text-lg md:text-xl max-w-md lg:max-w-2xl leading-6 my-6">
            {text}
            </p>
        </div>
    )
}

export default Feature
