import React from 'react';
import BlogHeaderType from "../../../types/BlogHeaderType";


function BlogHeader({ categories, title, imageSrc}: BlogHeaderType) {
    return (
        <div className="relative md:min-h-[500px]">
            <img className="absolute w-full h-full object-cover z-1"  src={imageSrc} alt="Blog image" />
            <div className="absolute w-full h-full object-cover z-2 bg-black/50" />
            <div className="relative z-10 flex flex-col items-center w-full h-full md:py-[100px] py-[40px] px-[30px]">
                <div className="
                    border-2
                    border-white
                    px-[30px]
                    py-[10px]
                    w-fit
                    min-w-[200px]
                    flex
                    justify-center
                    md:mb-[100px]
                    mb-[50px]
                    "
                    >
                    {categories.map(
                        (category, index) =>
                            <p
                                key={index}
                                className="
                                flex
                                items-center
                                text-lg
                                text-white
                                capitalize
                                after:w-0.5
                                after:h-full
                                after:block
                                last:after:hidden
                                after:bg-white
                                after:ml-[15px]
                                mr-[15px]
                                last:mr-0"
                            >
                                { category.name }
                            </p>
                    )}

                </div>
                <h2 className="md:text-5xl text-3xl text-white max-w-[700px] text-center"> { title } </h2>
            </div>
        </div>
    );
}

export default BlogHeader;
