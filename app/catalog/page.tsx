import { Metadata } from "next";
import Catalog from "../components/catalog-page/Catalog";
import CategoryNavigation from "../components/catalog-page/CategoryNavigation";

export const metadata: Metadata = {
    title: 'Каталог | Piramid',
    description: 'Piramid',
    openGraph: {
        title: 'Каталог | Piramid',
        description: 'Piramid',
        type: 'website',
        locale: 'uk_UA',
        url: '',
        siteName: 'Пирамида ТПК'
    }
};


export default function CatalogPage() {
    return (
        <section className="relative h-dvh w-screen bg-t-pale flex flex-row overflow-hidden">
            <CategoryNavigation />
            <div className="flex flex-col items-center flex-grow overflow-y-auto overflow-x-hidden ml-0 mobile:ml-24 p-3 mobile:py-[60px]">
                <Catalog />
            </div>
        </section>
    )
}