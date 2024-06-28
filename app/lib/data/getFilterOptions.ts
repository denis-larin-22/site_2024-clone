import { fetchCollections, fetchColors, fetchDesigns, fetchTransparencies } from "../api/apiRequests"
import { IFilterOption } from "../types"

export async function getFilterOptions() {
    const filterByCriteria: IFilterOption = {
        options: [{ id: 1, name: "За популярністю" }, { id: 2, name: "За акціями" }, { id: 3, name: "За новинками" }, { id: 4, name: "За алфавітом" }],
        multichoice: false
    }
    const filterByColors: IFilterOption = {
        title: "Колір",
        options: await fetchColors(),
        multichoice: true
    }
    const filterByDesigns: IFilterOption = {
        title: "Дизайн",
        options: await fetchDesigns(),
        multichoice: false
    }
    const filterByTransparencies: IFilterOption = {
        title: "Прозорість",
        options: await fetchTransparencies(),
        multichoice: false
    }
    const filterByCollections: IFilterOption = {
        title: "Колекція",
        options: await fetchCollections(),
        multichoice: true
    }
    const filterByPrice: IFilterOption = {
        title: "Категорія ціни",
        options: [{ id: 1, name: "1 категорія" }, { id: 2, name: "2 категорія" }, { id: 3, name: "3 категорія" }, { id: 4, name: "4 категорія" }],
        multichoice: true
    }

    return [filterByCriteria, filterByColors, filterByDesigns, filterByTransparencies, filterByCollections, filterByPrice];
}