import React, {Component} from 'react';
import {Route} from 'react-router-dom'
import {connect} from "react-redux"
import {updateCollections} from "../../redux/shop/shop.actions";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";
import {firestore, convertCollectionsSnapShotToMap} from "../../firebase/firebase.utils";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

class ShopPage extends Component{
    state = {
        loading: true
    }

    unsubsribeFromSnapshot = null

    componentDidMount() {
        const {updateCollections} = this.props
        const collectionRef = firestore.collection('collections')
        collectionRef.get().then( snapshot => {
            const collectionsMap = convertCollectionsSnapShotToMap(snapshot)
            updateCollections(collectionsMap);
            this.setState({loading: false})
        });
    }

    render () {
        const {match} = this.props;
        const {loading} = this.state;
        return (
            <div className="shop-page">
                <Route
                    exact
                    path={`${match.path}`}
                    render={(props) => <CollectionOverviewWithSpinner isLoading={loading} {...props}/>}

                />
                <Route
                    path={`${match.path}/:collectionId`}
                    render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props}/>}
                />
            </div>
        );
    }

}

const ma2p = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, ma2p)(ShopPage);