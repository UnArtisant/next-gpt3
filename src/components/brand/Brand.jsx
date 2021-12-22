import React from 'react'
import {google, atlassian, slack, shopify, dropbox} from "./import"
import style from "./brand.module.css"
function Brand() {
    return (
        <section className="flex justify-center items-center my-20">
            <div className="flex items-center flex-wrap justify-around">
                <div className={style.brand}>
                    <img src={google.src} alt="brand" />
                </div>
                <div className={style.brand}>
                    <img src={slack.src} alt="brand" />
                </div>
                <div className={style.brand}>
                    <img src={atlassian.src} alt="brand" />
                </div>
                <div className={style.brand}>
                    <img src={shopify.src} alt="brand" />
                </div>
                <div className={style.brand}>
                    <img src={dropbox.src} alt="brand" />
                    </div>
            </div>
        </section>
    )
}

export default Brand
