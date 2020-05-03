import React from 'react';
import {connect} from "react-redux";
import {clearItemFromCart, removeItem, addItem} from "../../redux/cart/cart.actions";
import "./checkout-item.component.scss"

const CheckoutItem = ({cartItem, clearItem, addItem, removeItem}) => {
    const {name, imageUrl, price, quantity} = cartItem
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item"/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div
                    onClick={() => removeItem(cartItem)}
                    className="arrow"
                >
                    &#10094;
                </div>
                <span className="value">{quantity}</span>
                <div
                    onClick={() => addItem(cartItem)}
                    className="arrow"
                >
                    &#10095;
                </div>
            </span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={
                () => clearItem(cartItem)
            }>
                &#10005;
            </div>
        </div>
    );
};

const ma2p = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})

export default connect(null, ma2p)(CheckoutItem);
