export const addItemToCart = (cartItems, cartItemToAdd) => {

    const exists = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

    if (exists) {

        return cartItems.map(cartItem =>

            (cartItem.id === cartItemToAdd.id) ?
                {
                    ...cartItem, quantity: cartItem.quantity + 1 //item present, add 1
                }
                : cartItem //newItem

        )
    }
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}


export const removeQuantityCart = (cartItems, carItemQuantityRemove) => {

    const existing = cartItems.find(cartItem =>
        cartItem.id === carItemQuantityRemove.id
    )

    if (existing.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== carItemQuantityRemove.id) //returnrender new array with unmatched id 
    }
    return cartItems.map(cartItem =>
        cartItem.id === carItemQuantityRemove.id
            ?
            { ...cartItem, quantity: cartItem.quantity - 1 }
            :
            cartItem
    )

}