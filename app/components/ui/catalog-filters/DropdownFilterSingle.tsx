'use client'

import { Button } from "@nextui-org/react";
import { useState } from 'react';
import { motion } from "framer-motion";
import { openSansFont } from "../fonts";
import { IFilterProps } from "./types";
import { ArrowIcon } from "../../assets/icons";
import { getFilterAnimation } from "@/app/lib/utils/animations";

// Dropdown list of options with single choice
export function DropdownFilterSingle({ filterOption, isOpen, onToggle }: IFilterProps) {
    const [optionTitle, setOptionTitle] = useState<string>(filterOption.title || filterOption.options[0].option);
    const [selectedOption, setSelectedOption] = useState<string>(optionTitle);

    // Animation parameters (Framer Motion lib.)
    const { containerAnimation, itemAnimation } = getFilterAnimation();

    return (
        <div className="relative">
            <Button
                className="py-3 px-4 rounded-3xl bg-white text-sm text-t-blue-dark font-medium flex items-center justify-between gap-4"
                onClick={() => {
                    onToggle();
                }}
            >
                {optionTitle}
                <ArrowIcon isOpen={isOpen} />
            </Button>
            {
                isOpen &&
                <>
                    <motion.ul
                        className={`${openSansFont.className} text-t-blue-dark fixed left-0 mobile:absolute z-50 mt-[5px] py-[30px] mobile:py-[6px] px-5 mobile:px-[5px] w-screen mobile:w-fit bg-t-pale mobile:bg-white rounded-bl-[35px] rounded-br-[35px] mobile:rounded-2xl flex flex-col gap-y-[2px]`}
                        variants={containerAnimation}
                        initial="hidden"
                        animate="visible"
                    >
                        {filterOption.options.map(({ option, optionIcon }, index) => (
                            <motion.li
                                key={index}
                                className={`${selectedOption === option ? 'bg-white mobile:bg-t-pale' : 'bg-none'} h-[38px] mobile:h-7 px-[18px] mobile:px-2 cursor-pointer rounded-3xl text-sm hover:bg-t-pale duration-150 flex items-center gap-x-3 mobile:gap-x-1.5`}
                                variants={itemAnimation}
                                onClick={() => {
                                    if (!filterOption.title) {
                                        setOptionTitle(option);
                                    }
                                    setSelectedOption(option);
                                    onToggle();
                                }}
                            >
                                <span className="inline-block h-fit">{optionIcon !== undefined ? optionIcon : null}</span>
                                <p className="flex items-center gap-1 text-sm font-normal">{option}</p>
                            </motion.li>
                        ))}
                    </motion.ul>
                    {/* Blured space (mobile) */}
                    <div onClick={onToggle} className="block mobile:hidden fixed inset-0 top-32 z-40 bg-[#7E7E7E]/60 backdrop-blur-sm"></div>
                </>
            }
        </div>
    )
}