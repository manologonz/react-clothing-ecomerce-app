import React, {useEffect, lazy, Suspense} from 'react';
import Header from "./components/header/header.component";
import {Route, Switch, Redirect} from "react-router-dom"
import {connect} from "react-redux"
import {selectCurrentUser} from "./redux/user/user.selector";
import {createStructuredSelector} from "reselect";
import {checkUserSession} from "./redux/user/user.actions";
import Spinner from "./components/spinner/spinner.component";
import ErrorBoundary from "./components/error-boundary/boundary.component";
import "./App.css"

const HomePage = lazy(() => {
    return import('./pages/homepage/homepage.component')
});
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const SingInSignOut = lazy(() => import('./components/header/header.component'));
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'))


const App = ({checkUserSession, currentUser}) => {

    useEffect(() => {
        checkUserSession()
    }, [checkUserSession]);

    return (
        <div>
            <Header/>
            <Switch>
                <ErrorBoundary>
                    <Suspense fallback={<Spinner/>}>
                        <Route exact path={"/"} component={HomePage}/>
                        <Route path="/shop" component={ShopPage}/>
                        <Route exact path={"/checkout"} component={CheckoutPage}/>
                        <Route exact path="/signin"
                               render={() => (
                                   this.props.currentUser ? <Redirect to={"/"}/> : <SingInSignOut/>
                               )}
                        />
                    </Suspense>
                </ErrorBoundary>
            </Switch>
        </div>
    );
}

const ms2p = ({user}) => createStructuredSelector({
    currentUser: selectCurrentUser,
    // collectionsArray: selectCollectionsForPreview
})

const ma2p = dispatch => ({
    checkUserSession: () => dispatch(checkUserSession())
})

export default connect(ms2p, ma2p)(App);
