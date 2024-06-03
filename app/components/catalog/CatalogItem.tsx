'use client'

import { Modal, ModalContent, ModalBody, useDisclosure } from "@nextui-org/modal";
import { useState } from "react";
import Image from "next/image";
import { openSansFont } from "../ui/fonts";
import { ICatalogItem } from "./catalog-list";
import { CoinIcon, FireIcon, ZoomIcon } from "../assets/icons";

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
        { item: "Затемнення", info: opacity },
        { item: "Водостійкість", info: waterproofnessLevel },
        { item: "Фактура тканини", info: fabricTexture },
        { item: "Склад", info: composition },
        { item: "Гарантія", info: guarantee },
        { item: "Ширина рулону", info: maxWidth }
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
                <p className={`${openSansFont.className} px-[14px] py-1 bg-t-pale absolute top-4 right-0 text-sm text-t-blue-dark rounded-tl-full rounded-bl-full ${roundingExternalCorners}`}>{priceCategory}</p>
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
                    {specialOffer === undefined ? null : <p className="w-[113px] py-1 px-3 absolute -top-[31px] right-0 flex items-center justify-end text-xs font-bold text-[#F79D15] bg-[#FFEFD1] rounded-full">
                        <FireIcon className="absolute left-[6px] bottom-1" />
                        {specialOffer}
                    </p>}
                    {/* isInStock and label info fields*/}
                    <div className="w-full flex items-center justify-between">
                        <p className={`w-fit h-[25px] px-[10px] pt-[2px]  ${label === "Тканина тижня" ? "bg-white" : "pl-0 bg-none"} rounded-full  ${openSansFont.className} text-sm ${isInStock === "в наявності" ? "text-t-green" : "text-[#FF4242]"}`}>{isInStock}</p>
                        <p className={`h-[25px] w-fit px-[14px] py-1 rounded-full text-[12px] font-bold  ${label === "Новинка" ?
                            "text-white bg-t-blue"
                            :
                            label === "Розпродаж" ? "text-[#F79D15] bg-[#FFEFD1]" : "text-t-blue bg-[#DDE8FF]"}`
                        }>
                            {label}
                        </p>
                    </div>
                </div>
            </button>

            <Modal
                backdrop="opaque"
                classNames={{
                    wrapper: "h-fit my-auto",
                    base: "relative max-w-[998px] min-h-[523px] p-10 bg-[#FAFAFA] text-t-blue-dark",
                    body: "p-0 flex flex-row items-center justify-between gap-x-[330px]"
                }}
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                scrollBehavior="outside"
                hideCloseButton
            >
                <ModalContent>
                    {(onClose) => (
                        <ModalBody>
                            <CloseButton btnHandler={onClose} iconColor="#10005B" className="absolute right-4 top-4" />

                            <ul className="flex flex-col gap-2.5">
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

                            <div className="absolute left-[120px] w-fit h-fit">
                                <Image
                                    alt={`Фото варінта тканини для ${name}`}
                                    src={selectedColor}
                                    width={329}
                                    height={593}
                                    className="h-[593px] w-[329px] object-cover rounded-[30px]"
                                />
                                <button onClick={onZoomed} className="w-[65px] h-[65px] absolute bottom-5 right-5 rounded-full bg-white flex items-center justify-center">
                                    <ZoomIcon />
                                </button>
                                <Modal
                                    isOpen={isZoomed}
                                    onOpenChange={onZoomedChange}
                                    size="3xl"
                                    radius="lg"
                                    hideCloseButton
                                    classNames={{
                                        body: "relative"
                                    }}
                                >
                                    <ModalContent>
                                        {(onCloseZoomed) => (
                                            <>
                                                <Image
                                                    alt={`Фото ${type} ${collection}`}
                                                    src={selectedColor}
                                                    width={1198}
                                                    height={750}
                                                    loading="lazy"
                                                    className="object-cover"
                                                />
                                                <CloseButton btnHandler={onCloseZoomed} iconColor="#10005B" className="absolute top-3 right-3 z-50" />
                                            </>
                                        )}
                                    </ModalContent>
                                </Modal>
                            </div>

                            <section className="w-[472px]">
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

                                <div className={`${openSansFont.className} text-lg font-normal mt-[60px]`}>
                                    <p className="inline-block w-full pb-5 mb-5 border-b-1 border-[#DDE0E9]">Технічна інформація</p>

                                    <ul className="text-lg grid grid-cols-3 gap-x-2 gap-y-[30px]">
                                        {technicalInformation.map((infoItem, index) => (
                                            <li key={index}>
                                                <p>{infoItem.item}</p>
                                                <p className="mt-1 text-sm text-[#AEB1BA]">{infoItem.info}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </section>
                        </ModalBody >
                    )
                    }
                </ModalContent >
            </Modal >
        </>
    )
}

function CloseButton({ className, iconColor = "white", btnHandler }: { className?: string, iconColor?: string, btnHandler: () => void }) {
    return (
        <button className={`w-fit h-fit ${className}`} onClick={btnHandler}>
            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M18.5318 0.466859C19.0288 0.963795 19.0288 1.76949 18.5318 2.26642L2.26837 18.5299C1.77143 19.0268 0.965742 19.0268 0.468806 18.5299C-0.0281295 18.0329 -0.0281297 17.2273 0.468807 16.7303L16.7323 0.466859C17.2292 -0.0300766 18.0349 -0.0300766 18.5318 0.466859Z" fill={iconColor} />
                <path fillRule="evenodd" clipRule="evenodd" d="M18.5314 18.5275C18.0345 19.0245 17.2288 19.0245 16.7319 18.5275L0.468405 2.26406C-0.028531 1.76713 -0.0285307 0.961434 0.468405 0.464499C0.965341 -0.032437 1.77103 -0.0324372 2.26797 0.464499L18.5314 16.728C19.0284 17.2249 19.0284 18.0306 18.5314 18.5275Z" fill={iconColor} />
            </svg>
        </button>
    )
}