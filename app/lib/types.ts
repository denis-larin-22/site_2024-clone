// Product item from catalog
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
// Product attributes
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
// Filters
export interface IFilterOption {
    title?: string,
    options: {
        id: number,
        name: string,
        icon?: string | JSX.Element
    }[],
    multichoice: boolean
}