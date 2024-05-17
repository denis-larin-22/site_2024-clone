'use client'

import { useState } from "react";
import { DayNight, HorizontalBlinds, RollerBlinds, VerticalBlinds } from "../assets/blinds-icons";
import { PiramidFullLogo, PiramidIconLogo } from "../assets/piramid-logo-icons";

type NavList = Array<{ text: string, icon: JSX.Element }>

export default function Navigation() {
    const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
    const [activeIndex, setActiveIndex] = useState<number>(0);

    const list: NavList = [
        { text: "Рулонні штори", icon: <RollerBlinds /> },
        { text: "Вертикальні жазюзі", icon: <VerticalBlinds /> },
        { text: "Горизонтальні жазюзі", icon: <HorizontalBlinds /> },
        { text: "День-Ніч", icon: <DayNight /> }
    ];

    const handleClick = (index: number) => {
        setActiveIndex(index);
    };

    return (
        <aside className="relative bg-white max-w-[364px] h-screen py-[42px] pr-7 rounded-tr-[42px] rounded-br-[42px]">
            <div className=" flex items-center">
                {!isCollapsed ?
                    <PiramidFullLogo className="ml-[42px]" />
                    :
                    <PiramidIconLogo className="ml-[26px] mr-2" />
                }
                <button
                    className="inline-flex w-9 h-9 items-center justify-center absolute -right-4 bg-white rounded-full"
                    onClick={() => setIsCollapsed(!isCollapsed)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="18" viewBox="0 0 12 18" fill="none" className={isCollapsed ? "rotate-180" : ""}>
                        <path d="M10.0002 2L2.00008 9L10.0002 16" stroke="#1000E5" strokeWidth="2.81113" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>
            <nav className="pt-52 flex flex-col items-start gap-10">
                {list.map((item, index) => (
                    <button
                        key={index}
                        onClick={() => handleClick(index)}
                        className={`group relative w-fit text-start pl-10 flex items-center gap-5 text-xl font-bold duration-200 ${activeIndex === index ? ' text-t-blue before:inline-block before:h-[39px] before:w-[22px] before:bg-t-blue before:rounded-xl before:absolute before:-left-4' : 'text-t-gray hover:text-t-blue '}`}
                    >
                        <span className={`${activeIndex === index ? 'opacity-100 grayscale-0' : 'opacity-25 grayscale group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-110'} duration-200`}>
                            {item.icon}
                        </span>
                        {!isCollapsed &&
                            <span>
                                {item.text}
                            </span>}
                    </button>
                ))}
            </nav>
        </aside>
    )
}
