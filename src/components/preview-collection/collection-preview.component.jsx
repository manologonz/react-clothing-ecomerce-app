import React from 'react';
import CollectionItem from "../collection-item/collection-item.componente";
import './collection-preview.styles.scss'

const CollectionPreview = ({title, items}) => {
    return (
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {
                    items.filter((item, indx) => indx < 4).map(({id, ...other}) => (
                        <CollectionItem key={id} {...other}/>
                    ))
                }
            </div>
        </div>
    );
};

export default CollectionPreview;
