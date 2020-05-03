import React from "react";
import CollectionPreview from "../collection-preview/collection-preview.component";
import {connect} from 'react-redux'
import {createStructuredSelector} from "reselect";
import "./collections-overview.styles.scss";
import {selectCollectionsForPreview} from "../../redux/shop/shop.selector";

const CollectionsOverview = ({collections}) => {
    console.log(collections);
    return (
        <div className="collections-overview">
            {
                collections.map(({id, ...other}) => (
                    <CollectionPreview key={id} {...other}/>
                ))
            }
        </div>
    )
};

const ms2p = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(ms2p)(CollectionsOverview)