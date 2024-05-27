'use client'

import { Modal, ModalContent, ModalBody, useDisclosure } from "@nextui-org/modal";
import { useState } from "react";
import Image from "next/image";
import { openSansFont } from "../ui/fonts";
import { ICatalogItem } from "./catalog-list";
import { CloseButton, CoinIcon, FireIcon, ZoomIcon } from "../assets/icons";

interface IProps {
    catalogItem: ICatalogItem
}

export default function CatalogItem({ catalogItem }: IProps) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const { isOpen: isZoomed, onOpen: onZoomed, onOpenChange: onZoomedChange } = useDisclosure();
    // Catalog item properties
    const { availableColors, collection, composition, fabricTexture, guarantee, isInStock, maxWidth, name, opacity, originCountry, type, waterproofnessLevel, priceCategory, label, cashback, specialOffer } = catalogItem;
    // Default card image (first image from available ones)
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

    // Additional styles
    const roundingExternalCorners = "before:inline-block before:w-6 before:h-6 before:absolute before:bottom-[85%] before:right-[-3px] before:rounded-br-xl before:border-r-4 before:border-b-4 before:border-t-pale after:inline-block after:w-6 after:h-6 after:absolute after:top-[82%] after:right-[-5px] after:rounded-tr-2xl after:border-r-5 after:border-t-5 after:border-t-pale"

    return (
        <>
            <button
                onClick={onOpen}
                className="group relative inline-flex max-w-[282px] h-[381px] rounded-xl overflow-hidden hover:ring-4 ring-offset-4 ring-t-blue/50 duration-400"
            >
                <Image
                    alt={`Фото ${type} ${collection}`}
                    src={availableColors[0]}
                    width={282}
                    height={381}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 duration-150"
                />
                {/* Price category field*/}
                <p className={`${openSansFont.className} px-[14px] py-1 bg-t-pale absolute top-4 right-0 text-sm font-medium text-t-blue-dark rounded-tl-full rounded-bl-full ${roundingExternalCorners}`}>{priceCategory}</p>
                {/* Product info field*/}
                <div className={`absolute bottom-[11px] left-[11px] right-[11px] rounded-xl p-3 pt-2 ${label === "Тканина тижня" ? "bg-t-blue" : "bg-white"} flex flex-col items-start group-hover:shadow-xl duration-150`}>
                    {/* Collection name field*/}
                    <p className={`mb-1 ${openSansFont.className} uppercase text-xs  ${label === "Тканина тижня" ? "text-white" : "text-t-gray-text"}`}>{collection}</p>
                    {/* Product name field*/}
                    <p className={`mb-[18px] text-xl font-bold ${label === "Тканина тижня" ? "text-white" : "text-t-blue-dark"}`}>{name}</p>
                    {/* Cashback field (by condition)*/}
                    {cashback === undefined ? null : <p className="absolute top-2 right-3">
                        <CoinIcon />
                        {cashback}
                    </p>}
                    {/* Special Offer field (by condition)*/}
                    {specialOffer === undefined ? null : <p className="w-[113px] py-1 px-3 absolute -top-8 right-0 flex items-center justify-end text-xs font-bold text-[#F79D15] bg-[#FFEFD1] rounded-full">
                        <FireIcon className="absolute left-[6px] bottom-1" />
                        {specialOffer}
                    </p>}
                    {/* isInStock and label info fields*/}
                    <div className="w-full flex items-center justify-between">
                        <p className={`w-fit h-[25px]  px-[10px] pt-[2px] rounded-full bg-white ${openSansFont.className} text-sm ${isInStock === "в наявності" ? "text-t-green" : "text-[#FF4242]"}`}>{isInStock}</p>
                        {label === "Новинка" ?
                            <p className="h-[25px] px-[10px] py-1 rounded-full text-xs font-bold w-fit text-white bg-t-blue">{label}</p> // new product
                            :
                            label === "Розпродаж" ?
                                <p className="h-[25px] px-[10px] py-1 rounded-full text-xs text-[#F79D15] font-bold w-fit bg-[#FFEFD1]">{label}</p> // sales
                                :
                                <p className="h-[25px] px-[10px] py-1 rounded-full text-xs text-t-blue font-bold w-fit bg-[#DDE8FF]">{label}</p> // product of the week
                        }
                    </div>
                </div>
            </button>

            <Modal
                backdrop="opaque"
                classNames={{
                    base: "relative max-w-[1189px] h-fit p-10",
                    body: "p-0"
                }}
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                scrollBehavior="outside"
                hideCloseButton
            >
                <ModalContent>
                    {(onClose) => (
                        <ModalBody>
                            <article className="flex flex-col box-border">
                                <div className="flex gap-14">
                                    <div className="w-full relative">
                                        <Image
                                            alt={`Фото ${type} ${collection}`}
                                            src={selectedColor}
                                            width={514}
                                            height={496}
                                            loading="lazy"
                                            className="rounded-2xl w-[514px] h-[496px] object-cover"
                                        />
                                        <button
                                            className="w-[78px] h-[78px] bg-white rounded-full flex items-center justify-center absolute right-7 bottom-[14px]"
                                            onClick={onZoomed}
                                        >
                                            <ZoomIcon />
                                        </button>
                                        <Modal isOpen={isZoomed} onOpenChange={onZoomedChange} size="3xl">
                                            <ModalContent>
                                                {() => (
                                                    <Image
                                                        alt={`Фото ${type} ${collection}`}
                                                        src={selectedColor}
                                                        width={1198}
                                                        height={750}
                                                        loading="lazy"
                                                        className="object-cover"
                                                    />
                                                )}
                                            </ModalContent>
                                        </Modal>
                                    </div>

                                    <div className="w-full">
                                        <CloseButton className="absolute top-3 right-3" btnHandler={onClose} />
                                        <div className="h-full flex flex-col justify-between">
                                            <div>
                                                <h4 className="text-5xl font-bold text-[#10005B]">{name}</h4>
                                                <div className={`${openSansFont.className} text-lg flex justify-between mt-[18px] mb-6`}>
                                                    <p className="text-t-gray-text">{type}</p>

                                                    {isInStock === "в наявності" ?
                                                        <p className="text-t-green">{isInStock}</p>
                                                        :
                                                        <p className="text-[#FF0A0A]">{isInStock}</p>
                                                    }
                                                </div>
                                                {/* <div className="font-medium leading-none flex gap-[14px]">
                                                    <p className="w-fit py-1 px-[18px] rounded-3xl bg-[#DDE8FF] text-[#0A3EDE]">{isNew && "Новинка"}</p>
                                                    <p className="w-fit py-1 px-[18px] rounded-3xl bg-[#FFEFD1] text-[#FFB800]">{isPromotion && "Акція"}</p>
                                                </div> */}
                                            </div>

                                            <div>
                                                <p className={`${openSansFont.className} text-lg text-[#10005B] mb-[22px]`}>Тканина доступна в цих кольорах</p>
                                                <ul className="flex gap-[10px]">
                                                    {availableColors.map((color, index) => (
                                                        <li
                                                            key={index}
                                                            className={`border-2 border-transparent hover:ring-2 ring-offset-1 ring-t-blue/70 rounded-md cursor-pointer duration-200 ${selectedColor === color && 'border-[#10005B]'}`}
                                                            onClick={() => {
                                                                setSelectedColor(color);
                                                            }}
                                                        >
                                                            <Image
                                                                alt={`Зображення доступного кольору для ${name}`}
                                                                src={color}
                                                                width={68}
                                                                height={66}
                                                                loading="lazy"
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
                                        {technicalInformation.map((infoItem, index) => (
                                            <li key={index}>
                                                <p className="text-t-blue-dark">{infoItem.item}</p>
                                                <p className="text-base text-t-gray-text">{infoItem.info}</p>
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