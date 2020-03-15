import { addItemToCart } from "./cartUtility";
import { removeQuantityCart } from "./cartUtility";


const initialState = {

    hidden: true,
    cartItems: []
}

const cartReducer = (state = initialState, actions) => {


    switch (actions.type) {
        case "TOGGLE_CART_DISPLAY":

            return {
                ...state,
                hidden: !state.hidden
            }

        case "ADD_ITEM":
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, actions.payload)
            }
        case "REMOVE_ITEM":
            return {
                ...state,
                cartItems: state.cartItems.filter(cartItem => cartItem.id !== actions.payload.id)
            }
        case "QUANTITY_REMOVE":
            return {
                ...state,
                cartItems: removeQuantityCart(state.cartItems, actions.payload)
            }

        default:
            return state
    }

}
export default cartReducer;