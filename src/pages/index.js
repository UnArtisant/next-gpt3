import {Blog, Feature, Footer, Header, Possibiliy, WhatGPT3} from "../layout/index"
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
         <Feature />
         <Possibiliy />
         <Cta />
         <Blog />
         <Footer />
    </div>
    )
}
export default Home
