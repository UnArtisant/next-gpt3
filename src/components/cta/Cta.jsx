import React from 'react'
import style from "./Cta.module.css"

function Cta() {
    return (
        <div className="px-24 my-24">
            <div className={`p-10 ${style["gtp3__cta-container"]}`}>
                <p className="text-sm my-2">Request Early Access to Get Started</p>
                <div className="flex flex-col lg:flex-row lg:items-center justify-between my-4">
                    <h1 className="text-2xl font-bold">Register today & start exploring the endless possiblities.</h1>
                    <button className="bg-black rounded-full my-4 lg:my-0 px-6 text-lg py-2 text-white">Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Cta
