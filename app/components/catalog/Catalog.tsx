import Image from 'next/image';
import CatalogList from './CatalogList';
import Link from "next/link";
import { Filters } from './Filters';

export default function Catalog() {


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

            <Filters />
            <CatalogList />
        </>
    );
}

