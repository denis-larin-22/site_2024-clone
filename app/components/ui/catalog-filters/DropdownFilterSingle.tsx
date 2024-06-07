'use client'

import { Button } from "@nextui-org/react";
import { useState, useEffect, useRef } from 'react';
import { motion } from "framer-motion";
import { openSansFont } from "../fonts";
import { IFilterProps } from "./types";
import { ArrowIcon } from "../../assets/icons";


// Dropdown list of options with single choice
export function DropdownFilterSingle({ filterOption, styles }: IFilterProps) {
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