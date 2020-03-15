import React from "react";

import "./CheckoutItem.css";

import { connect } from "react-redux";
import { removeItem, addItem, quantityRemove } from "../../redux/cart/cartAction";

const CheckoutItem = ({ cartItem, clearItem, addItemPeep, quantityRemovePeep }) => {

    const { name, price, quantity } = cartItem;

    return (

        <div className="checkout-item">
            <div className="image-container">
                <div className="item-image"></div>
            </div>
            <div className="name">{name}</div>
            <div className="quantity">
                <div className="arrowl" onClick={() => { quantityRemovePeep(cartItem) }}>&#10094;</div>
                <span>{quantity}</span>
                <div className="arrowr" onClick={() => { addItemPeep(cartItem) }}>&#10095;</div>
            </div>
            <div className="price">${price}</div>
            <div className="remove-button" onClick={() => clearItem(cartItem)}>&#10005;</div>

        </div>
    );

}


const mapDispatchToProps = dispatch => {

    return ({
        clearItem: (item) => dispatch(removeItem(item)),
        addItemPeep: (item) => dispatch(addItem(item)),
        quantityRemovePeep: (item) => dispatch(quantityRemove(item))
    })

}


const connectedComponent = connect(null, mapDispatchToProps);

export default connectedComponent(CheckoutItem);