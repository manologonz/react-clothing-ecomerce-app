import React from 'react';
import MenuItem from "../menu-item/menu-item.component";
import {connect} from "react-redux"
import {selectDirectorySections} from "../../redux/directory/directory.selector";
import {createStructuredSelector} from "reselect";
import "./directory.styles.scss"

const Directory = ({sections}) => {
        return (
            <div className="directory-menu">
                {
                    sections.map(({id, ...other}) => {
                        return <MenuItem key={id} {...other}/>
                    })
                }
            </div>
        );
}

const ms2p = state => createStructuredSelector({
    sections: selectDirectorySections
})

export default connect(ms2p)(Directory);