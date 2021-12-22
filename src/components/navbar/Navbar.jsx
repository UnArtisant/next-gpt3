import React, { useState } from 'react'
import styles from "./Navbar.module.css"
import scaleUp from "../../styles/animation/scale_up.module.css"
import logo from "../../assets/logo.svg"
function Navbar() {
    const [openMenu, setOpenMenu] = useState(false)
    return (
        <nav >
            <div className={styles.gpt3__navbar}>
                <div className={styles["gpt3__navbar-links"]}>
                    <div className={styles["gpt3__navbar-links-logo"]}>
                        <img src={logo.src} alt="logo" />
                    </div>
                    <div className={`${styles["gpt3__navbar-links-container"]} hidden lg:flex`}>
                        <ul >
                            <li className="link">
                                <a href="#home">Home</a>
                            </li>
                            <li className="link">
                                <a href="#whatgpt3">What is GPT</a>
                            </li>
                            <li className="link">
                                <a href="#openai">Open AI</a>
                            </li>
                            <li className="link">
                                <a href="case">Case Studies</a>
                            </li>
                            <li className="link">
                                <a href="#library">Library</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={`items-center justify-end text-white hidden lg:flex`}>
                    <a className="block mr-6" href="#">Sign in</a>
                    <a className={styles["btn-active"]} href="#">Sign Up</a>
                </div>
                <div className="lg:hidden relative">
                    {!openMenu ?
                        <svg onClick={() => setOpenMenu(true)} xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg> :
                        <svg onClick={() => setOpenMenu(false)} xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>}
                    <div style={{background: "#002853"}} className={`${openMenu ? "" : "hidden "} rounded ${scaleUp["scale-up-center"]} absolute px-12 py-6 text-white right-0`}>
                        <ul >
                            <li className="text-lg py-2">
                                <a href="#home">Home</a>
                            </li>
                            <li className="text-lg py-2">
                                <a href="#whatgpt">What is GPT</a>
                            </li>
                            <li className="text-lg py-2">
                                <a href="#openai">Open AI</a>
                            </li>
                            <li className="text-lg py-2">
                                <a href="case">Case Studies</a>
                            </li>
                            <li className="text-lg py-2">
                                <a href="#library">Library</a>
                            </li>
                            <li className="text-lg py-2">
                                <a href="#">Sign in</a>
                            </li>
                            <li className="text-lg py-2">
                                <a className={styles["btn-active"]} href="#">Sign Up</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </nav >
    )
}

export default Navbar
