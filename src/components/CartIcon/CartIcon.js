import React from "react";
import { ReactComponent as LabelIcon } from "../../assets/tag.svg";

import "./CartIcon.css";

import { connect } from "react-redux";
import { toggleCartDisplay } from "../../redux/cart/cartAction";


const CartIcon = ({ toggleCartDisplayPeep, ItemCount }) => {

    return (
        <div className="cart-icon" onClick={toggleCartDisplayPeep}>
            <LabelIcon className="label-icon" />
            <span className="item-count">{ItemCount}</span>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return ({
        toggleCartDisplayPeep: () => dispatch(toggleCartDisplay())
    })
}

const mapStateToProps = ({ cart: { cartItems } }) => {
    return ({

        ItemCount: cartItems.reduce((accumulated, cartItem) =>

            accumulated + cartItem.quantity
            , 0)

    })

}
const connectedComponent = connect(mapStateToProps, mapDispatchToProps);

export default connectedComponent(CartIcon);