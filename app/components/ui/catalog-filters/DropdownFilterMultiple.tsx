'use client'

import { Button } from "@nextui-org/react";
import { useState, useEffect, useRef } from 'react';
import { motion } from "framer-motion";
import { IFilterProps } from "./types";
import { openSansFont } from "../fonts";
import { ArrowIcon } from "../../assets/icons";

export function DropdownFilterMultiple({ filterOption, styles }: IFilterProps) {
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