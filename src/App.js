import React, {Component} from 'react';
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SingInSignOut from "./pages/sign-in-sign-up/sign-in-sign-up.component";
import {Route, Switch} from "react-router"
import {auth} from "./firebase/firebase.utils";
import "./App.css"

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: null
        }

    }

    unsubscribeFromAuth = null

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
            this.setState({currentUser: user})
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth()
    }


    render(){
        return (
            <div>
                <Header currentUser={this.state.currentUser}/>
                <Switch>
                    <Route exact path={"/"} component={HomePage}/>
                    <Route exact path="/shop" component={ShopPage}/>
                    <Route exact path="/signin" component={SingInSignOut}/>
                </Switch>
            </div>
        );
    }

}

export default App;
