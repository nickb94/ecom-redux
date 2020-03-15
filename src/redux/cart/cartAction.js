export const toggleCartDisplay = () =>{

return({
    type: "TOGGLE_CART_DISPLAY" //payload optional
})

}

export const addItem = item =>{

    return ({
        type: "ADD_ITEM",
        payload: item
    })
}

export const removeItem = item => {

    return({
        type: "REMOVE_ITEM",
        payload: item
    })
} 

export const quantityRemove = item =>{

    return({
        type: "QUANTITY_REMOVE",
        payload: item
    })
}