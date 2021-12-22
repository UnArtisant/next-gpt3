import {Blog, Features, Footer, Header, Possibiliy, WhatGPT3} from "../layout/index"
import {Navbar, Brand, Cta} from "../components/index"
import style from "../styles/pages/Home.module.css"

function Home() {
  return (
    <div className="App">
         <div className={style.gradient__bg}>
           <Navbar/>
           <Header />
         </div>
         <Brand />
         <WhatGPT3 />
         <Features />
         <Possibiliy />
         <Cta />
         <Blog />
    </div>
    )
}
export default Home
