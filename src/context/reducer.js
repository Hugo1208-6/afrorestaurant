export const actionType = {
    SET_USER : "SET_USER",
    SET_FOOD_ITEMS : "SET_FOOD_ITEMS",
    SET_SHOW_CART : "SET_SHOW_CART",
    SET_CARTITEMS : "SET_CARTITEMS",
    SET_TOTAL: "SET_TOTAL",
}


const reducer = (state, action) => {
    // console.log(action);

    switch(action.type) {
        case actionType.SET_USER:
            return{
                ...state,
                user : action.user,
            };

             case actionType.SET_FOOD_ITEMS:
            return{
                ...state,
                foodItems : action.foodItems,
            };
            case actionType.SET_SHOW_CART:
            return{
                ...state,
                cartShow : action.cartShow,
            };

              case actionType.SET_CARTITEMS:
            return{
                ...state,
                cartItems : action.cartItems,
            };

            case actionType.SET_TOTAL:
      return {
        ...state,
        total: state.cartItems.map((item) => item.price),
      };
            default:
                return state;
    }
};

export default reducer;