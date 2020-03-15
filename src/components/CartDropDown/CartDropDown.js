import React from "react";
import CartItem from "../CartItem/CartItem";
import Button from "../Button/Button";

import "./CartDropDown.css";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { toggleCartDisplay } from "../../redux/cart/cartAction";

const CartDropDown = ({ cartItems, history, dispatch }) => {

    return (

        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.length ?

                        cartItems.map(cartItem => (
                            <CartItem key={cartItem.id} item={cartItem} />
                        ))
                        :
                        <div className="empty-cart-message">
                            <div className="initial-emoji"><span role="img" aria-label="asd">🔥👓👔👖</span></div>
                            <div className="initial-message">Grab some LABEL and look cool around...</div>
                        </div>
                }
            </div>
            <Button onClick={() => {
                history.push("/checkout");
                dispatch(toggleCartDisplay());
            }}>Go to Checkout</Button>
        </div>
    );
}


const mapStateToProps = ({ cart: { cartItems } }) => {

    return ({
        cartItems
    })
}

const connectedComponent = connect(mapStateToProps, null);

export default withRouter(connectedComponent(CartDropDown));