import { configureStore } from '@reduxjs/toolkit'
import filterSlice from "./slice/filterSlice";
import cart from "./slice/cartSlice";
import ticket from "./slice/TicketSlice";
import {useDispatch} from "react-redux";

export const store = configureStore({
    reducer: {
        filterSlice, cart, ticket
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()