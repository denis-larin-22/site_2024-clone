'use client'

import Image from "next/image";
import { Modal, ModalContent, useDisclosure } from "@nextui-org/modal";
import { CloseButton, FireIcon, ZoomIcon } from "../assets/icons";
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
        design,
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