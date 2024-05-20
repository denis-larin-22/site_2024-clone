import Catalog from "../components/catalog/Catalog";
import Navigation from "../components/catalog/Navigation";

export default function CatalogPage() {
    return (
        <section className="h-screen w-screen bg-[#EEEEEE] flex flex-row overflow-hidden">
            <Navigation />
            <div className="flex-grow overflow-y-auto overflow-x-hidden px-5 py-[87px] flex flex-col items-center">
                <Catalog />
            </div>
        </section>
    )
}