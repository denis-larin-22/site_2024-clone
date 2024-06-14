'use client'

import { useEffect, useRef, useState } from "react"
import { DropdownFilterMultiple } from "../ui/catalog-filters/DropdownFilterMultiple"
import { DropdownFilterSingle } from "../ui/catalog-filters/DropdownFilterSingle"
import { FilterByLevelPrice } from "../ui/catalog-filters/FilterByLevelPrice"

export function Filters() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [openFilterIndex, setOpenFilterIndex] = useState<number | null>(null);
    const filters = getFiltersOptions();

    const handleToggle = (index: number) => {
        setOpenFilterIndex(prevIndex => (prevIndex === index ? null : index));
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
            setOpenFilterIndex(null);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);


    return (
        <div ref={containerRef} className="flex items-start justify-normal xl:justify-center gap-[10px] w-full min-h-[500px] pl-0 mobile:pl-[60px] xl:pl-0 overflow-x-auto hide-scrollbar">
            {filters.map((filter, index) => {
                const isOpen = openFilterIndex === index;

                if (filter.multichoice) {
                    return (
                        <DropdownFilterMultiple
                            key={index}
                            filterOption={filter}
                            isOpen={isOpen}
                            onToggle={() => handleToggle(index)}
                            wrapperStyles={(openFilterIndex !== null && openFilterIndex !== index) ? 'grayscale mobile:grayscale-0 opacity-40 mobile:opacity-100 duration-150' : ''}
                        />
                    )
                } else {
                    return (
                        <DropdownFilterSingle
                            key={index}
                            filterOption={filter}
                            isOpen={isOpen}
                            onToggle={() => handleToggle(index)}
                            wrapperStyles={(openFilterIndex !== null && openFilterIndex !== index) ? 'grayscale mobile:grayscale-0 opacity-40 mobile:opacity-100 duration-150' : ''}
                        />
                    )
                }
            })}
            <FilterByLevelPrice />
        </div>
    )
}

export interface IFilterOption {
    title?: string,
    options: { option: string, optionIcon?: JSX.Element }[],
    multichoice: boolean
}

function getFiltersOptions(): IFilterOption[] {
    const byMain: IFilterOption = {
        options: [{ option: "За популярністю" }, { option: "За акціями" }, { option: "За новинками" }, { option: "За алфавітом" }],
        multichoice: false
    }
    const byDesign: IFilterOption = {
        title: "Дизайн",
        options: [{
            option: "Однотонний", optionIcon: <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M1.3 1.3V11.7H11.7V1.3H1.3ZM1.3 0C0.58203 0 0 0.58203 0 1.3V11.7C0 12.418 0.58203 13 1.3 13H11.7C12.418 13 13 12.418 13 11.7V1.3C13 0.58203 12.418 0 11.7 0H1.3Z" fill="#0E0050" />
            </svg>

        }, {
            option: "З малюнком", optionIcon: <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M1.3 0C0.58203 0 0 0.58203 0 1.3V11.7C0 12.418 0.58203 13 1.3 13H11.7C12.418 13 13 12.418 13 11.7V1.3C13 0.58203 12.418 0 11.7 0H1.3ZM6.88076 1.3H4.81924L1.3 4.81924V6.88076L6.88076 1.3ZM1.3 8.71924V10.7808L10.7808 1.3H8.71924L1.3 8.71924ZM11.7 2.21924L2.21924 11.7H5.51541L11.7 5.00003V2.21924ZM11.7 6.91664L7.28459 11.7H9.48076L11.7 9.48076V6.91664ZM11.7 11.3192L11.3192 11.7H11.7V11.3192ZM1.3 2.98076L2.98076 1.3H1.3V2.98076Z" fill="#0E0050" />
            </svg>

        }],
        multichoice: false
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
        multichoice: false
    }
    const byCollection: IFilterOption = {
        title: "Колекція",
        options: [{ option: "Альмерія" }, { option: "Арома" }, { option: "Бірма" }, { option: "Бостон" }, { option: "Ельба" }, { option: "Камелія" }, { option: "Лондон" }, { option: "Льон" }, { option: "Льон Black Out" }, { option: "Маніла" }, { option: "Невада" }, { option: "Париж" }, { option: "Пуебло" }, { option: "Рим" }, { option: "Сафарі" }, { option: "Сіде" }, { option: "Сіде Black out" }, { option: "Сідней" }, { option: "Соул" }, { option: "Сфера Black out" }, { option: "Тальник" }, { option: "Флоренція" }, { option: "Шовк" }
        ],
        multichoice: true
    }
    const byPrice: IFilterOption = {
        title: "Категорія ціни",
        options: [{ option: "1 категорія" }, { option: "2 категорія" }, { option: "3 категорія" }, { option: "4 категорія" }],
        multichoice: true
    }
    const byColor: IFilterOption = {
        title: "Колір",
        options: [
            { option: "Бежевий", optionIcon: <span className='inline-block w-[21px] h-[21px] rounded-full bg-[#FAE3B7]'></span> },
            { option: "Білий", optionIcon: <span className='inline-block w-[21px] h-[21px] rounded-full bg-[#FFFFFF] border-1 border-t-blue'></span> },
            { option: "Блакитний", optionIcon: <span className='inline-block w-[21px] h-[21px] rounded-full bg-[#66D4FD]'></span> },
            { option: "Жовтий", optionIcon: <span className='inline-block w-[21px] h-[21px] rounded-full bg-[#FFD056]'></span> },
            { option: "Зелений", optionIcon: <span className='inline-block w-[21px] h-[21px] rounded-full bg-[#48D177]'></span> },
            { option: "Коричневий", optionIcon: <span className='inline-block w-[21px] h-[21px] rounded-full bg-[#AC6C20]'></span> },
            { option: "Помаранчевий", optionIcon: <span className='inline-block w-[21px] h-[21px] rounded-full bg-[#F79D15]'></span> },
            { option: "Рожевий", optionIcon: <span className='inline-block w-[21px] h-[21px] rounded-full bg-[#FF89C9]'></span> },
            { option: "Синій", optionIcon: <span className='inline-block w-[21px] h-[21px] rounded-full bg-[#405CF3]'></span> },
            { option: "Сірий", optionIcon: <span className='inline-block w-[21px] h-[21px] rounded-full bg-[#DBDBDB]'></span> },
            { option: "Срібло", optionIcon: <span className='inline-block w-[21px] h-[21px] rounded-full bg-[#ECECEC]'></span> },
            { option: "Фіолетовий", optionIcon: <span className='inline-block w-[21px] h-[21px] rounded-full bg-[#C464FF]'></span> },
            { option: "Червоний", optionIcon: <span className='inline-block w-[21px] h-[21px] rounded-full bg-[#FF4242]'></span> },
            { option: "Чорний", optionIcon: <span className='inline-block w-[21px] h-[21px] rounded-full bg-[#202020]'></span> }
        ],
        multichoice: true
    }

    return [byMain, byColor, byDesign, byOpacity, byCollection, byPrice];
}