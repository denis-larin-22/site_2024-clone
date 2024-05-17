import Image from "next/image"

interface ICatalogItem {
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
    composition: string, //Состав
    maxWidth: string,
    originCountry: string,
    availableColors: string[]
}

type CatalogList = Array<ICatalogItem>

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
            availableColors: ["/assets/images/Фото_тканини_Бірма-біла.png", "", "", ""]
        }
    ]

    return (
        <ul className="">
            <Image
                alt="Photo"
                src={catalogList[0].availableColors[0]}
                width={250}
                height={250}
            />
        </ul>
    )
}