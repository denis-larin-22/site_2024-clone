'use client'

import { Accordion, AccordionItem } from "@nextui-org/react";
import DeliveyCardExemple from "../ui/DeliveyCardExemple";
import { openSansFont } from "../ui/fonts";
import { CircleDecoreIcon } from "../assets/icons";
import { useState } from "react";

export default function AccordionSection() {
    const accordionList = getAccordionList();
    const [currentIndex, setCurrentIndex] = useState(0);

    const getCurrentItems = () => {
        const start = currentIndex;
        const end = (currentIndex + 4) % accordionList.length;
        if (start < end) {
            return accordionList.slice(start, end);
        } else {
            return [...accordionList.slice(start), ...accordionList.slice(0, end)];
        }
    };

    const nextItems = () => {
        setCurrentIndex((currentIndex + 4) % accordionList.length);
    };

    return (
        <div className="bg-m-blue-dark text-white relative z-10">
            <section className="max-w-[1274px] px-4 pt-[69px] pb-16 min-h-[880px] mx-auto flex flex-col">
                <div className="flex justify-between mb-[72px]">
                    <h4 className="max-w-[460px] text-[53px] font-bold uppercase">Що таке Piramid Space?</h4>
                    <p className={`${openSansFont.className} max-w-[596px] text-xl`}>Piramid Space — це простір для дилерів та їх продавців, який забезпечує повний комплекс оптимізації вашого бізнесу від прийому замовлення в офісі до кінцевої доставки.</p>
                </div>
                <div className="flex">
                    <Accordion className="max-w-[634px]">
                        {getCurrentItems().map((item, index) => (
                            <AccordionItem
                                key={index}
                                aria-label={item.title}
                                title={item.title}
                                indicator={<AccordionIndicator />}
                                classNames={{
                                    base: "border-t-1 border-[#BFC1CA] p-0 text-xl",
                                    content: "pb-[30px] pt-0",
                                    trigger: "py-[30px] px-0",
                                    title: "text-white text-2xl font-bold",
                                }}
                            >
                                {item.text}
                            </AccordionItem>
                        ))}
                    </Accordion>
                    <div className="relative m-auto">
                        <DeliveyCardExemple />
                        <CircleDecoreIcon
                            fillColor="#07F7BA"
                            width={140}
                            height={140}
                            className="absolute -top-[20%] -right-[20%] -rotate-[135deg]"
                        />
                        <CircleDecoreIcon
                            fillColor="#07F7BA"
                            width={198}
                            height={198}
                            className="absolute -bottom-1/4 -left-1/4"
                        />
                    </div>
                </div>
                <div className="flex gap-x-10 mt-[60px]">
                    <button className="group active:scale-90" onClick={nextItems}>
                        <svg className="stroke-[#F6F5F8] group-hover:stroke-[#07F7BA] group-hover:scale-105 duration-250" width="50" height="33" viewBox="0 0 50 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 30.9005L26.0222 2.9104L48 30.9005" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                    <button className="group active:scale-90" onClick={nextItems}>
                        <svg className="stroke-[#F6F5F8] group-hover:stroke-[#07F7BA] group-hover:scale-105 duration-250" width="50" height="33" viewBox="0 0 50 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M48 2.91082L23.9778 30.9009L2 2.91082" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </section>
        </div>
    )
}

interface IAccordionItem {
    title: string,
    text: string
};

type AccordionList = IAccordionItem[];

function getAccordionList(): AccordionList {
    return [
        {
            title: "Точні дати готовності",
            text: "Ви завжди маєте актуальну інформацію про те, коли товари будуть готові до відправлення, навіть перед замовленням, що допомагає ефективно керувати очікуваннями клієнтів."
        },
        {
            title: "Прозорість на кожному етапі",
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae corrupti, maxime esse illum fugiat in veniam quod expedita nihil! Accusamus officia iste beatae explicabo quaerat voluptatum harum itaque nihil id?"
        },
        {
            title: "Розміщення замовлення напряму до виробництва",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat odio fugiat beatae in iure accusantium quibusdam deserunt fugit expedita, exercitationem vel omnis ipsa excepturi cupiditate laudantium repellendus natus magnam distinctio."
        },
        {
            title: "Онлайн калькулятор роздрібної ціни",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ipsa maxime iure eum voluptates porro architecto ullam quibusdam quam, quia eveniet quas facilis placeat tenetur laboriosam possimus eaque facere maiores."
        },
        {
            title: "Точні дати готовності2",
            text: "Ви завжди маєте актуальну інформацію про те, коли товари будуть готові до відправлення, навіть перед замовленням, що допомагає ефективно керувати очікуваннями клієнтів."
        },
        {
            title: "Прозорість на кожному етапі2",
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae corrupti, maxime esse illum fugiat in veniam quod expedita nihil! Accusamus officia iste beatae explicabo quaerat voluptatum harum itaque nihil id?"
        },
        {
            title: "Розміщення замовлення напряму до виробництва2",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat odio fugiat beatae in iure accusantium quibusdam deserunt fugit expedita, exercitationem vel omnis ipsa excepturi cupiditate laudantium repellendus natus magnam distinctio."
        },
        {
            title: "Онлайн калькулятор роздрібної ціни2",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ipsa maxime iure eum voluptates porro architecto ullam quibusdam quam, quia eveniet quas facilis placeat tenetur laboriosam possimus eaque facere maiores."
        }
    ]
}

function AccordionIndicator() {
    return (
        <svg width="21" height="12" viewBox="0 0 21 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-90">
            <path d="M19 2L10.2069 10L2 2" stroke="#07F7BA" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}