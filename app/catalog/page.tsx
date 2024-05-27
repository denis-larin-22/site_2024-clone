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
        <section className="h-screen w-screen bg-t-pale flex flex-row overflow-hidden">
            <Navigation />
            <div className="flex-grow overflow-y-auto overflow-x-hidden px-5 py-[87px] flex flex-col items-center">
                <Catalog />
            </div>
        </section>
    )
}