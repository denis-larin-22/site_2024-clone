'use client'

import { useState } from "react";
import { CircleDecoreIcon } from "../assets/icons";

export default function BusinessPromo() {
    const BLUE_CIRCLE_COLOR = "#0D16E3";
    const GREEN_CIRCLE_COLOR = "#07F6BA";

    const [isHovered, setIsHovered] = useState<boolean>(false);

    return (
        <div className="relative z-0 max-w-[1354px] mx-auto my-[100px]">
            <section className="relative min-h-[539px] pl-[98px] pr-[60px] pb-[135px] bg-m-blue-dark rounded-[22px] text-white flex items-end justify-between">
                <div className="group absolute -top-[12%] right-16">
                    <CircleDecoreIcon
                        fillColor={isHovered ? GREEN_CIRCLE_COLOR : BLUE_CIRCLE_COLOR}
                        width={190}
                        height={190}
                        className={`rotate-[220deg] group-hover:rotate-[138deg] duration-500`}
                    />
                    <Arrow className="absolute inset-0 m-auto group-hover:rotate-45 duration-500" isHovered={isHovered} />
                </div>
                <h3 className="max-w-[643px] text-[71px] font-bold uppercase leading-tight">Зробіть свій бізнес ще потужнішим</h3>
                <div className="flex flex-col items-start gap-y-[23px] text-xl font-semibold self-end">
                    <a href="/" className="relative group ml-5 flex items-center">
                        Стати дилером
                        <span className="absolute left-[104%] inline-flex items-center h-0.5 w-[65px] group-hover:w-52 duration-1000 bg-white before:inline-block before:h-3 before:w-3 before:border-t-2 before:border-r-2 before:border-white before:rotate-45 before:absolute before:right-0"></span>
                        <span className="absolute right-[100vw] group-hover:right-[45vw] -bottom-[118px] inline-flex items-center h-0.5 w-[100vw] duration-1000 bg-white before:inline-block before:h-3 before:w-3 before:border-t-2 before:border-r-2 before:border-white before:rotate-45 before:absolute before:right-0"></span>
                    </a>
                    <a
                        href="/"
                        className="py-[18px] px-[50px] rounded-full bg-m-blue-green-gradient"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >Замовити демо</a>
                </div>

            </section >
            {/* Decore background circles */}
            {
                [1, 2, 3].map((item, index) => {
                    return (
                        <CircleDecoreIcon
                            key={item}
                            fillColor={GREEN_CIRCLE_COLOR}
                            width={190}
                            height={190}
                            className={`absolute -z-10 ${getCirclePosition(index, isHovered)}`}
                        />
                    )
                })
            }
        </div>
    )
}

function getCirclePosition(index: number, isHovered: boolean) {
    const circlePositions = [
        `${isHovered ? "rotate-0" : "rotate-90"}  left-[56px] ${isHovered ? "-bottom-[95px]" : "bottom-0"} duration-500`,
        `${isHovered ? "rotate-90" : "rotate-0"}  left-[40%]  ${isHovered ? "-top-[95px]" : "top-0"} duration-500`,
        `${isHovered ? "rotate-90" : "rotate-180"}  right-9  ${isHovered ? "-bottom-[95px]" : "bottom-0"} duration-500`,
    ];
    return circlePositions[index];
}

// SVG icons
function Arrow({ className, isHovered }: { className: string, isHovered: boolean }) {
    return (
        <svg width="43" height="70" viewBox="0 0 43 70" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M21.8325 68.8418L21.8322 1.1762M21.8322 1.1762L1.74768 21.3418M21.8322 1.1762L41.7477 21.3418" stroke={isHovered ? "#09022A" : "#F6F5F8"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="duration-500" />
        </svg>
    )
}