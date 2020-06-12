import React from 'react';
import MenuItem from "../menu-item/menu-item.component";
import {connect} from "react-redux"
import {selectDirectorySections} from "../../redux/directory/directory.selector";
import {createStructuredSelector} from "reselect";
import {DirectoryMenuContainer} from "./directory.styles";

const Directory = ({sections}) => {
        return (
            <DirectoryMenuContainer>
                {
                    sections.map(({id, ...other}) => {
                        return <MenuItem key={id} {...other}/>
                    })
                }
            </DirectoryMenuContainer>
        );
}

const ms2p = state => createStructuredSelector({
    sections: selectDirectorySections
})

export default connect(ms2p)(Directory);