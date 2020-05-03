import React from 'react';
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg"
import {connect} from "react-redux";
import {toggleCartHidden} from "../../redux/cart/cart.actions";
import {selectCartItemsCount} from "../../redux/cart/cart.selectors";
import {createStructuredSelector} from "reselect";
import "./cart-icon.styles.scss"

const CartIcon = ({toggleCartHidden, itemCount}) => {
    return (
        <div className="cart-icon" onClick={toggleCartHidden}>
            <ShoppingIcon className="shopping-icon"/>
            <span className="item-count">{itemCount}</span>
        </div>
    );
};

const ms2p = (state) => createStructuredSelector({
    itemCount: selectCartItemsCount
})

const ma2p = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})


export default connect(ms2p, ma2p)(CartIcon);
