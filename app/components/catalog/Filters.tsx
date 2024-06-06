'use client'

import { Button } from "@nextui-org/react";
import { useState, useEffect, useRef } from 'react';
import { motion } from "framer-motion";
import { openSansFont } from "../ui/fonts";


// Animation parameters (Framer Motion lib.)
const containerAnimation = {
    hidden: { opacity: 1, scale: 0, y: "-100px" },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            delayChildren: 0.1,
            staggerChildren: 0.02
        }
    }
};
const itemAnimation = {
    hidden: { y: 5, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
};

//   Types
export interface IFilterOption {
    title?: string,
    options: { option: string, optionIcon?: JSX.Element }[],
}

interface IProps {
    filterOption: IFilterOption,
    styles?: {
        buttonStyle?: string,
        listStyle?: string,
        listItemStyle?: string
    }
}

// Dropdown list of options with single choice
export function DropdownFilterSingle({ filterOption, styles }: IProps) {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const [optionTitle, setOptionTitle] = useState<string>(filterOption.title || filterOption.options[0].option);
    const [selectedOption, setSelectedOption] = useState<string>(optionTitle);

    return (
        <div ref={dropdownRef} className="relative">
            <Button
                className={`py-3 px-4 rounded-3xl bg-white text-sm text-t-blue-dark font-medium flex items-center justify-between gap-4 ${styles ? styles.buttonStyle : ''}`}
                onClick={() => setIsVisible(!isVisible)}
            >
                {optionTitle}
                <ArrowIcon isOpen={isVisible} />
            </Button>
            {
                isVisible &&
                <motion.ul
                    className={`${openSansFont.className} text-t-blue-dark absolute z-50 mt-[5px] py-[6px] px-[5px] w-fit bg-white rounded-2xl flex flex-col gap-y-[2px] ${styles ? styles.listStyle : ''}`}
                    variants={containerAnimation}
                    initial="hidden"
                    animate="visible"
                >
                    {filterOption.options.map(({ option, optionIcon }, index) => (
                        <motion.li
                            key={index}
                            className={`${selectedOption === option ? 'bg-t-pale' : 'bg-none'} h-7 px-2 cursor-pointer rounded-3xl text-sm hover:bg-t-pale duration-150 flex justify-between ${styles ? styles.listItemStyle : ''}`}
                            variants={itemAnimation}
                            onClick={() => {
                                if (!filterOption.title) {
                                    setOptionTitle(option);
                                }
                                setSelectedOption(option);
                                setIsVisible(false);
                            }}
                        >
                            <p className="flex items-center gap-1 text-sm font-normal">
                                {optionIcon !== undefined ? optionIcon : null}
                                {option}
                            </p>
                        </motion.li>
                    ))}
                </motion.ul>
            }
        </div>
    )
}

// Dropdown list of options with multiple choice
export function DropdownFilterMultiple({ filterOption, styles }: IProps) {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleOption = (option: string) => {
        const updatedOptions = [...selectedOptions];
        const index = updatedOptions.indexOf(option);
        if (index > -1) {
            updatedOptions.splice(index, 1);
        } else {
            updatedOptions.push(option);
        }
        setSelectedOptions(updatedOptions);
    };

    return (
        <div ref={dropdownRef} className="relative text-t-blue-dark">
            <Button
                className={`py-3 px-4 rounded-3xl text-t-blue-dark bg-white text-sm font-medium flex items-center justify-between gap-4 ${styles ? styles.buttonStyle : ''}`}
                onClick={() => setIsVisible(!isVisible)}
            >
                <p className="relative">
                    {filterOption.title}
                    {selectedOptions.length !== 0 ?
                        <span className="absolute -bottom-[6px] tablet:-top-[6px] -right-4 w-[17px] h-[17px] text-[13px] font-medium  text-white inline-flex items-center justify-center rounded-full bg-t-blue">{selectedOptions.length}</span>
                        :
                        null
                    }
                </p>
                <ArrowIcon isOpen={isVisible} />
            </Button>
            {isVisible && (
                <motion.ul
                    className={`${openSansFont.className} absolute z-50 w-fit max-h-[450px] overflow-y-auto bg-white p-[6px] rounded-2xl mt-[5px] flex flex-col gap-y-[2px] ${styles ? styles.listStyle : ''}`}
                    variants={containerAnimation}
                    initial="hidden"
                    animate="visible"
                >
                    {filterOption.options.map(({ option, optionIcon }, index) => (
                        <motion.li
                            key={index}
                            className={`${selectedOptions.includes(option) ? 'bg-t-pale' : 'bg-none'} h-7 px-2 cursor-pointer p-1 rounded-3xl hover:bg-t-pale duration-150 flex justify-between ${styles ? styles.listItemStyle : ''}`}
                            variants={itemAnimation}
                            onClick={() => toggleOption(option)}
                        >
                            <p className="text-nowrap flex items-center gap-x-[5px] text-sm font-normal">
                                {optionIcon === undefined ? null : optionIcon}
                                {option}
                            </p>
                        </motion.li>
                    ))}
                </motion.ul>
            )}
        </div>
    );
}

// Filter by price
export function FilterByLevelPrice() {
    const [priceOrder, setPriceOrder] = useState<"fromHigher" | "fromLower">("fromLower")
    const isIconRotated = priceOrder === "fromHigher";

    return (
        <button
            className="w-10 h-10 rounded-full bg-white flex items-center justify-center"
            onClick={() => {
                const opositeOrder = priceOrder === "fromHigher" ? "fromLower" : "fromHigher";
                setPriceOrder(opositeOrder);
            }}
        >
            <PriceIcon isRotated={isIconRotated} />
        </button>
    )
}

// ICONS

function ArrowIcon({ isOpen }: { isOpen: boolean }) {
    return (
        <svg width="20" height="13" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg"
            style={{
                width: '16px',
                height: '9px',
                transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.3s ease-in-out',
            }}
        >
            <path d="M2 2L10 11L18 2" stroke="#1000E5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

function PriceIcon({ isRotated }: { isRotated: boolean }) {
    return (
        <svg width="35" height="34" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg" className={isRotated ? 'rotate-180 duration-150' : 'duration-150'}>
            <rect width="35" height="34" rx="11.2445" fill="white" />
            <path d="M11.0418 9.30737L6.0005 14.8405M11.0418 9.30737L16.083 14.8405M11.0418 9.30737L11.0418 25.292" stroke="#1000E5" strokeWidth="1.97804" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M23.9582 24.9846L28.9995 19.4514M23.9582 24.9846L18.917 19.4514M23.9582 24.9846L23.9582 8.99996" stroke="#BFC1CA" strokeWidth="1.97804" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}