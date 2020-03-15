import React from "react";
import "./CartItem.css";

const CartItem = ({ item }) => {

    const { name, price, quantity } = item;

    return (
        <div className="cart-item">
            <div className="image"></div>
            <div className="item-details">
                <div className="name">{name}</div>
                <div className="price">{quantity} x ${price}</div>
            </div>
        </div>
    );

}
export default CartItem;