import { IFilterOption } from "../../catalog/Filters"

export interface IFilterProps {
    filterOption: IFilterOption,
    styles?: {
        buttonStyle?: string,
        listStyle?: string,
        listItemStyle?: string
    }
}