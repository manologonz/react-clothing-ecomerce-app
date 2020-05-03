import React, {Component} from 'react';
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import CheckoutPage from "./pages/checkout/checkout.component";
import Header from "./components/header/header.component";
import SingInSignOut from "./pages/sign-in-sign-up/sign-in-sign-up.component";
import {Route, Switch, Redirect} from "react-router-dom"
import {connect} from "react-redux"
import {auth} from "./firebase/firebase.utils";
import {createUserProfileDocument} from "./firebase/firebase.utils";
import {setCurrentUser} from "./redux/user/user.actions";
import {selectCurrentUser} from "./redux/user/user.selector";
import {createStructuredSelector} from "reselect";
import "./App.css"

class App extends Component {

    unsubscribeFromAuth = null

    componentDidMount() {
        const {setCurrentUser} = this.props;
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if(userAuth){
                const userRef = await createUserProfileDocument(userAuth)
                userRef.onSnapshot(snapshot => {
                    setCurrentUser({
                            id: snapshot.id,
                            ...snapshot.data()
                    });
                });
            } else {
                setCurrentUser(userAuth);
            }
        })
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
    currentUser: selectCurrentUser
})

const ma2p = (dispatch) => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(ms2p, ma2p)(App);
