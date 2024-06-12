'use client'

import { Button } from "@nextui-org/react";
import { useState } from 'react';
import { motion } from "framer-motion";
import { IFilterProps } from "./types";
import { openSansFont } from "../fonts";
import { ArrowIcon } from "../../assets/icons";
import { getFilterAnimation } from "@/app/lib/utils/animations";

export function DropdownFilterMultiple({ filterOption, isOpen, onToggle }: IFilterProps) {
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

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
    const { containerAnimation, itemAnimation } = getFilterAnimation()

    return (
        <div className="relative text-t-blue-dark">
            <Button
                className="py-3 px-4 rounded-3xl text-t-blue-dark bg-white text-sm font-medium flex items-center justify-between gap-4"
                onClick={onToggle}
            >
                <p className="relative">
                    {filterOption.title}
                    {selectedOptions.length !== 0 ?
                        <span className="absolute -top-[6px] -right-4 w-[17px] h-[17px] text-[13px] font-medium  text-white inline-flex items-center justify-center rounded-full bg-t-blue">{selectedOptions.length}</span>
                        :
                        null
                    }
                </p>
                <ArrowIcon isOpen={isOpen} />
            </Button>
            {isOpen && (
                <>
                    <motion.ul
                        className={`${openSansFont.className} fixed left-0 mobile:absolute z-50 w-screen mobile:w-fit max-h-[450px] overflow-y-auto bg-t-pale mobile:bg-white p-5 mobile:p-1.5 rounded-bl-[35px] rounded-br-[35px] mobile:rounded-2xl mt-[5px] flex flex-row flex-wrap mobile:flex-nowrap mobile:flex-col gap-1.5 mobile:gap-y-[2px]`}
                        variants={containerAnimation}
                        initial="hidden"
                        animate="visible"
                    >
                        {filterOption.options.map(({ option, optionIcon }, index) => (
                            <motion.li
                                key={index}
                                className={`${selectedOptions.includes(option) ? 'bg-t-blue text-white mobile:text-inherit mobile:bg-t-pale' : 'bg-white mobile:bg-none'} h-7 relative py-[9px] px-[18px] mobile:px-2 cursor-pointer p-1 rounded-3xl mobile:hover:bg-t-pale duration-150 flex items-center ${optionIcon === undefined ? '' : 'gap-x-[7px]'}`}
                                variants={itemAnimation}
                                onClick={() => toggleOption(option)}
                            >
                                <span className="inline-block h-5 absolute left-1 mobile:static">{optionIcon === undefined ? null : optionIcon}</span>
                                <p className={`${optionIcon ? 'ml-0 mobile:ml-2' : ''} text-nowrap flex items-center gap-x-[5px] text-sm font-normal`}>{option}</p>
                            </motion.li>
                        ))}
                    </motion.ul>
                    {/* Blured space (mobile) */}
                    <div onClick={onToggle} className="block mobile:hidden fixed inset-0 top-32 z-40 bg-[#7E7E7E]/60 backdrop-blur-sm"></div>
                </>
            )}
        </div>
    );
}