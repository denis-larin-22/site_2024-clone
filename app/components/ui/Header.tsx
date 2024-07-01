import { FullArrowIcon } from "../assets/icons";
import { openSansFont } from "./fonts";
import Image from "next/image";

export default function Header() {
    return (
        <>
            <div className="bg-m-blue-dark mb-4 text-sm">
                <div className="max-w-[1272px] mx-auto px-4 py-[7px] text-white flex items-center">
                    <button className="flex items-center gap-x-2.5 py-1 px-[11px] bg-white rounded-3xl mr-2.5 text-m-blue-dark font-semibold">
                        Дізнатись
                        <FullArrowIcon />
                    </button>
                    <div className="w-full flex items-center justify-between">
                        <p className={`${openSansFont.className}`}>Нова колекція тканин на літо</p>
                        <a href="/" className="">Увійти</a>
                    </div>
                </div>
            </div>

            <header className="sticky z-50 top-0 max-w-[1288px] w-full mx-auto py-4 px-6 bg-white/40 backdrop-blur-lg rounded-[34px] flex justify-between">
                <Image
                    alt="Piramid logo"
                    src={"/assets/images/full_logo.svg"}
                    width={167}
                    height={30}
                />
                <div className="flex items-center gap-x-3.5 font-semibold">
                    <a href="/" className="text-m-blue-dark">Стати дилером</a>
                    <button className="bg-m-blue-green-gradient py-[7px] px-[18px] rounded-3xl text-white">Замовити демо</button>
                </div>
            </header>
        </>
    )
}