export default function HeroSection() {
    return (
        <section className="max-w-[1272px] mx-auto mt-[143px] mb-[192px] px-4 font-semibold">
            <h1 className="font-bold text-[40px] uppercase">Перший виробник жалюзі та рулонних штор в Україні з <span className="text-t-blue"><span className="">о</span>нлайн інструментами</span> для дилерів</h1>
            <div className="text-xl mt-9">
                <button className="bg-m-blue-green-gradient py-4 px-[42px] rounded-full text-white mr-[33px]">Замовити демо</button>
                <a href="/" className="relative group text-m-blue-dark inline-flex items-center">
                    Стати дилером
                    <span className="absolute left-[104%] inline-flex items-center h-0.5 w-[78px] group-hover:w-screen duration-1000 bg-m-blue-dark before:inline-block before:h-3 before:w-3 before:border-t-2 before:border-r-2 before:border-m-blue-dark before:rotate-45 before:absolute before:right-0"></span>
                    <span className="absolute right-[100vw] group-hover:right-0 top-[110px] inline-flex items-center h-0.5 w-[100vw] duration-1000 bg-m-blue-dark before:inline-block before:h-3 before:w-3 before:border-t-2 before:border-r-2 before:border-m-blue-dark before:rotate-45 before:absolute before:right-0"></span>
                </a>
            </div>
        </section>
    )
}