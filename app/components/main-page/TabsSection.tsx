'use client'

import { useState } from "react";
import { openSansFont } from "../ui/fonts";
import Image from "next/image";

export default function TabsSection() {
    const tabsList = getTabsList();
    const [selectedTab, setSelectedTab] = useState<ITabItem>(tabsList[0]);

    return (
        <section className="max-w-[1197px] px-4 mx-auto mt-[120px] mb-[100px] flex flex-col items-center ">
            <h4 className="text-[38px] font-bold">Працюйте розумніше, а не важче</h4>
            <ul className={`${openSansFont.className} w-fit mt-[60px] mb-[72px] pb-3 flex gap-x-7 text-xl border-b-3 border-[#D9D9D9]`}>
                {tabsList.map((item, index) => (
                    <li
                        key={index}
                        className={`relative px-1 cursor-pointer ${selectedTab.title === item.title ? "after:inline-block after:w-full after:h-[3px] after:absolute after:-bottom-[15px]  after:left-0 after:bg-t-blue after:z-10 after:rounded-2xl text-t-blue" : "text-[#A2A2A8]"} duration-500`}
                        onClick={() => setSelectedTab(item)}
                    >
                        {item.title}
                    </li>
                ))}
            </ul>
            <article className="flex items-start">
                <ul className="max-w-[714px] flex flex-col gap-y-[50px]">
                    {selectedTab.subtitles.map((item, index) => (
                        <li key={index}>
                            <p className="flex items-center gap-x-2.5 text-2xl font-bold mb-5">
                                {item.subtitle.icon && <span className="">{item.subtitle.icon}</span>}
                                {item.subtitle.text}
                            </p>
                            <p className={`${openSansFont.className} text-xl text-[#A2A2A8]`}>{item.text}</p>
                        </li>
                    ))}
                </ul>
                <Image
                    alt="Зображення tab-меню"
                    src={selectedTab.imagePath}
                    width={471}
                    height={450}
                    className="drop-shadow-2xl"
                />
            </article>
        </section>
    )
}

interface ITabItem {
    title: string,
    imagePath: string,
    subtitles: Array<{
        subtitle: {
            icon?: JSX.Element,
            text: string
        },
        text: string,
    }>
}

type TabsList = ITabItem[];

