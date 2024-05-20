import CatalogItem from "./CatalogItem";
import { catalogList } from "./catalog-list";

export default function CatalogList() {

    return (
        <ul className="my-12 px-0 2xl:px-28 flex flex-wrap justify-center gap-x-5 gap-y-10">
            {catalogList.map((catalogItem, index) => (
                <li key={index}>
                    <CatalogItem catalogItem={catalogItem} />
                </li>
            ))}
        </ul>
    );
}