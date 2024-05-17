import Image from "next/image"
import CatalogItem from "./CatalogItem"

export interface ICatalogItem {
    name: string,
    type: "Рулонні штори" | "Вертикальні жазюзі" | "Горизонтальні жазюзі" | "День-Ніч"
    isInStock: boolean, //В наявності
    isNew: boolean,
    isPromotion: boolean, //Акция
    fabricTexture: string, //Фактура ткании
    waterproofnessLevel: string, //Рівень водонепроникності
    collection: string,
    opacity: string,
    guarantee: string,
    composition: string, //Склад
    maxWidth: string,
    originCountry: string,
    availableColors: string[]
}

export type CatalogList = Array<ICatalogItem>

export default function CatalogList() {
    const catalogList: CatalogList = [
        {
            name: "Бірма біла",
            type: "Рулонні штори",
            isInStock: true,
            isNew: true,
            isPromotion: true,
            fabricTexture: "Фактурна",
            waterproofnessLevel: "Фактурна",
            collection: "Бірма",
            opacity: "100%",
            guarantee: "1 рік",
            composition: "100% поліестер",
            maxWidth: "260 см",
            originCountry: "Китай",
            availableColors: ["/assets/images/Фото_тканини_Бірма-біла.png", "/assets/images/Фото_Бірма-бежева.png", "/assets/images/Фото_Бірма-сіра.png", "/assets/images/Фото_Бірма-сіра(1).png"]
        }
    ]

    return (
        <ul className="flex flex-wrap mt-[51px] px-11">
            {catalogList.map((catalogItem) => (
                <li key={catalogItem.name}>
                    <CatalogItem catalogItem={catalogItem} />
                </li>
            ))}
        </ul>
    )
}