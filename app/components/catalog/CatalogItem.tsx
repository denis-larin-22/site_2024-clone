'use client'

import { Modal, ModalContent, ModalBody, useDisclosure } from "@nextui-org/modal";
import { useEffect, useState } from "react";
import Image from "next/image";
import { openSansFont } from "../ui/fonts";
import { ICatalogItem } from "./catalog-list";
import { CoinIcon, FireIcon } from "../assets/icons";
import { ModalDesktop } from "./ModalDesktop";
import { ModalTabletMobile } from "./ModalTabletMobile";

interface IProps {
    catalogItem: ICatalogItem
}

export default function CatalogItem({ catalogItem }: IProps) {
    // Modal control
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    // Catalog item properties
    const { availableColors, collection, composition, fabricTexture, guarantee, isInStock, maxWidth, name, opacity, type, waterproofnessLevel, priceCategory, label, cashback, specialOffer } = catalogItem;

    // Additional styles
    const roundingExternalCorners = "before:inline-block before:w-6 before:h-6 before:absolute before:z-0 before:bottom-[76%] mobile:before:bottom-[85%] before:right-[-3px] before:rounded-br-xl before:border-r-4 before:border-b-4 before:border-t-pale after:inline-block after:w-6 after:h-6 after:absolute after:z-0 after:top-[68%] mobile:after:top-[82%] after:right-[-5px] after:rounded-tr-2xl after:border-r-5 after:border-t-5 after:border-t-pale"

    // State to check if running on client
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null;
    }

    return (
        <>
            <button
                onClick={onOpen}
                className="group relative inline-flex w-full mobile:max-w-[282px] h-[231px] mobile:h-[381px] rounded-xl overflow-hidden mobile:hover:ring-4 ring-offset-4 ring-t-blue/50 duration-400"
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
                <p className={`${openSansFont.className} px-2 mobile:px-[14px] py-0 mobile:py-1 bg-t-pale absolute top-4 right-0 text-[10px] mobile:text-sm text-t-blue-dark rounded-tl-full rounded-bl-full ${roundingExternalCorners}`}>
                    <span className="relative z-10">{priceCategory}</span>
                </p>
                {/* Product info fields*/}
                <div className={`absolute bottom-2 mobile:bottom-[11px] left-2 mobile:left-[11px] right-2 mobile:right-[11px] rounded-xl p-2 mobile:p-3 pt-1.5 mobile:pt-2  ${label === "Тканина тижня" ? "bg-t-blue" : "bg-white"} flex flex-col items-start group-hover:shadow-xl duration-150`}>
                    {/* Collection name field*/}
                    <p className={`mb-1 ${openSansFont.className} uppercase text-3xs mobile:text-xs  ${label === "Тканина тижня" ? "text-white" : "text-t-gray-text"}`}>{collection}</p>
                    {/* Product name field*/}
                    <p className={`mb-[18px] text-sm mobile:text-xl font-bold ${label === "Тканина тижня" ? "text-white" : "text-t-blue-dark"}`}>{name}</p>
                    {/* Cashback field (by condition)*/}
                    {cashback === undefined ? null : <p className="absolute top-0 mobile:top-2 right-2 mobile:right-3">
                        <CoinIcon />
                    </p>}
                    {/* Special Offer field (by condition)*/}
                    {specialOffer === undefined ? null : <p className="w-[89px] mobile:w-[113px] py-0.5 px-1.5 mobile:px-3 absolute -top-[21px] mobile:-top-[31px] right-0 flex items-center justify-end text-xxs mobile:text-xs font-bold text-[#F79D15] bg-[#FFEFD1] rounded-full">
                        <FireIcon className="absolute left-1.5 bottom-0.5 mobile:bottom-1" />
                        {specialOffer}
                    </p>}
                    {/* isInStock and label info fields*/}
                    <div className="w-full flex items-center justify-between">
                        <p className={`w-fit h-[15px] mobile:h-[25px] px-1 mobile:px-[10px] py-0 mobile:pt-[2px]  ${label === "Тканина тижня" ? "bg-white" : "pl-0 bg-none"} rounded-full  ${openSansFont.className} text-[9px] mobile:text-sm ${isInStock === "в наявності" ? "text-t-green" : "text-[#FF4242]"}`}>{isInStock}</p>
                        <p className={`h-[15px] mobile:h-[25px] w-fit px-1 mobile:px-[14px] pt-[2px] mobile:py-1 rounded-full text-3xs mobile:text-xs font-bold  ${label === "Новинка" ?
                            "text-white bg-t-blue"
                            :
                            label === "Розпродаж" ? "text-[#F79D15] bg-[#FFEFD1]" : "text-t-blue bg-[#DDE8FF]"}`
                        }>
                            {label}
                        </p>
                    </div>
                </div>
            </button>

            {isClient && window.innerWidth > 1024 ?
                // Desktop pop-up
                <Modal
                    backdrop="blur"
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
                                <ModalDesktop catalogItem={catalogItem} onModalCloseHandler={onClose} />
                            </ModalBody >
                        )}
                    </ModalContent >
                </Modal >
                :
                // Tablet and mobile pop-up
                <Modal
                    isOpen={isOpen}
                    size="full"
                    backdrop="transparent"
                    onOpenChange={onOpenChange}
                    hideCloseButton
                    classNames={{
                        base: "relative",
                        body: "p-0"
                    }}
                >
                    <ModalContent>
                        {(onClose) => (
                            <ModalBody>
                                <ModalTabletMobile catalogItem={catalogItem} onModalCloseHandler={onClose} />
                            </ModalBody>
                        )}
                    </ModalContent>
                </Modal>
            }
        </>
    )
}