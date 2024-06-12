'use client'

import { useState } from "react";
import { PriceIcon } from "../../assets/icons";

export function FilterByLevelPrice() {
    const [priceOrder, setPriceOrder] = useState<"fromHigher" | "fromLower">("fromLower")
    const isIconRotated = priceOrder === "fromHigher";

    return (
        <button
            className="min-w-10 h-10 rounded-full bg-white flex items-center justify-center"
            onClick={() => {
                const opositeOrder = priceOrder === "fromHigher" ? "fromLower" : "fromHigher";
                setPriceOrder(opositeOrder);
            }}
        >
            <PriceIcon isRotated={isIconRotated} />
        </button>
    )
}