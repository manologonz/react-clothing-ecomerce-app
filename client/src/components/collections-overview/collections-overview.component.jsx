import React from "react";
import CollectionPreview from "../collection-preview/collection-preview.component";
import {connect} from 'react-redux'
import {createStructuredSelector} from "reselect";
import {selectCollectionsForPreview} from "../../redux/shop/shop.selector";
import {CollectionsOverviewContainer} from "./collections-overview.styles";

const CollectionsOverview = ({collections}) => {
    return (
        <CollectionsOverviewContainer>
            {
                collections.map(({id, ...other}) => (
                    <CollectionPreview key={id} {...other}/>
                ))
            }
        </CollectionsOverviewContainer>
    )
};

const ms2p = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(ms2p)(CollectionsOverview)