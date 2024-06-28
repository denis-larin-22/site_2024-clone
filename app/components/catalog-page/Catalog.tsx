import Image from 'next/image';
import CatalogList from './CatalogList';
import Link from "next/link";
import { Filters } from './Filters';
import { IProductItem } from '@/app/lib/types';
import { fetchProductsList } from '@/app/lib/api/apiRequests';
import { getFilterOptions } from '@/app/lib/data/getFilterOptions';

export default async function Catalog() {
    const productList: IProductItem[] = await fetchProductsList();
    const filterOptions = await getFilterOptions();

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

            <Filters filterOptions={filterOptions} />
            <CatalogList productList={productList} />
        </>
    );
}

