export interface IProductItem {
    id: number,
    name: string,
    description: string,
    price: number,
    category: ICategory,
    collection: ICollection,
    design: IDesign,
    transparency: ITransparencie,
    color: IColor,
    discount: {
        id: number,
        name: string,
        discount_percentage: number,
    } | null,
    availability: {
        id: number,
        status: string,
    },
    image_url: string | null
}

export interface IColor {
    id: number,
    name: string,
}

export interface IDesign {
    id: number,
    name: string,
}

export interface ITransparencie {
    id: number,
    name: string,
}

export interface ICollection {
    id: number,
    name: string,
}

export interface ICategory {
    id: number,
    name: string,
}