'use client'

import Image from "next/image";
import { Modal, ModalContent, useDisclosure } from "@nextui-org/modal";
import { useState } from "react";
import { FireIcon, ZoomIcon } from "../assets/icons";
import { openSansFont } from "../ui/fonts";
import { IProductItem } from "@/app/lib/types";

interface IProps {
    productItem: IProductItem,
    onModalCloseHandler: () => void
}

export function ModalDesktop({ productItem, onModalCloseHandler }: IProps) {
    // Catalog item properties
    const {
        availability,
        category,
        collection,
        color,
        description,
        design_id,
        discount,
        id,
        image_url,
        name,
        price,
        transparency
    } = productItem;
    // Default card image (first image from available ones)

    // TO_DO!!!
    // const [selectedColor, setSelectedColor] = useState<string>(availableColors[0]);
    const { isOpen: isZoomed, onOpen: onZoomed, onOpenChange: onZoomedChange } = useDisclosure();

    const technicalInformation = [
        { item: "Затемнення", info: transparency.name },
        { item: "Водостійкість", info: 'відсутнє' },
        { item: "Фактура тканини", info: 'відсутнє' },
        { item: "Склад", info: 'відсутнє' },
        { item: "Гарантія", info: 'відсутнє' },
        { item: "Ширина рулону", info: 'відсутнє' }
    ];

    return (
        <>
            <CloseButton btnHandler={onModalCloseHandler} iconColor="#10005B" className="absolute right-5 top-5" />

            {/* TO_DO */}
            <ul className="flex flex-col gap-2.5">
                {/* {availableColors.map((color, index) => ( */}
                {[1, 2, 3, 4].map((color, index) => (
                    <li
                        key={index}
                    // onClick={() => {
                    //     setSelectedColor(color);
                    // }}
                    >
                        <div className="w-[47px] h-[46px] rounded-md ring-1 hover:ring-offset-1 hover:ring-[#10005B] cursor-not-allowed"></div>
                        {/* <Image
                            src={color}
                            alt="Варіант тканини"
                            width={47}
                            height={46}
                            loading="lazy"
                            className={`cursor-pointer rounded-md ring-1 hover:ring-offset-1 hover:ring-[#10005B] duration-150 ${selectedColor === color ? "ring-[#10005B]" : "ring-t-gray-text"}`}
                        /> */}
                    </li>
                ))}
            </ul>

            <div className="absolute left-[120px] w-fit h-fit">
                <Image
                    alt={`Зображення товару ${name} із колекції ${collection.name}`}
                    src={image_url !== null ? image_url : "https://www.pro-of.com.ua/wp-content/uploads/2018/02/ab35c5ac5b7d2dda5ddc48c01e4efa15.jpg"}
                    width={346}
                    height={620}
                    className="h-[620px] w-[346px] object-cover rounded-[30px]"
                />
                <button onClick={onZoomed} className="w-[65px] h-[65px] absolute bottom-[30px] right-[30px] rounded-full bg-white flex items-center justify-center">
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
                                    alt={`Зображення товару ${name} із колекції ${collection.name}`}
                                    src={image_url !== null ? image_url : "https://www.pro-of.com.ua/wp-content/uploads/2018/02/ab35c5ac5b7d2dda5ddc48c01e4efa15.jpg"}
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

            <section className="w-[451px] xl:w-[515px]">
                <div>
                    <div className={`${openSansFont.className} flex items-center justify-between`}>
                        <p className="text-[#AEB1BA] text-xs uppercase">{category.name} <span className="text-t-blue-dark uppercase">/</span> {collection.name}</p>
                        <p className={`${availability.status === 'Status 1' ? "text-t-green" : "text-[#FF4242]"}`}>{availability.status}</p>
                    </div>
                    <h5 className="text-[32px] mt-3 mb-8">{name}</h5>
                    <div className="w-full flex items-center justify-between">
                        <div className="flex items-center gap-[15px]">
                            {discount === null ? null : <p className="relative w-[113px] py-1 px-3 flex items-center justify-end text-xs font-bold text-[#F79D15] bg-[#FFEFD1] rounded-full">
                                <FireIcon className="absolute left-[6px] bottom-1" />
                                Акція {discount.discount_percentage}%
                            </p>}
                            {/* TO_DO!!! */}
                            {/* <p className={`h-[25px] w-fit px-[14px] py-1 rounded-full text-[12px] font-bold  ${label === "Новинка" ?
                                "text-white bg-t-blue"
                                :
                                label === "Розпродаж" ? "text-[#F79D15] bg-[#FFEFD1]" : "text-t-blue bg-[#DDE8FF]"}`
                            }>
                                {label}
                            </p> */}
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