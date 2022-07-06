import { fetchCart, fetchUser,fetchTotal } from "../Utils/fetchLocalStorageData"

const userInfo = fetchUser()
const cartInfo = fetchCart();
const total = fetchTotal();

export const initialState = {
    user: userInfo,
    foodItems: null,
    cartShow: false,
    cartItems : cartInfo,
     total: [total],
}

