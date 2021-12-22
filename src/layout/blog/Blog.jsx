import React from 'react'
import style from "./Blog.module.css"
import Article from "../../components/article/Article"
import { blog1, blog2, blog3, blog4, blog5 } from "./import"
//#endregion
function Blog() {
    return (
        <div className="px-12 md:px-24 flex justify-center">
            <div className="">
                <div className="mb-24">
                    <h1 className={`text-xl lg:text-5xl my-4 max-w-xl ${style["gpt3__blog-heading"]}`}>A lot is happening, We are blogging about it.</h1>
                </div>
                <div className="flex flex-col items-center lg:items-start lg:flex-row">
                    <div className="lg:mr-20">
                        <Article img={blog1.src} title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        <Article img={blog2.src} title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
                        <Article img={blog3.src} title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
                        <Article img={blog4.src} title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
                        <Article img={blog5.src} title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog
