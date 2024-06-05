'use client'

import Image from "next/image";
import { ICatalogItem } from "./catalog-list";
import { useState } from "react";
import { openSansFont } from "../ui/fonts";
import { FireIcon } from "../assets/icons";

interface IProps {
    catalogItem: ICatalogItem,
    onModalCloseHandler: () => void
}

export function ModalTablet({ catalogItem, onModalCloseHandler }: IProps) {
    // Catalog item properties
    const { availableColors, collection, composition, fabricTexture, guarantee, isInStock, maxWidth, name, opacity, originCountry, type, waterproofnessLevel, priceCategory, label, cashback, specialOffer } = catalogItem;
    // Default card image (first image from available ones)
    const [selectedColor, setSelectedColor] = useState<string>(availableColors[0]);

    const technicalInformation = [
        { item: "Затемнення", info: opacity },
        { item: "Водостійкість", info: waterproofnessLevel },
        { item: "Фактура тканини", info: fabricTexture },
        { item: "Склад", info: composition },
        { item: "Гарантія", info: guarantee },
        { item: "Ширина рулону", info: maxWidth }
    ];

    return (
        <>
            <CloseArrowButton btnHandler={onModalCloseHandler} className="absolute left-10 top-12" />

            <Image
                src={selectedColor}
                alt={`Фото варінта тканини для ${name}`}
                width={1024}
                height={1366}
                className="absolute -z-20 top-0 left-0 w-full h-full object-cover"
            />

            <div className="absolute bottom-0 left-0 right-0 p-9">
                <ul className="flex gap-2.5">
                    {availableColors.map((color, index) => (
                        <li
                            key={index}
                            onClick={() => {
                                setSelectedColor(color);
                            }}
                        >
                            <Image
                                src={color}
                                alt="Варіант тканини"
                                width={47}
                                height={46}
                                loading="lazy"
                                className={`cursor-pointer rounded-md hover:ring-1 ring-[#10005B] duration-150 ${selectedColor === color ? "ring-1" : ""}`}
                            />
                        </li>
                    ))}
                </ul>

                <section className="p-10 mt-5 rounded-2xl bg-[#FAFAFA] text-t-blue-dark">
                    <div>
                        <div className={`${openSansFont.className} flex items-center justify-between`}>
                            <p className="text-[#AEB1BA] text-xs">{type.toUpperCase()} <span className="text-t-blue-dark">/</span> {collection.toUpperCase()}</p>
                            <p className={`${isInStock === "в наявності" ? "text-t-green" : "text-[#FF4242]"}`}>{isInStock}</p>
                        </div>
                        <h5 className="text-[32px] mt-3 mb-8">{name}</h5>
                        <div className="w-full flex items-center justify-between">
                            <div className="flex items-center gap-[15px]">
                                {specialOffer === undefined ? null : <p className="relative w-[113px] py-1 px-3 flex items-center justify-end text-xs font-bold text-[#F79D15] bg-[#FFEFD1] rounded-full">
                                    <FireIcon className="absolute left-[6px] bottom-1" />
                                    {specialOffer}
                                </p>}
                                <p className={`h-[25px] w-fit px-[14px] py-1 rounded-full text-[12px] font-bold  ${label === "Новинка" ?
                                    "text-white bg-t-blue"
                                    :
                                    label === "Розпродаж" ? "text-[#F79D15] bg-[#FFEFD1]" : "text-t-blue bg-[#DDE8FF]"}`
                                }>
                                    {label}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={`${openSansFont.className} text-lg font-normal mt-11`}>
                        <p className="inline-block w-full pb-5 mb-5 border-b-1 border-[#DDE0E9]">Технічна інформація</p>

                        <ul className="text-lg grid grid-cols-2 sm:grid-cols-3 gap-x-2 gap-y-[30px]">
                            {technicalInformation.map((infoItem, index) => (
                                <li key={index}>
                                    <p>{infoItem.item}</p>
                                    <p className="mt-1 text-sm text-[#AEB1BA]">{infoItem.info}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
            </div>
        </>
    )
}

function CloseArrowButton({ className, btnHandler }: { className?: string, iconColor?: string, btnHandler: () => void }) {
    return (
        <button className={`px-4 py-1 bg-t-blue rounded-2xl max-w-fit flex items-center gap-x-[13px] text-white ${className}`} onClick={btnHandler}>
            <svg width="24" height="19" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.9995 9.48293L0.998356 9.48468M0.998356 9.48468L8.77653 17.2629M0.998356 9.48468L8.77653 1.70651" stroke="#F6F5F8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="">Назад</span>
        </button>
    )
}