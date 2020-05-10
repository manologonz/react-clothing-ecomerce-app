import {connect} from 'react-redux';
import {createStructuredSelector} from "reselect";
import {selectIsCollectionFetching} from "../../redux/shop/shop.selector";
import WithSpinner from "../with-spinner/with-spinner.component";
import CollectionsOverview from "./collections-overview.component";
import {compose} from "redux";

const ms2p = createStructuredSelector({
    isLoading: selectIsCollectionFetching
})

const CollectionsOverviewContainer = compose(
    connect(ms2p),
    WithSpinner
)(CollectionsOverview)

export default CollectionsOverviewContainer