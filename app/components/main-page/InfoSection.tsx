import { openSansFont } from "../ui/fonts";

export default function InfoPanel() {
    return (
        <div className="bg-t-blue">
            <section className="max-w-[1274px] mx-auto px-4 pt-[85px] pb-[59px] min-h-[570px] grid grid-cols-2 gap-x-[14px] gap-y-3">
                <p className="inline-block max-w-[281px] m-auto text-t-pale uppercase text-[44px] font-bold leading-none">Piramid як виробник</p>
                <div className="relative bg-white rounded-2xl h-[206px] overflow-hidden">
                    <p className={`${openSansFont.className} absolute top-5 right-5 text-2xl text-m-blue-dark`}>прозорість процесів</p>
                    <p className="absolute -bottom-[35%] left-[13px] text-[126px] font-bold text-t-blue uppercase">100%</p>
                </div>
                <div className="relative bg-white rounded-2xl h-[206px] overflow-hidden">
                    <p className={`${openSansFont.className} absolute top-5 right-5 text-2xl text-m-blue-dark`}>на ринку</p>
                    <p className="absolute -bottom-[30%] left-[13px] text-[126px] font-bold text-t-blue uppercase">16 РOКІВ</p>
                </div>
                <div className="relative bg-white rounded-2xl h-[206px] overflow-hidden">
                    <p className={`${openSansFont.className} absolute top-5 right-5 text-2xl text-m-blue-dark`}>гарантії</p>
                    <p className="absolute -bottom-[30%] left-[13px] text-[126px] font-bold text-t-blue uppercase">1 РІК</p>
                </div>
            </section>
        </div>
    );
}
