interface IProps {
    btnHandler?: () => void
}

export function OrderDemoButton({ btnHandler }: IProps) {
    return (
        <button
            onClick={btnHandler}
            className="group relative py-4 px-[42px] text-white mr-[33px]"
        >
            <span className="inline-block absolute top-0 right-0 bottom-0 left-0 bg-m-blue-green-gradient rounded-full group-hover:scale-105 duration-500"></span>
            <span className="relative z-10">Замовити демо</span>
        </button>
    )
}