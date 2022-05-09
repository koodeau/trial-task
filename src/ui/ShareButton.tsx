import React from 'react';

function ShareButton({ children }: { children: string }) {
    return (
        <button
            className="
                 group
                 w-full
                 h-[80px]
                 border-2
                 border-b-0
                 last:border-b-2
                 md:border-b-2
                 md:border-r-0
                 last:md:border-r-2
                 border-black/30
                 hover:bg-red-500
                 hover:border-transparent transition
                 "
        >
            <span className="group-hover:text-white uppercase font-semibold transition">{ children }</span>
        </button>
    );
}

export default ShareButton;
