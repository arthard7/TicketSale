import {CartItem} from "../redux/slice/cartSlice";



export const CalcTotalPrice = (items: CartItem[]) => {
    return items.reduce((sum, obj) => obj.price * obj.count + sum, 0)
}