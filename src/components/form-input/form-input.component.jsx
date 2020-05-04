import React from 'react';
import {FormInputContainer, FormInputLabel, GroupContainer} from "./form-input.styles";

const FormInput = ({handleChange, label, ...other}) => {
    return (
        <GroupContainer>
            <FormInputContainer
                onChange={handleChange}
                {...other}
            />
            {
                label ? (
                    <FormInputLabel className={other.value.length ? 'shrink' : ''}>
                        {label}
                    </FormInputLabel>
                ) : null
            }
        </GroupContainer>
    );
};

export default FormInput;
