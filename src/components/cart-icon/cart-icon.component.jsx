import React from 'react';
import {connect} from "react-redux";
import {toggleCartHidden} from "../../redux/cart/cart.actions";
import {selectCartItemsCount} from "../../redux/cart/cart.selectors";
import {createStructuredSelector} from "reselect";
import {CartContainer, ItemCountContainer, ShoppingIcon} from "./cart-icon.styles";

const CartIcon = ({toggleCartHidden, itemCount}) => {
    return (
        <CartContainer onClick={toggleCartHidden}>
            <ShoppingIcon/>
            <ItemCountContainer>{itemCount}</ItemCountContainer>
        </CartContainer>
    );
};

const ms2p = (state) => createStructuredSelector({
    itemCount: selectCartItemsCount
})

const ma2p = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})


export default connect(ms2p, ma2p)(CartIcon);
