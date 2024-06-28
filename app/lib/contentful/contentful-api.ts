import { client } from "./client";

const MAIN_PAGE_COMPONENT_ORDER_ID = "mainPageComponentOrder";

interface IComponentOrderItem {
    componentName: string,
    componentId: string
}

export async function getMainPageComponentOrder(): Promise<IComponentOrderItem[]> {
    try {
        const componentOrderObject = await client.getEntries({ content_type: MAIN_PAGE_COMPONENT_ORDER_ID });

        if (!componentOrderObject || !componentOrderObject.items || componentOrderObject.items.length === 0) {
            throw new Error("No items found for the given content type");
        }

        const componentOrderList = componentOrderObject.items[0].fields.componentsList.map((item: any) => {
            if (!item.fields.name || !item.fields.id) {
                throw new Error("Missing fields in component item");
            }
            return {
                componentName: item.fields.name,
                componentId: item.fields.id
            };
        });

        return componentOrderList;
    } catch (error) {
        console.error("Error fetching main page component order:", error);
        return []; // Return an empty array in case of error
    }
}