function getTabsList(): TabsList {
    return [
        {
            title: "Голова компанії",
            subtitles: [
                {
                    subtitle: {
                        icon: <svg width="35" height="29" viewBox="0 0 35 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1V27.4623H34" stroke="#1000E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <circle cx="8.16008" cy="20.3007" r="2.11321" stroke="#1000E5" strokeWidth="2" />
                            <circle cx="15.6318" cy="10.3398" r="2.11321" stroke="#1000E5" strokeWidth="2" />
                            <circle cx="23.7265" cy="15.9433" r="2.11321" stroke="#1000E5" strokeWidth="2" />
                            <circle cx="30.5761" cy="6.60344" r="2.11321" stroke="#1000E5" strokeWidth="2" />
                            <path d="M9.7168 18.1221L14.0753 12.5183M18.1225 11.5843L21.547 14.0749M25.5942 13.7636L29.33 9.09375" stroke="#1000E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>,
                        text: "Швидше досягай цілей продажів"
                    },
                    text: "Відстежуй поточні акції та бонуси від виробника через інформаційну панель, щоб приймати стратегічні рішення."
                },
                {
                    subtitle: {
                        icon: <svg width="39" height="32" viewBox="0 0 39 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.93152 21.1234L1 19.2143V11.3571L20.3738 3.85714V26.7143L15.7945 24.9416M5.93152 21.1234V26L15.7945 31V24.9416M5.93152 21.1234L15.7945 24.9416M24.9531 10.2857C25.8924 11.119 27.7006 13.4286 27.4188 16C27.137 18.5714 25.6576 19.9286 24.9531 20.2857M28.8278 5.64286C30.1194 6.83333 32.7026 10.4286 32.7026 15.2857C32.7026 20.1429 30.1194 23.5 28.8278 24.5714M31.9981 1C34.1116 2.54329 38.2682 7.56104 37.9864 15.2857C37.7046 23.0104 33.8768 28.0281 31.9981 29.5714" stroke="#1000E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        ,
                        text: "Завжди залишайтеся в курсі подій"
                    },
                    text: "Отримуйте щоденні звіти й аналітику щодо кількості сформованих замовлень, оцінюючи ефективність роботи кожного менеджера."
                },
                {
                    subtitle: {
                        icon: <svg width="35" height="39" viewBox="0 0 35 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.3972 7.35156V17.5017H26.6926M10.833 37.8021V27.0175L16.2253 31.4582L17.8112 28.6035C15.4851 26.5946 10.7695 22.5768 10.5158 22.5768C10.262 22.5768 4.0662 22.5768 1 22.5768V33.3614L3.53754 33.9958M3.53754 33.9958V26.3831M3.53754 33.9958V37.8021" stroke="#1000E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M6.0752 9.25529C7.76689 6.40055 12.8631 0.75452 19.7145 1.00827C28.2787 1.32547 34.3053 8.93787 33.9882 16.2333C33.671 23.5287 29.5475 29.2382 20.6661 30.8242" stroke="#1000E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <circle cx="7.02642" cy="16.5508" r="3.17193" stroke="#1000E5" strokeWidth="2" />
                        </svg>
                        ,
                        text: "Підвищення рівня задоволеності клієнтів"
                    },
                    text: "Надавайте клієнтам точну дату готовності і актуальну інформацію про статус їх замовлення, покращуючи прозорість і довіру."
                }
            ],
            imagePath: "/assets/images/tab-image-1.png"
        },
        {
            title: "Менеджер з продажу",
            subtitles: [
                {
                    subtitle: {
                        icon: <svg width="35" height="29" viewBox="0 0 35 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1V27.4623H34" stroke="#1000E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <circle cx="8.16008" cy="20.3007" r="2.11321" stroke="#1000E5" strokeWidth="2" />
                            <circle cx="15.6318" cy="10.3398" r="2.11321" stroke="#1000E5" strokeWidth="2" />
                            <circle cx="23.7265" cy="15.9433" r="2.11321" stroke="#1000E5" strokeWidth="2" />
                            <circle cx="30.5761" cy="6.60344" r="2.11321" stroke="#1000E5" strokeWidth="2" />
                            <path d="M9.7168 18.1221L14.0753 12.5183M18.1225 11.5843L21.547 14.0749M25.5942 13.7636L29.33 9.09375" stroke="#1000E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>,
                        text: "Швидше досягай цілей продажів"
                    },
                    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum id iure vero veniam hic odio, perferendis dolorem quia. Explicabo possimus quidem ab. Unde corrupti vel ea nemo rerum, hic culpa."
                },
                {
                    subtitle: {
                        icon: <svg width="39" height="32" viewBox="0 0 39 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.93152 21.1234L1 19.2143V11.3571L20.3738 3.85714V26.7143L15.7945 24.9416M5.93152 21.1234V26L15.7945 31V24.9416M5.93152 21.1234L15.7945 24.9416M24.9531 10.2857C25.8924 11.119 27.7006 13.4286 27.4188 16C27.137 18.5714 25.6576 19.9286 24.9531 20.2857M28.8278 5.64286C30.1194 6.83333 32.7026 10.4286 32.7026 15.2857C32.7026 20.1429 30.1194 23.5 28.8278 24.5714M31.9981 1C34.1116 2.54329 38.2682 7.56104 37.9864 15.2857C37.7046 23.0104 33.8768 28.0281 31.9981 29.5714" stroke="#1000E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        ,
                        text: "Завжди залишайтеся в курсі подій"
                    },
                    text: "Отримуйте щоденні звіти й аналітику щодо кількості сформованих замовлень, оцінюючи ефективність роботи кожного менеджера."
                },
                {
                    subtitle: {
                        icon: <svg width="35" height="39" viewBox="0 0 35 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.3972 7.35156V17.5017H26.6926M10.833 37.8021V27.0175L16.2253 31.4582L17.8112 28.6035C15.4851 26.5946 10.7695 22.5768 10.5158 22.5768C10.262 22.5768 4.0662 22.5768 1 22.5768V33.3614L3.53754 33.9958M3.53754 33.9958V26.3831M3.53754 33.9958V37.8021" stroke="#1000E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M6.0752 9.25529C7.76689 6.40055 12.8631 0.75452 19.7145 1.00827C28.2787 1.32547 34.3053 8.93787 33.9882 16.2333C33.671 23.5287 29.5475 29.2382 20.6661 30.8242" stroke="#1000E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <circle cx="7.02642" cy="16.5508" r="3.17193" stroke="#1000E5" strokeWidth="2" />
                        </svg>
                        ,
                        text: "Підвищення рівня задоволеності клієнтів"
                    },
                    text: "Надавайте клієнтам точну дату готовності і актуальну інформацію про статус їх замовлення, покращуючи прозорість і довіру."
                }
            ],
            imagePath: "/assets/images/tab-image-1.png"
        },
        {
            title: "Замірник",
            subtitles: [
                {
                    subtitle: {
                        icon: <svg width="35" height="29" viewBox="0 0 35 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1V27.4623H34" stroke="#1000E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <circle cx="8.16008" cy="20.3007" r="2.11321" stroke="#1000E5" strokeWidth="2" />
                            <circle cx="15.6318" cy="10.3398" r="2.11321" stroke="#1000E5" strokeWidth="2" />
                            <circle cx="23.7265" cy="15.9433" r="2.11321" stroke="#1000E5" strokeWidth="2" />
                            <circle cx="30.5761" cy="6.60344" r="2.11321" stroke="#1000E5" strokeWidth="2" />
                            <path d="M9.7168 18.1221L14.0753 12.5183M18.1225 11.5843L21.547 14.0749M25.5942 13.7636L29.33 9.09375" stroke="#1000E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>,
                        text: "Швидше досягай цілей продажів"
                    },
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, vero provident sunt accusantium minima optio repellat harum dolorum saepe ipsam aut ut vitae? Laudantium cumque sint assumenda. Qui, consectetur eius!"
                },
                {
                    subtitle: {
                        icon: <svg width="39" height="32" viewBox="0 0 39 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.93152 21.1234L1 19.2143V11.3571L20.3738 3.85714V26.7143L15.7945 24.9416M5.93152 21.1234V26L15.7945 31V24.9416M5.93152 21.1234L15.7945 24.9416M24.9531 10.2857C25.8924 11.119 27.7006 13.4286 27.4188 16C27.137 18.5714 25.6576 19.9286 24.9531 20.2857M28.8278 5.64286C30.1194 6.83333 32.7026 10.4286 32.7026 15.2857C32.7026 20.1429 30.1194 23.5 28.8278 24.5714M31.9981 1C34.1116 2.54329 38.2682 7.56104 37.9864 15.2857C37.7046 23.0104 33.8768 28.0281 31.9981 29.5714" stroke="#1000E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        ,
                        text: "Завжди залишайтеся в курсі подій"
                    },
                    text: "Отримуйте щоденні звіти й аналітику щодо кількості сформованих замовлень, оцінюючи ефективність роботи кожного менеджера."
                },
                {
                    subtitle: {
                        icon: <svg width="35" height="39" viewBox="0 0 35 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.3972 7.35156V17.5017H26.6926M10.833 37.8021V27.0175L16.2253 31.4582L17.8112 28.6035C15.4851 26.5946 10.7695 22.5768 10.5158 22.5768C10.262 22.5768 4.0662 22.5768 1 22.5768V33.3614L3.53754 33.9958M3.53754 33.9958V26.3831M3.53754 33.9958V37.8021" stroke="#1000E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M6.0752 9.25529C7.76689 6.40055 12.8631 0.75452 19.7145 1.00827C28.2787 1.32547 34.3053 8.93787 33.9882 16.2333C33.671 23.5287 29.5475 29.2382 20.6661 30.8242" stroke="#1000E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <circle cx="7.02642" cy="16.5508" r="3.17193" stroke="#1000E5" strokeWidth="2" />
                        </svg>
                        ,
                        text: "Підвищення рівня задоволеності клієнтів"
                    },
                    text: "Надавайте клієнтам точну дату готовності і актуальну інформацію про статус їх замовлення, покращуючи прозорість і довіру."
                }
            ],
            imagePath: "/assets/images/tab-image-1.png"
        },
        {
            title: "Бухгалтер",
            subtitles: [
                {
                    subtitle: {
                        icon: <svg width="35" height="29" viewBox="0 0 35 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1V27.4623H34" stroke="#1000E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <circle cx="8.16008" cy="20.3007" r="2.11321" stroke="#1000E5" strokeWidth="2" />
                            <circle cx="15.6318" cy="10.3398" r="2.11321" stroke="#1000E5" strokeWidth="2" />
                            <circle cx="23.7265" cy="15.9433" r="2.11321" stroke="#1000E5" strokeWidth="2" />
                            <circle cx="30.5761" cy="6.60344" r="2.11321" stroke="#1000E5" strokeWidth="2" />
                            <path d="M9.7168 18.1221L14.0753 12.5183M18.1225 11.5843L21.547 14.0749M25.5942 13.7636L29.33 9.09375" stroke="#1000E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>,
                        text: "Швидше досягай цілей продажів"
                    },
                    text: "Відстежуй поточні акції та бонуси від виробника через інформаційну панель, щоб приймати стратегічні рішення."
                },
                {
                    subtitle: {
                        icon: <svg width="39" height="32" viewBox="0 0 39 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.93152 21.1234L1 19.2143V11.3571L20.3738 3.85714V26.7143L15.7945 24.9416M5.93152 21.1234V26L15.7945 31V24.9416M5.93152 21.1234L15.7945 24.9416M24.9531 10.2857C25.8924 11.119 27.7006 13.4286 27.4188 16C27.137 18.5714 25.6576 19.9286 24.9531 20.2857M28.8278 5.64286C30.1194 6.83333 32.7026 10.4286 32.7026 15.2857C32.7026 20.1429 30.1194 23.5 28.8278 24.5714M31.9981 1C34.1116 2.54329 38.2682 7.56104 37.9864 15.2857C37.7046 23.0104 33.8768 28.0281 31.9981 29.5714" stroke="#1000E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        ,
                        text: "Завжди залишайтеся в курсі подій"
                    },
                    text: "Отримуйте щоденні звіти й аналітику щодо кількості сформованих замовлень, оцінюючи ефективність роботи кожного менеджера."
                },
                {
                    subtitle: {
                        icon: <svg width="35" height="39" viewBox="0 0 35 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.3972 7.35156V17.5017H26.6926M10.833 37.8021V27.0175L16.2253 31.4582L17.8112 28.6035C15.4851 26.5946 10.7695 22.5768 10.5158 22.5768C10.262 22.5768 4.0662 22.5768 1 22.5768V33.3614L3.53754 33.9958M3.53754 33.9958V26.3831M3.53754 33.9958V37.8021" stroke="#1000E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M6.0752 9.25529C7.76689 6.40055 12.8631 0.75452 19.7145 1.00827C28.2787 1.32547 34.3053 8.93787 33.9882 16.2333C33.671 23.5287 29.5475 29.2382 20.6661 30.8242" stroke="#1000E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <circle cx="7.02642" cy="16.5508" r="3.17193" stroke="#1000E5" strokeWidth="2" />
                        </svg>
                        ,
                        text: "Підвищення рівня задоволеності клієнтів"
                    },
                    text: "Надавайте клієнтам точну дату готовності і актуальну інформацію про статус їх замовлення, покращуючи прозорість і довіру."
                }
            ],
            imagePath: "/assets/images/tab-image-1.png"
        },
        {
            title: "Менеджер із закупівель",
            subtitles: [
                {
                    subtitle: {
                        icon: <svg width="35" height="29" viewBox="0 0 35 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1V27.4623H34" stroke="#1000E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <circle cx="8.16008" cy="20.3007" r="2.11321" stroke="#1000E5" strokeWidth="2" />
                            <circle cx="15.6318" cy="10.3398" r="2.11321" stroke="#1000E5" strokeWidth="2" />
                            <circle cx="23.7265" cy="15.9433" r="2.11321" stroke="#1000E5" strokeWidth="2" />
                            <circle cx="30.5761" cy="6.60344" r="2.11321" stroke="#1000E5" strokeWidth="2" />
                            <path d="M9.7168 18.1221L14.0753 12.5183M18.1225 11.5843L21.547 14.0749M25.5942 13.7636L29.33 9.09375" stroke="#1000E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>,
                        text: "Швидше досягай цілей продажів"
                    },
                    text: "Відстежуй поточні акції та бонуси від виробника через інформаційну панель, щоб приймати стратегічні рішення."
                },
                {
                    subtitle: {
                        icon: <svg width="39" height="32" viewBox="0 0 39 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.93152 21.1234L1 19.2143V11.3571L20.3738 3.85714V26.7143L15.7945 24.9416M5.93152 21.1234V26L15.7945 31V24.9416M5.93152 21.1234L15.7945 24.9416M24.9531 10.2857C25.8924 11.119 27.7006 13.4286 27.4188 16C27.137 18.5714 25.6576 19.9286 24.9531 20.2857M28.8278 5.64286C30.1194 6.83333 32.7026 10.4286 32.7026 15.2857C32.7026 20.1429 30.1194 23.5 28.8278 24.5714M31.9981 1C34.1116 2.54329 38.2682 7.56104 37.9864 15.2857C37.7046 23.0104 33.8768 28.0281 31.9981 29.5714" stroke="#1000E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        ,
                        text: "Завжди залишайтеся в курсі подій"
                    },
                    text: "Отримуйте щоденні звіти й аналітику щодо кількості сформованих замовлень, оцінюючи ефективність роботи кожного менеджера."
                },
                {
                    subtitle: {
                        icon: <svg width="35" height="39" viewBox="0 0 35 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.3972 7.35156V17.5017H26.6926M10.833 37.8021V27.0175L16.2253 31.4582L17.8112 28.6035C15.4851 26.5946 10.7695 22.5768 10.5158 22.5768C10.262 22.5768 4.0662 22.5768 1 22.5768V33.3614L3.53754 33.9958M3.53754 33.9958V26.3831M3.53754 33.9958V37.8021" stroke="#1000E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M6.0752 9.25529C7.76689 6.40055 12.8631 0.75452 19.7145 1.00827C28.2787 1.32547 34.3053 8.93787 33.9882 16.2333C33.671 23.5287 29.5475 29.2382 20.6661 30.8242" stroke="#1000E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <circle cx="7.02642" cy="16.5508" r="3.17193" stroke="#1000E5" strokeWidth="2" />
                        </svg>
                        ,
                        text: "Підвищення рівня задоволеності клієнтів"
                    },
                    text: "Надавайте клієнтам точну дату готовності і актуальну інформацію про статус їх замовлення, покращуючи прозорість і довіру."
                }
            ],
            imagePath: "/assets/images/tab-image-1.png"
        },
    ]
}