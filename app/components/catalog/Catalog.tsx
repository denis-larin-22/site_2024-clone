import CatalogList from './CatalogList';
import { IFilterOption, DropdownFilterSingle, DropdownFilterMultiple, FilterByLevelPrice } from './Filters';

export default function Catalog() {
    // Filter options
    const byMain: IFilterOption = {
        options: [{ option: "За популярністю" }, { option: "За акціями" }, { option: "За новинками" }, { option: "За алфавітом" }],
    }
    const byDesign: IFilterOption = {
        title: "Дизайн",
        options: [{
            option: "Однотонний", optionIcon: <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M1 1V9H9V1H1ZM1 0C0.447715 0 0 0.447715 0 1V9C0 9.55228 0.447715 10 1 10H9C9.55228 10 10 9.55229 10 9V1C10 0.447715 9.55229 0 9 0H1Z" fill="#0E0050" />
            </svg>
        }, {
            option: "З малюнком", optionIcon: <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M1 0C0.447715 0 0 0.447715 0 1V9C0 9.55228 0.447715 10 1 10H9C9.55228 10 10 9.55229 10 9V1C10 0.447715 9.55229 0 9 0H1ZM5.29289 1H3.70711L1 3.70711V5.29289L5.29289 1ZM1 6.70711V8.29289L8.29289 1H6.70711L1 6.70711ZM9 1.70711L1.70711 9H4.24262L9 3.84617V1.70711ZM9 5.32049L5.60353 9H7.29289L9 7.29289V5.32049ZM9 8.70711L8.70711 9H9V8.70711ZM1 2.29289L2.29289 1H1V2.29289Z" fill="#0E0050" />
            </svg>
        }],
    }
    const byOpacity: IFilterOption = {
        title: "Прозорість",
        options: [{
            option: "Напівпрозорі", optionIcon: <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M0.0189448 6C0.00639146 6.16502 0 6.33176 0 6.5C0 6.66824 0.00639146 6.83498 0.0189448 7C0.274257 10.3562 3.07839 13 6.5 13C9.92162 13 12.7257 10.3562 12.9811 7C12.9936 6.83498 13 6.66824 13 6.5C13 6.33176 12.9936 6.16502 12.9811 6C12.7257 2.64378 9.92162 0 6.5 0C3.07839 0 0.274257 2.64378 0.0189448 6ZM1.02242 7C1.27504 9.80325 3.63098 12 6.5 12C9.36902 12 11.725 9.80325 11.9776 7H1.02242ZM11.9776 6H1.02242C1.27504 3.19675 3.63098 1 6.5 1C9.36902 1 11.725 3.19675 11.9776 6Z" fill="#0E0050" />
                <path d="M6.5 12.5C10.0899 12.5 13 9.58985 13 6H0C0 9.58985 2.91015 12.5 6.5 12.5Z" fill="#0E0050" />
            </svg>
        }, {
            option: "Блекаут", optionIcon: <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 6.5C13 10.0899 10.0899 13 6.5 13C2.91015 13 0 10.0899 0 6.5C0 2.91015 2.91015 0 6.5 0C10.0899 0 13 2.91015 13 6.5Z" fill="#0E0050" />
            </svg>
        }],
    }
    const byCollection: IFilterOption = {
        title: "Колекція",
        options: [{ option: "Альмерія" }, { option: "Арома" }, { option: "Бірма" }, { option: "Бостон" }, { option: "Ельба" }, { option: "Камелія" }, { option: "Лондон" }, { option: "Льон" }, { option: "Льон Black Out" }, { option: "Маніла" }, { option: "Невада" }, { option: "Париж" }, { option: "Пуебло" }, { option: "Рим" }, { option: "Сафарі" }, { option: "Сіде" }, { option: "Сіде Black out" }, { option: "Сідней" }, { option: "Соул" }, { option: "Сфера Black out" }, { option: "Тальник" }, { option: "Флоренція" }, { option: "Шовк" }
        ],
    }
    const byPrice: IFilterOption = {
        title: "Категорія ціни",
        options: [{ option: "1 категорія" }, { option: "2 категорія" }, { option: "3 категорія" }, { option: "4 категорія" }]
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
        <>
            <div className="flex items-center gap-[10px]">
                <DropdownFilterSingle filterOption={byMain} styles={{ listStyle: 'w-full' }} />
                <DropdownFilterMultiple filterOption={byColor} />
                <DropdownFilterSingle filterOption={byDesign} />
                <DropdownFilterSingle filterOption={byOpacity} />
                <DropdownFilterMultiple filterOption={byCollection} />
                <DropdownFilterMultiple filterOption={byPrice} />
                <FilterByLevelPrice />
            </div>
            <CatalogList />
        </>
    );
}

