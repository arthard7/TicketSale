import {CalcTotalPrice} from "./CalcTotalPrice";




export const GetCartFromLocalStorage = () => {
    const data = localStorage.getItem('cart')
    const items = data ? JSON.parse(data) : []
    const totalPrice = CalcTotalPrice(items)

    if (items.length) {
        return {
            items,
            totalPrice
        }
    }

}