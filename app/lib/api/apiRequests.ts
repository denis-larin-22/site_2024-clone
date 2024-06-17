import { ICategory, IColor, IDesign, IProductItem } from "../types";

const BASE_URL = "https://platform.piramid.com.ua/";

// GET Product list
export async function fetchProductsList(): Promise<IProductItem[]> {
    try {
        const response = await fetch(`${BASE_URL}api/cms/jaluji/products`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.map((item: any) => {
            const productItem: IProductItem = {
                id: item.id,
                name: item.name,
                description: item.description,
                price: parseFloat(item.price),
                category: {
                    id: item.category.id,
                    name: item.category.name
                },
                collection: {
                    id: item.collection.id,
                    name: item.collection.name
                },
                design: item.design_id,
                transparency: {
                    id: item.transparency.id,
                    name: item.transparency.name
                },
                color: {
                    id: item.color.id,
                    name: item.color.name
                },
                discount: item.discount !== null ? {
                    id: item.discount.id,
                    name: item.discount.name,
                    discount_percentage: parseFloat(item.discount.discount_percentage)
                } : null,
                availability: {
                    id: item.availability.id,
                    status: item.availability.status
                },
                image_url: item.image !== null ? item.image.image_url : null,
            }

            return productItem;
        });
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}

// Filters
export async function fetchColors(): Promise<IColor[]> {
    try {
        const response = await fetch(`${BASE_URL}api/cms/jaluji/colors`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status} `);
        }
        const data = await response.json();
        return data.map((item: any) => ({
            id: item.id,
            name: item.name
        }))
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}

export async function fetchDesigns(): Promise<IDesign[]> {
    try {
        const response = await fetch(`${BASE_URL}api/cms/jaluji/designs`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status} `);
        }
        const data = await response.json();
        return data.map((item: any) => ({
            id: item.id,
            name: item.name
        }))
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}

export async function fetchTransparencies(): Promise<IDesign[]> {
    try {
        const response = await fetch(`${BASE_URL}api/cms/jaluji/transparencies`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status} `);
        }
        const data = await response.json();
        return data.map((item: any) => ({
            id: item.id,
            name: item.name
        }))
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}

export async function fetchCollections(): Promise<IDesign[]> {
    try {
        const response = await fetch(`${BASE_URL}api/cms/jaluji/collections`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status} `);
        }
        const data = await response.json();
        return data.map((item: any) => ({
            id: item.id,
            name: item.name
        }))
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}

export async function fetchCategories(): Promise<ICategory[]> {
    try {
        const response = await fetch(`${BASE_URL}api/cms/jaluji/categories`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status} `);
        }
        const data = await response.json();
        return data.map((item: any) => ({
            id: item.id,
            name: item.name
        }))
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}