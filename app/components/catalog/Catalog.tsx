'use client'

import { IFilterOption, DropdownFilterSingle, DropdownFilterMultiple, FilterByPrice } from './Filters';

export default function App() {
    const byMain: IFilterOption = {
        options: [{ option: "За популярністю" }, { option: "За акціями" }, { option: "За новинками" }, { option: "За алфавітом" }],
    }
    const byDesign: IFilterOption = {
        title: "Дизайн",
        options: [{ option: "Однотонний" }, { option: "З малюнком" }],
    }
    const byTransparency: IFilterOption = {
        title: "Прозорість",
        options: [{ option: "Напівпрозорі" }, { option: "Блекаут" }],
    }

    const byCollection: IFilterOption = {
        title: "Колекція",
        options: [{ option: "Альмерія" }, { option: "Арома" }, { option: "Бірма" }, { option: "Бостон" }, { option: "Ельба" }, { option: "Камелія" }, { option: "Лондон" }, { option: "Льон" }, { option: "Льон Black Out" }, { option: "Маніла" }, { option: "Невада" }, { option: "Париж" }, { option: "Пуебло" }, { option: "Рим" }, { option: "Сафарі" }, { option: "Сіде" }, { option: "Сіде Black out" }, { option: "Сідней" }, { option: "Соул" }, { option: "Сфера Black out" }, { option: "Тальник" }, { option: "Флоренція" }, { option: "Шовк" }
        ],
    }

    const byColor: IFilterOption = {
        title: "Базовий колір",
        options: [
            { option: "Бежевий", optionIcon: <span className='inline-block w-5 h-5 rounded-full bg-[#FAE3B7]'></span> },
            { option: "Білий", optionIcon: <span className='inline-block w-5 h-5 rounded-full bg-[#FFFFFF] border-1 border-t-blue'></span> },
            { option: "Блакитний", optionIcon: <span className='inline-block w-5 h-5 rounded-full bg-[#66D4FD]'></span> },
            { option: "Жовтий", optionIcon: <span className='inline-block w-5 h-5 rounded-full bg-[#FFD056]'></span> },
            { option: "Зелений", optionIcon: <span className='inline-block w-5 h-5 rounded-full bg-[#48D177]'></span> },
            { option: "Коричневий", optionIcon: <span className='inline-block w-5 h-5 rounded-full bg-[#AC6C20]'></span> },
            { option: "Помаранчевий", optionIcon: <span className='inline-block w-5 h-5 rounded-full bg-[#F79D15]'></span> },
            { option: "Рожевий", optionIcon: <span className='inline-block w-5 h-5 rounded-full bg-[#FF89C9]'></span> },
            { option: "Синій", optionIcon: <span className='inline-block w-5 h-5 rounded-full bg-[#405CF3]'></span> },
            { option: "Сірий", optionIcon: <span className='inline-block w-5 h-5 rounded-full bg-[#DBDBDB]'></span> },
            { option: "Срібло", optionIcon: <span className='inline-block w-5 h-5 rounded-full bg-[#ECECEC]'></span> },
            { option: "Фіолетовий", optionIcon: <span className='inline-block w-5 h-5 rounded-full bg-[#C464FF]'></span> },
            { option: "Червоний", optionIcon: <span className='inline-block w-5 h-5 rounded-full bg-[#FF4242]'></span> },
            { option: "Чорний", optionIcon: <span className='inline-block w-5 h-5 rounded-full bg-[#202020]'></span> }
        ]
    }

    return (
        <div className="flex items-center gap-[10px]">
            <DropdownFilterSingle filterOption={byMain} />
            <DropdownFilterSingle filterOption={byDesign} />
            <DropdownFilterSingle filterOption={byTransparency} />
            <DropdownFilterMultiple filterOption={byCollection} />
            <DropdownFilterMultiple filterOption={byColor} />
            <FilterByPrice />
        </div>
    );
}

