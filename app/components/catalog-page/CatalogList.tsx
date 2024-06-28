import { IProductItem } from "@/app/lib/types";
import CatalogItem from "./CatalogItem";
import { catalogList } from "./catalog-list";
import { Suspense } from "react";

interface IProps {
    productList: IProductItem[],
    className?: string
}

export default function CatalogList({ productList, className }: IProps) {
    return (
        <ul className={`w-full -mt-[420px] px-0 tablet:px-10 pb-28 mobile:pb-0 grid grid-cols-2 justify-items-center mobile:flex flex-wrap justify-center gap-x-2 mobile:gap-x-5 gap-y-4 mobile:gap-y-10 ${className ? className : ''}`}>
            {productList.map((productItem) => (
                <li key={productItem.id}>
                    <CatalogItem productItem={productItem} />
                </li>
            ))}
        </ul>
    );
}
