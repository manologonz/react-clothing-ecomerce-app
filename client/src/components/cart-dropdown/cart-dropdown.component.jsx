import React from 'react';
import CartItem from "../cart-item/cart-item.component";
import {connect} from "react-redux"
import {withRouter} from "react-router-dom";
import {selectCartItems} from "../../redux/cart/cart.selectors";
import {createStructuredSelector} from "reselect";
import {toggleCartHidden} from "../../redux/cart/cart.actions";
import {
    CartDropdownButton,
    CartDropdownContainer,
    CartItemsContainer,
    EmptyMessageContainer
} from "./cart-dropdown.styles";

const CartDropdown = ({cartItems, history, dispatch}) => {
    return (
        <CartDropdownContainer>
            <CartItemsContainer>
                {
                    cartItems.length ?
                    cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/> )
                        : <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
                }
            </CartItemsContainer>
            <CartDropdownButton onClick={() => {
                history.push('/checkout')
                dispatch(toggleCartHidden())
            }}>GO TO CHECKOUT</CartDropdownButton>
        </CartDropdownContainer>
    );
};

const ms2p = (state) => createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(ms2p)(CartDropdown));
