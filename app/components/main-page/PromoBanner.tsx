'use client'

import { useState } from "react";
import { CircleDecoreIcon } from "../assets/icons";

export default function PromoBanner() {
    const [isHovered, setIsHovered] = useState<boolean>(false);

    return (
        <section className="relative max-w-[1274px] h-[334px] mx-auto px-4 flex items-center">
            <div className="w-full flex items-start justify-between">
                <h4 className="relative z-10 uppercase text-5xl font-bold text-t-blue-dark max-w-[760px]">Дізнайтесь як працює <span className="text-t-blue">Piramid Space</span></h4>
                <a
                    href="/"
                    className="relative group text-xl font-semibold text-m-blue-dark inline-flex items-center mx-auto"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    Замовити демо
                    <span className="absolute z-10 left-[104%] inline-flex items-center h-0.5 w-[78px] group-hover:w-screen duration-1000 bg-m-blue-dark before:inline-block before:h-3 before:w-3 before:border-t-2 before:border-r-2 before:border-m-blue-dark before:rotate-45 before:absolute before:right-0"></span>
                    <span className="absolute z-10 right-[100vw] group-hover:right-[45vw] top-[147px] inline-flex items-center h-0.5 w-[100vw] duration-1000 bg-m-blue-dark before:inline-block before:h-3 before:w-3 before:border-t-2 before:border-r-2 before:border-m-blue-dark before:rotate-45 before:absolute before:right-0"></span>
                </a>
            </div>
            {/* Decoration elements */}
            {[1, 2, 3].map((icon) => (
                <CircleDecoreIcon
                    key={icon}
                    width={190}
                    height={190}
                    fillColor="#1000E5"
                    className={icon === 1 ?
                        `absolute right-[30%] ${isHovered ? '-top-1/4 opacity-100 rotate-180' : '-top-52 opacity-0 -z-50'} duration-500`
                        :
                        icon === 2 ?
                            `absolute top-[40%] ${isHovered ? '-right-[7%] opacity-100 rotate-45' : '-right-52 opacity-0 -z-50 rotate-180'} duration-500`
                            :
                            `absolute -bottom-1/4 left-1/3 ${isHovered ? '-bottom-1/4 opacity-100 -rotate-45 ' : '-bottom-52 rotate-180 opacity-0 -z-50'} duration-500`
                    }
                />
            ))}
        </section>
    )
}