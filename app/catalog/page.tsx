import { Metadata } from "next";
import Catalog from "../components/catalog/Catalog";
import Navigation from "../components/catalog/Navigation";

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
            <Navigation />
            <div className="flex flex-col items-center flex-grow overflow-y-auto overflow-x-hidden p-3 mobile:py-[60px]">
                <Catalog />
            </div>
        </section>
    )
}