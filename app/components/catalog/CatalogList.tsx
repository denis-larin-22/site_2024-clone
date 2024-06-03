import CatalogItem from "./CatalogItem";
import { catalogList } from "./catalog-list";

export default function CatalogList() {

    return (
        <ul className="my-12 px-[93px] tablet:px-5 tablet: flex flex-wrap justify-center gap-x-5 gap-y-10">
            {catalogList.map((catalogItem, index) => (
                <li key={index}>
                    <CatalogItem catalogItem={catalogItem} />
                </li>
            ))}
        </ul>
    );
}