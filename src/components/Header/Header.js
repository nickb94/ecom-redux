import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";

import "./Header.css";

import { connect } from "react-redux";
import CartIcon from "../CartIcon/CartIcon";
import CartDropDown from "../CartDropDown/CartDropDown";

const Header = ({ currentUser, hidden }) => {

    return (
        <div className="header">
            <div>
            <Link to="/">
                <div className="logo">LabelInc.</div>
            </Link>
            {
                    currentUser ? 
                    <div className="option-name">Hi {currentUser.displayName}! </div>
                    :
                    null
                }
                </div>
            <div className="options">
                <Link to="/shop">
                    <div className="option">SHOP</div>
                </Link>
                <Link to="/categories">
                    <div className="option">CATEGORY</div>
                </Link>
                {
                    currentUser ?
                        <div className="logged">
                            <span className="option" onClick={() => auth.signOut()}>SIGN OUT</span>
                        </div>
                        :
                        <Link to="/signin">
                            <div className="option">SIGN IN</div>
                        </Link>

                }
                <CartIcon />
            </div>
            {
                hidden ? 
                null:
                <CartDropDown />
            }
           
        </div>
    );
}

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => {
    return ({
        currentUser,
        hidden

    })

}

const connectComponent = connect(mapStateToProps, null);

export default connectComponent(Header);