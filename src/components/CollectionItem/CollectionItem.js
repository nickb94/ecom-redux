import React from "react";

import "./CollectionItem.css";

import Button from "../Button/Button";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cartAction";

const CollectionItem = ({ item, addItem }) => {

    const { name, price } = item;

    return (
        <div className="collection-item">
            <div className="item-display">
                <Button className="addition-button" onClick={() => addItem(item)}><span role="img" aria-label="2">🏷️</span></Button>
            </div>
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">${price}</span>
            </div>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {

    return ({
        addItem: (item) => dispatch(addItem(item))
    })

}

const connectedComponent = connect(null, mapDispatchToProps);

export default connectedComponent(CollectionItem);
