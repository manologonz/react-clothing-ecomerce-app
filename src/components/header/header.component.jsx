import React from 'react';
import {ReactComponent as Logo} from "../../assets/crown.svg";
import {connect} from "react-redux"
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import {createStructuredSelector} from "reselect";
import {selectCartHidden} from "../../redux/cart/cart.selectors";
import {selectCurrentUser} from "../../redux/user/user.selector";
import {signOutStart} from "../../redux/user/user.actions";

import {
    HeaderContainer,
    LogoContainer,
    OptionsContainer,
    OptionDiv,
    OptionLink
} from "./header.styles";

const Header = ({currentUser, hidden, signOutStart}) => {
    return (
        <HeaderContainer>
            <LogoContainer to="/">
                <Logo className="logo"/>
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to="/shop">SHOP</OptionLink>
                <OptionLink to="/shop">CONTACT</OptionLink>
                {
                    currentUser ? (
                        <OptionDiv onClick={signOutStart}>
                            SIGN OUT
                        </OptionDiv>
                    ) : (
                        <OptionLink to="/signin">SIGN IN</OptionLink>
                    )
                }
                <CartIcon/>
            </OptionsContainer>
            {
                (!hidden ? <CartDropdown/> : null)
            }
        </HeaderContainer>
    );
};

const ms2p = (state) => createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

const ma2p = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
})

export default connect(ms2p, ma2p)(Header);
