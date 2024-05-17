'use client'

import { Modal, ModalContent, ModalBody, useDisclosure } from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import { useState } from "react";
import { ICatalogItem } from "./CatalogList";
import Image from "next/image";
import { openSansFont } from "../ui/fonts";

interface IProps {
    catalogItem: ICatalogItem
}

export default function CatalogItem({ catalogItem }: IProps) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const { availableColors, collection, composition, fabricTexture, guarantee, isInStock, isNew, isPromotion, maxWidth, name, opacity, originCountry, type, waterproofnessLevel, } = catalogItem;

    const [selectedColor, setSelectedColor] = useState<string>(availableColors[0])

    const technicalInformation = [
        { item: "Застосування", info: type },
        { item: "Колекція", info: collection },
        { item: "Склад", info: composition },
        { item: "Фактура тканини", info: fabricTexture },
        { item: "Непрозорість", info: opacity },
        { item: "Максимальна ширина", info: maxWidth },
        { item: "Рівень водонепроникності", info: waterproofnessLevel },
        { item: "Гарантія на готовий виріб", info: guarantee },
        { item: "Країна походження", info: originCountry },
    ];

    return (
        <>
            <button
                onClick={onOpen}
                className="inline-flex w-fit h-fit flex-col items-start p-0"
            >
                <Image
                    alt={`Фото ${type} ${collection}`}
                    src={availableColors[0]}
                    width={282}
                    height={272}
                    className="w-[282px] h-[272px] rounded-xl object-cover mb-[14px]"
                />
                <p className="text-xl font-bold text-[#0E0050]">{name}</p>
                <p className="text-[#1EBF91]">в наявності</p>
            </button>
            <Modal
                backdrop="opaque"
                className=""
                classNames={{
                    base: "relative max-w-[1189px] p-10",
                    body: "p-0"
                }}
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                scrollBehavior="outside"
                hideCloseButton
            >
                <ModalContent>
                    {(onClose) => (
                        <ModalBody >
                            <article className="flex flex-col">
                                <div className="flex gap-14">
                                    <Image
                                        alt={`Фото ${type} ${collection}`}
                                        src={selectedColor}
                                        width={514}
                                        height={496}
                                        className="rounded-2xl w-[514px] h-[496px] object-cover"
                                    />
                                    <div className="w-full">
                                        <CloseButton className="absolute top-3 right-3" btnHandler={onClose} />
                                        <div className="h-full flex flex-col justify-between">
                                            <div className="">
                                                <h4 className="text-5xl font-bold text-[#10005B]">{name}</h4>
                                                <div className={`${openSansFont.className} text-lg flex justify-between mt-[18px] mb-6`}>
                                                    <p className="text-[#B3B5BE]">{type}</p>
                                                    <p className="text-[#1EBF91]">{isInStock} в наявності</p>
                                                </div>
                                                <div className="font-medium leading-none flex gap-[14px]">
                                                    <p className="w-fit py-1 px-[18px] rounded-3xl bg-[#DDE8FF] text-[#0A3EDE]">{isNew && "Новинка"}</p>
                                                    <p className="w-fit py-1 px-[18px] rounded-3xl bg-[#FFEFD1] text-[#FFB800]">{isPromotion && "Акція"}</p>
                                                </div>
                                            </div>

                                            <div className="">
                                                <p className={`${openSansFont.className} text-lg text-[#10005B] mb-[22px]`}>Тканина доступна в цих кольорах</p>
                                                <ul className="flex gap-[10px]">
                                                    {availableColors.map((color, index) => (
                                                        <li
                                                            key={index}
                                                            className="border-2 border-transparent hover:border-[#10005B] rounded-md cursor-pointer duration-200"
                                                            onClick={() => {
                                                                setSelectedColor(color);
                                                            }}
                                                        >
                                                            <Image
                                                                alt={`Зображення доступного кольору для ${name}`}
                                                                src={color}
                                                                width={68}
                                                                height={66}
                                                                className="rounded-md"
                                                            />
                                                        </li>
                                                    ))}
                                                </ul>
                                                {/* Optional soon */}
                                                {/* <div className="">
                                                <button className="bg-t-blue-green-gradient">Порахувати</button>
                                                <Button>+</Button>
                                            </div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-9">
                                    <p className="mb-5 text-2xl text-[#10005B] after:inline-block after:mt-5 after:h-[1px] after:w-full after:bg-[#E5E5E5]">Технічна інформація</p>

                                    <ul className={`${openSansFont.className} text-lg grid grid-cols-3 grid-rows-3 justify-between gap-y-9`}>
                                        {technicalInformation.map((item, index) => (
                                            <li className="">
                                                <p className="text-[#0E0050]">{item.item}</p>
                                                <p className="text-base text-[#B3B5BE]">{item.info}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </article>
                        </ModalBody>
                    )}
                </ModalContent>
            </Modal >
        </>
    )
}

function CloseButton({ className, btnHandler }: { className?: string, btnHandler: () => void }) {
    return (
        <button className={`w-fit h-fit ${className}`} onClick={btnHandler}>
            <svg width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M39.1641 13.0544L13.0551 39.1634" stroke="#10005B" strokeWidth="4" strokeLinecap="round" />
                <path d="M39.1641 39.1636L13.0551 13.0546" stroke="#10005B" strokeWidth="4" strokeLinecap="round" />
            </svg>
        </button>
    )
}