import Image from 'next/image';
import CatalogList from './CatalogList';
import Link from "next/link";
import { Filters } from './Filters';
import { IProductItem } from '@/app/lib/types';
import { fetchCategories, fetchCollections, fetchColors, fetchDesigns, fetchProductsList, fetchTransparencies } from '@/app/lib/api/apiRequests';

export default async function Catalog() {
    const productList: IProductItem[] = await fetchProductsList();
    // Filters
    const allColors = await fetchColors();
    const allDesigns = await fetchDesigns();
    const allTransparencies = await fetchTransparencies();
    const allCollections = await fetchCollections();
    const allCategories = await fetchCategories();
    const filterOptions = [allColors, allDesigns, allTransparencies, allCollections, allCategories];

    return (
        <>
            <div className="flex mobile:hidden w-screen pl-5 mb-8">
                <Link href={"/"}>
                    <Image
                        alt='Piramid logo'
                        src={"/assets/images/full_logo_small.svg"}
                        width={129}
                        height={25}
                    />
                </Link>
            </div>

            <Filters options={filterOptions} />
            <CatalogList productList={productList} />
        </>
    );
}

