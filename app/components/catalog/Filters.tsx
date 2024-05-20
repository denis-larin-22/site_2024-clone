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
    filterOption: IFilterOption
}

// Dropdown list of options with single choice
export function DropdownFilterSingle({ filterOption }: IProps) {
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
                className="py-3 px-4 min-w-[184px] rounded-3xl bg-white text-base text-t-blue-dark font-medium flex items-center justify-between gap-5"
                onClick={() => setIsVisible(!isVisible)}
            >
                {optionTitle}
                <Arrow isOpen={isVisible} />
            </Button>
            {
                isVisible &&
                <motion.ul
                    className={`${openSansFont.className} text-t-blue-dark absolute z-50 w-full bg-white p-[10px] rounded-2xl mt-[5px]`}
                    variants={containerAnimation}
                    initial="hidden"
                    animate="visible"
                >
                    {filterOption.options.map(({ option, optionIcon }, index) => (
                        <motion.li
                            key={index}
                            className={`${selectedOption === option ? 'bg-[#F6F5F8]' : 'bg-none'} cursor-pointer p-1 rounded-3xl text-sm hover:bg-[#F6F5F8] duration-150 flex justify-between`}
                            variants={itemAnimation}
                            onClick={() => {
                                if (!filterOption.title) {
                                    setOptionTitle(option);
                                }
                                setSelectedOption(option);
                                setIsVisible(false);
                            }}
                        >
                            <p className="flex items-center gap-1">
                                {optionIcon !== undefined ? optionIcon : null}
                                {option}
                            </p>
                            {selectedOption === option && <span>✔</span>}
                        </motion.li>
                    ))}
                </motion.ul>
            }
        </div>
    )
}

// Dropdown list of options with multiple choice
export function DropdownFilterMultiple({ filterOption }: IProps) {
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
                className="py-3 px-4 min-w-[184px] rounded-3xl bg-white text-base font-medium flex items-center justify-between gap-5"
                onClick={() => setIsVisible(!isVisible)}
            >
                <p className="relative">
                    {filterOption.title}
                    {selectedOptions.length !== 0 ?
                        <span className="absolute top-0 -right-[18px] w-[17px] h-[17px] text-[13px] font-medium  text-white inline-flex items-center justify-center rounded-full bg-t-blue">{selectedOptions.length}</span>
                        :
                        null
                    }
                </p>
                <Arrow isOpen={isVisible} />
            </Button>
            {isVisible && (
                <motion.ul
                    className={`${openSansFont.className} absolute z-50 w-full bg-white p-[10px] rounded-2xl mt-[5px]`}
                    variants={containerAnimation}
                    initial="hidden"
                    animate="visible"
                >
                    {filterOption.options.map(({ option, optionIcon }, index) => (
                        <motion.li
                            key={index}
                            className={`${selectedOptions.includes(option) ? 'bg-[#F6F5F8]' : 'bg-none'} cursor-pointer p-1 rounded-3xl text-sm hover:bg-[#F6F5F8] duration-150 flex justify-between`}
                            variants={itemAnimation}
                            onClick={() => toggleOption(option)}
                        >
                            <p className="flex items-center gap-2">
                                {optionIcon === undefined ? null : optionIcon}
                                {option}
                            </p>
                            {selectedOptions.includes(option) && <span>✔</span>}
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
            <Price isRotated={isIconRotated} />
        </button>
    )
}

// ICONS

// Arrow svg icon
function Arrow({ isOpen }: { isOpen: boolean }) {
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

// Price filter icon
function Price({ isRotated }: { isRotated: boolean }) {
    return (
        <svg width="35" height="34" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg" className={isRotated ? 'rotate-180 duration-150' : 'duration-150'}>
            <rect width="35" height="34" rx="11.2445" fill="white" />
            <path d="M11.0418 9.30737L6.0005 14.8405M11.0418 9.30737L16.083 14.8405M11.0418 9.30737L11.0418 25.292" stroke="#1000E5" strokeWidth="1.97804" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M23.9582 24.9846L28.9995 19.4514M23.9582 24.9846L18.917 19.4514M23.9582 24.9846L23.9582 8.99996" stroke="#BFC1CA" strokeWidth="1.97804" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}