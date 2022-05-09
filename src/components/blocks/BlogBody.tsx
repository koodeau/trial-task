import React from 'react';
import Share from "./Share";
import BlogBodyType from "../../../types/BlogBodyType";

function BlogBody({title, body, author, date}: BlogBodyType) {
    return (
        <div className="flex justify-center bg-stone-100">
            <div className="
                flex
                flex-col
                items-center
                md:py-[100px]
                py-[50px]
                md:px-[100px]
                px-[30px]
                md:max-w-[1000px]
                "
            >
                <h2 className="md:text-3xl text-xl text-center mb-[30px] max-w-[700px]">{ title }</h2>
                <div className="flex items-center md:mb-[70px] mb-[25px]">
                <span
                    className="
                    flex
                    items-center
                    text-xs
                    md:text-base
                    uppercase
                    text-black/50
                    font-medium
                    mr-[20px]
                    after:w-[5px]
                    after:h-[5px]
                    after:bg-black/70
                    after:content-['']
                    after:block
                    after:rounded-full
                    after:ml-[20px]
                    "
                >
                    { date }
                </span>
                    <span className="uppercase text-black/50 font-medium text-xs md:text-base">{ author }</span>
                </div>
                <article className="whitespace-pre-wrap text-black/50 mb-[40px] w-full">
                    { body }
                </article>
                <Share />
            </div>
        </div>
    );
}

export default BlogBody;
