import React from 'react';
import {CustomButtonContainer} from "./custom-button.styles";

const CustomButton = ({children, ...other}) => {
    return (
        <CustomButtonContainer {...other}>
            {children}
        </CustomButtonContainer>
    );
};

export default CustomButton;
