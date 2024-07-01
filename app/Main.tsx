'use client'

import { useEffect, useState } from "react";
import { IComponentItem, mainComponentsList } from "./lib/components-lib";
import { getMainPageComponentOrder } from "./lib/contentful/contentful-api";
import { CircularProgress } from "@nextui-org/react";

async function getComponentListForRender(): Promise<(IComponentItem | undefined)[]> {
    const mainPageComponentOrder = await getMainPageComponentOrder();

    const result = mainPageComponentOrder.map((item) => {
        const componentOrUndefined = mainComponentsList[item.componentId];
        if (!componentOrUndefined) return

        return componentOrUndefined;
    })

    return result
}

export default function Main() {

    const [pageComponentOrder, setPageComponentOrder] = useState<(IComponentItem | undefined)[] | null>(null)
    useEffect(() => {
        async function getOrderList() {
            const order = await getComponentListForRender();
            setPageComponentOrder(order);
        }

        getOrderList();
    }, [])


    return (
        <main className="overflow-hidden flex-grow">
            {pageComponentOrder === null ?
                <CircularProgress size="lg" aria-label="Loading..." className="absolute top-1/2 left-1/2" />
                :
                pageComponentOrder.map((component, index) => {
                    if (!component) return null;

                    return <div key={index}>{component.component}</div>;
                })
            }
        </main>
    )
}