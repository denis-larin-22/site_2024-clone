import { IFilterOption } from "../../catalog/Filters"

export interface IFilterProps {
    filterOption: IFilterOption,
    isOpen: boolean,
    onToggle: () => void,
    wrapperStyles?: string,
}