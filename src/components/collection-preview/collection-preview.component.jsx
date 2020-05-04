import React from 'react';
import CollectionItem from "../collection-item/collection-item.componente";
import {withRouter} from "react-router-dom";
import {CollectionPreviewContainer, PreviewContainer, TitleContainer} from "./collection-preview.styles";

const CollectionPreview = ({title, items, match, routeName, history}) => {
    return (
        <CollectionPreviewContainer>
            <TitleContainer onClick={() => history.push(`${match.path}/${routeName}`)}>{title.toUpperCase()}</TitleContainer>
            <PreviewContainer className="preview">
                {
                    items.filter((item, indx) => indx < 4).map((item) => (
                        <CollectionItem key={item.id} item={item}/>
                    ))
                }
            </PreviewContainer>
        </CollectionPreviewContainer>
    );
};

export default withRouter(CollectionPreview);
