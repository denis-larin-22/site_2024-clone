import CatalogItem from "./CatalogItem";
import { catalogList } from "./catalog-list";

export default function CatalogList({ className }: { className?: string }) {

    return (
        <ul className={`w-full -mt-[420px] px-0 lg:px-[93px] tablet:px-24 flex flex-wrap justify-center gap-x-2 mobile:gap-x-5 gap-y-4 mobile:gap-y-10 ${className ? className : ''}`}>
            {catalogList.map((catalogItem, index) => (
                <li key={index}>
                    <CatalogItem catalogItem={catalogItem} />
                </li>
            ))}
        </ul>
    );
}