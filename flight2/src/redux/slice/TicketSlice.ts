import {createSlice, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";
import {CartItem} from "./cartSlice";

 export enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error'
}



type FetchTicketsArgs = Record<string, string>


export const fetchTickets = createAsyncThunk<Ticket[], Record<string, string>>('ticket/fetchTicketsStatus',
    async (params: Record<string, string>) => {
        const {category, search, pageCount, orderType, selectedSort} = params
        const {data} = await axios.get<Ticket[]>(`https://64baabff5e0670a501d68343.mockapi.io/Items?page=${pageCount}&limit=4&${category}&sortBy=${selectedSort}&order=${orderType}${search}`);

        return data
    }
)

type Ticket = {
    id: string;
    title: string;
    price: number;
    imageUrl: string;
    schedule: number[];
    types: number[];
}


interface TicketSliceState {
    items: Ticket[];
    status: Status.LOADING | Status.SUCCESS | Status.ERROR;
}


const initialState: TicketSliceState = {
    items: [],
    status: Status.LOADING, // loading | success | error
}

const ticketSlice = createSlice({
    name: 'ticket',
    initialState,
    reducers: {

        setItems(state, action: PayloadAction<Ticket[]>) {
            state.items = action.payload
        }
    },
    // extraReducers: {
    //     [fetchTickets.pending]: (state) => {
    //         state.status = 'loading'
    //         state.items = []
    //     },
    //     [fetchTickets.fulfilled]: (state, action) => {
    //         state.items = action.payload
    //         state.status = 'success'
    //     },
    //     [fetchTickets.rejected]: (state) => {
    //         state.status = 'error'
    //         state.items = []
    //     },
    // }




    extraReducers: builder => {
        builder.addCase(fetchTickets.pending, (state, action) => {
            state.status = Status.LOADING
            state.items = []
        });

        builder.addCase(fetchTickets.fulfilled, (state, action) => {
            state.status = Status.SUCCESS
            state.items = action.payload
        });

        builder.addCase(fetchTickets.rejected, (state, action) => {
            state.status = Status.ERROR
            state.items = []
        });
    }
})

export const {setItems} = ticketSlice.actions

export default ticketSlice.reducer














