import React from 'react';
import shares from "../../config/shares";
import ShareButton from "../../ui/ShareButton";

function Share() {
    return (
        <div className="flex flex-col md:flex-row items-center w-full">
            <div className="
            flex items-center
            justify-center
            w-full
            h-[80px]
            border-2
            border-b-0
            last:border-b-2
            md:border-b-2
            md:border-r-0
            last:md:border-r-2
            border-black/30
            "
            >
                <span className="uppercase font-semibold"> Share: </span>
            </div>
            {
                shares.map((share, index) =>
                    <ShareButton key={index}>{ share.name }</ShareButton>
                )
            }
        </div>
    );
}

export default Share;
