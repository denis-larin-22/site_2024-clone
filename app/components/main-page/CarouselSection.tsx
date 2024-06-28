'use client'

import Image from "next/image";
import { useRef, useState } from "react";
import { openSansFont } from "../ui/fonts";
import { motion, useInView } from "framer-motion";

export default function CarouselSection() {
    const TOTAL_ITEM_WIDTH = 275; // Width of one element card
    const VISIBLE_WIDTH = 768; // Visible container width (max-width)

    const carouselList = getCarouselCardList();
    // Shift row right/left
    const [blockOffset, setBlockOffset] = useState<number>(25) //Step of moving a row of cards
    const handleBlockOffsetChange = (direction: 'left' | 'right') => {
        const totalWidth = TOTAL_ITEM_WIDTH * carouselList.length; // Total width all elements
        const maxOffset = -(totalWidth - VISIBLE_WIDTH) / VISIBLE_WIDTH * 100; // Maximum percentage offset

        if (direction === 'left') {
            (blockOffset >= 25) ?
                setBlockOffset(25)
                :
                setBlockOffset(blockOffset + 20)
        } else if (direction === 'right') {
            (blockOffset <= maxOffset) ?
                setBlockOffset(blockOffset)
                :
                setBlockOffset(blockOffset - 20);
        }
    };
    //  Animation of the appearance of card elements
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div className="overflow-hidden">
            <section className="max-w-[1272px] mx-auto my-[127px] px-4">
                <p className="max-w-[685px] text-[38px] font-bold uppercase">Дослідіть широкий вибір наших віконних рішень</p>
                <div className="h-full mt-[100px] flex items-center">
                    <div className="relative z-20 flex items-center gap-x-16 bg-t-pale p-10 rounded-2xl">
                        <button
                            className="hover:scale-125 duration-150 active:scale-90"
                            onClick={() => handleBlockOffsetChange('left')}
                        >
                            <ArrowLeft />
                        </button>
                        <button
                            className="hover:scale-125 duration-150 active:scale-90"
                            onClick={() => handleBlockOffsetChange('right')}
                        >
                            <ArrowRight />
                        </button>
                    </div>
                    <ul
                        ref={ref}
                        className={`relative flex gap-x-5 duration-500 ease-in-out`}
                        style={{ left: blockOffset + '%' }}
                    >
                        {carouselList.map((item, index) => (
                            <motion.li
                                key={index}
                                className="group relative flex-shrink-0 flex-grow-0 rounded-[14px]"
                                style={getAnimInView(isInView, index)}
                            >
                                <Image
                                    alt={`Зображення для ${item.title}`}
                                    src={item.imagePath}
                                    width={TOTAL_ITEM_WIDTH}
                                    height={409}
                                    className="object-cover"
                                />
                                <p
                                    style={{
                                        opacity: isInView ? "100" : "0",
                                        transition: "opacity 1s 1.5s, bottom 0.3s"
                                    }}
                                    className={`${openSansFont.className} absolute z-10 -bottom-9 group-hover:bottom-1/2 duration-250 left-1/2 -translate-x-1/2 mt-2.5 text-center text-xl group-hover:text-[#F6F5F8] text-m-blue-dark whitespace-nowrap`}
                                >{item.title}</p>
                                {/* Open link */}
                                <div className="absolute z-10 opacity-0 group-hover:opacity-100 -bottom-[5%] group-hover:-bottom-[3%] -right-[7%] group-hover:-right-[5%] duration-250">
                                    <DecorSpot />
                                    <a href="/" className="absolute bottom-[32%] right-[26%] -rotate-45 group-hover:rotate-0 duration-250 inline-flex items-center justify-center h-12 w-12 rounded-full bg-t-blue cursor-pointer">
                                        <Arrow />
                                    </a>
                                </div>
                                {/* Blue glass effect */}
                                <div
                                    style={{
                                        background: isInView ? "transparent" : "#1000E5",
                                        transition: "all 1s 1.5s"
                                    }}
                                    className="rounded-[14px] absolute top-0 bottom-0 left-0 right-0 overflow-hidden after:block after:w-full after:h-full after:top-0 after:left-0 after:bg-t-blue after:bg-opacity-0 group-hover:after:bg-opacity-50 after:duration-250"
                                ></div>
                            </motion.li>
                        ))}
                    </ul>
                </div>
            </section >
        </div>
    )
}

// Carousel list for cards
interface ICarouselCardItem {
    title: string,
    imagePath: string
}

function getCarouselCardList(): ICarouselCardItem[] {
    return [
        {
            title: "Рулонні штори",
            imagePath: "/assets/images/Рулонні-штори.png"
        },
        {
            title: "День-ніч",
            imagePath: "/assets/images/День-ніч.png"
        },
        {
            title: "Горизонтальні жалюзі",
            imagePath: "/assets/images/Горизонтальні-жалюзі.png"
        },
        {
            title: "Вертикальні жалюзі",
            imagePath: "/assets/images/Вертикальні-жалюзі.png"
        }
    ]
}

// Get spawn animation for each card
function getAnimInView(isInView: boolean, elementIndex: number) {
    const transition = "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
    const styles = [
        {
            rotate: isInView ? 0 : 45,
            bottom: isInView ? 0 : '-300px',
            left: isInView ? 0 : '-300px',
            transition,
        },
        {
            rotate: isInView ? 0 : -30,
            top: isInView ? 0 : '-200px',
            transition
        },
        {
            rotate: isInView ? 0 : 50,
            right: isInView ? 0 : '-200px',
            top: isInView ? 0 : '-500px',
            transition
        },
        {
            rotate: isInView ? 0 : -45,
            bottom: isInView ? 0 : '-200px',
            left: isInView ? 0 : '-200px',
            transition
        }
    ];

    if (elementIndex <= 3) {
        return styles[elementIndex];
    } else {
        return styles[Math.floor(Math.random() * 3) + 0] //Random index animation from 0 to 3
    }
};

// Component SVG icons
function ArrowLeft() {
    return (
        <svg width="31" height="49" viewBox="0 0 31 49" fill="none" xmlns="http://www.w3.org/2000/svg" className="group">
            <path className="group-hover:stroke-t-blue duration-150" d="M29 47L2 25.6667L29 2" stroke="#09022A" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}
function ArrowRight() {
    return (
        <svg width="32" height="50" viewBox="0 0 32 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="group">
            <path className="group-hover:stroke-t-blue duration-150" d="M2 48L30 26.1926L2 2" stroke="#09022A" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}
function DecorSpot() {
    return (
        <svg width="89" height="102" viewBox="0 0 89 102" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M75.3286 1.0594C75.3286 -10.3319 98.4557 73.4551 82.8659 93.5429C67.3933 113.48 -13.0526 89.5597 1.82677 89.5596C30.9903 89.5594 16.6772 73.375 10.2541 53.9673C3.83098 34.5596 18.7612 14.0596 37.8262 14.0596C56.8911 14.0596 75.9238 22.6478 75.3286 1.0594Z" fill="#F6F5F8" />
        </svg>
    )
}
function Arrow() {
    return (
        <svg width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.4565 19.7035L13.2742 1.14709M13.2742 1.14709L4.45319 3.82839M13.2742 1.14709L14.9966 10.543" stroke="#F6F5F8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}
