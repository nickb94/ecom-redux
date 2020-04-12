import React, { useEffect } from "react";
import { Footer } from "../../components/Footer/Footer";
import "./Checkout.css";

import { connect } from "react-redux";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";

const Checkout = ({ cartItems, total }) => {


    useEffect(() => {

        const ScrollToTop = () => {
            window.scrollTo(0, 0);
            return null;
        };
        ScrollToTop();

    }, []);

    return (
        <>
        <div className="checkout-wrapper">
        <div className="header_label">Checkout Summary</div>
            <div className="checkout-header">
                <div className="checkoutproduct">Product</div>
                <div className="checkoutdescription">Description</div>
                <div className="checkoutquantity">Quantity</div>
                <div className="checkoutprice">Price</div>
                <div className="checkoutremove">Remove</div>
            </div>
            <div className="checkout-items">
                {

                    cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)

                }
            </div>
            <div className="checkout-total">
                <span>Total: $ {total}</span>
            </div>
        </div>
        <Footer />
        </>
    );
}

const mapStateToProps = ({ cart: { cartItems } }) => {

    return ({
        cartItems: cartItems,
        total: cartItems.reduce((accumulated, cartItem) =>

            accumulated + cartItem.quantity * cartItem.price
            , 0)

    });
}

const connectedComponent = connect(mapStateToProps, null);

export default connectedComponent(Checkout);



