'use client'

import { useCallback, useEffect, useState } from "react";
import { DayNight, HorizontalBlinds, RollerBlinds, VerticalBlinds } from "../assets/icons";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

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

    const handleResize = useCallback(() => {
        if (window.innerWidth <= 1366 && window.innerWidth > 450) {
            console.log('worked!');

            setIsCollapsed(true);
        }
    }, []);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        handleResize(); // Initial check

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [handleResize]);

    const handleClick = (index: number) => {
        setActiveIndex(index);
    };

    return (
        <>
            {/* Desktop, tablet versions */}
            <aside className={`hidden mobile:block relative bg-[#FAFAFA] ${isCollapsed ? 'max-w-[121px] pr-6' : 'max-w-[343px] pr-5'}  h-screen py-[42px] pl-6 rounded-tr-[42px] rounded-br-[42px] duration-500`}>
                <div className="flex items-center">
                    <Link href={"/"}>
                        {isCollapsed ?
                            <Image
                                alt="Piramid logo"
                                src={"/assets/images/logo.svg"}
                                width={57}
                                height={36}
                            />
                            :
                            <Image
                                alt="Piramid logo"
                                src={"/assets/images/full_logo.svg"}
                                width={203}
                                height={36}
                                className="hidden tablet:inline ml-[18px] self-start"
                            />
                        }
                    </Link>
                    <button
                        className="hidden tablet:inline-flex w-9 h-9 items-center justify-center absolute -right-4 bg-white rounded-full"
                        onClick={() => setIsCollapsed(!isCollapsed)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="18" viewBox="0 0 12 18" fill="none" className={isCollapsed ? "rotate-180" : ""}>
                            <path d="M10.0002 2L2.00008 9L10.0002 16" stroke="#1000E5" strokeWidth="2.81113" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
                <nav className="mt-52 flex flex-col items-start">
                    {list.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => handleClick(index)}
                            className={`group relative h-[60px] w-full p-[15px] rounded-xl text-lg font-bold ${activeIndex === index ? 'text-t-blue bg-white' : 'text-t-gray-text hover:text-t-blue'} flex items-center gap-x-[14px] hover:bg-white duration-150`}
                        >
                            <span className={activeIndex === index ? 'absolute top-1/2 -left-10 -translate-y-1/2 inline-block w-[22px] h-[39px] rounded-xl bg-t-blue' : 'hidden'}></span>
                            <span className={`${activeIndex === index ? 'opacity-100 grayscale-0' : 'opacity-35 grayscale group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-110'} duration-200`}>
                                {item.icon}
                            </span>
                            <AnimatePresence>
                                {!isCollapsed &&
                                    <motion.span
                                        initial={{ opacity: 0, x: '-25px' }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: '-10px' }}
                                        className="hidden tablet:inline whitespace-nowrap"
                                    >
                                        {item.text}
                                    </motion.span>}
                            </AnimatePresence>
                        </button>
                    ))}
                </nav>
            </aside >

            {/* Mobile version */}
            <aside className="block mobile:hidden h-24 absolute z-30 bottom-0 right-0 left-0 bg-[#FAFAFA] overflow-hidden">
                <nav className="h-full flex items-center justify-center gap-x-10">
                    {list.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => handleClick(index)}
                            className="group relative w-8 h-8 rounded-xl flex flex-col items-center"
                        >
                            <span className={activeIndex === index ? 'absolute -top-9 inline-block w-[29px] h-[10px] rounded-xl bg-t-blue' : 'hidden'}></span>
                            <span className={`${activeIndex === index ? 'opacity-100 grayscale-0' : 'opacity-35 grayscale'} duration-200`}>
                                {item.icon}
                            </span>
                        </button>
                    ))}
                </nav>
            </aside>
        </>
    )
}
