import React, {Component} from 'react';
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import CheckoutPage from "./pages/checkout/checkout.component";
import Header from "./components/header/header.component";
import SingInSignOut from "./pages/sign-in-sign-up/sign-in-sign-up.component";
import {Route, Switch, Redirect} from "react-router-dom"
import {connect} from "react-redux"
import {selectCurrentUser} from "./redux/user/user.selector";
import {createStructuredSelector} from "reselect";
import {checkUserSession} from "./redux/user/user.actions";
import "./App.css"

class App extends Component {

    unsubscribeFromAuth = null

    componentDidMount() {
        const {checkUserSession} = this.props;
        checkUserSession()
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth()
    }


    render(){
        return (
            <div>
                <Header/>
                <Switch>
                    <Route exact path={"/"} component={HomePage}/>
                    <Route path="/shop" component={ShopPage}/>
                    <Route exact path={"/checkout"} component={CheckoutPage}/>
                    <Route exact path="/signin"
                           render={() =>(
                               this.props.currentUser ? <Redirect to={"/"}/> : <SingInSignOut/>
                           )}
                    />
                </Switch>
            </div>
        );
    }

}

const ms2p = ({user}) => createStructuredSelector({
    currentUser: selectCurrentUser,
    // collectionsArray: selectCollectionsForPreview
})

const ma2p = dispatch => ({
    checkUserSession: () => dispatch(checkUserSession())
})

export default connect(ms2p, ma2p)(App);
