import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import sort from "../../Components/Sort";





type Sort = {
    name: string;
    sortProperty: 'rating' | 'title' | 'price'
}

export interface FilterSliceState {
    searchValue: string;
    pageCount: number;
    categoryId: number;
    sort: Sort;
}


const initialState: FilterSliceState = {
    searchValue: '',
    pageCount: 1,
    categoryId: 0,
    sort: {
        name: 'популярности',
        sortProperty: 'rating'
    }
}

const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setCategoryId(state, action: PayloadAction<number>) {
            state.categoryId = action.payload
        },
        setSearchValue(state, action : PayloadAction<string>) {
            state.searchValue = action.payload
        },
        setSort(state, action: PayloadAction<Sort>) {
            state.sort = action.payload
        },
        setPageCount(state, action: PayloadAction<number>) {
            state.pageCount = action.payload
        },
        setFilters(state, action: PayloadAction<FilterSliceState>) {
            if (Object.keys(action.payload).length) {
                state.sort = action.payload.sort
                state.pageCount = Number(action.payload.pageCount)
                state.categoryId = Number(action.payload.categoryId)
            } else {
                state.pageCount = 1
                state.categoryId = 0
                state.sort = {
                    name: 'популярности',
                    sortProperty: 'rating'
                }
            }
        }

    }
})


export const {setCategoryId, setSort, setPageCount, setSearchValue, setFilters} = filterSlice.actions

export default filterSlice.reducer