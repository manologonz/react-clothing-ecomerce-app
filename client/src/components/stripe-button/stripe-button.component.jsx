import React from "react"
import StripeCheckout from "react-stripe-checkout";
import axios from 'axios';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_sfmlfZeces2UoOSKxQMNIset00E6aGB05z"
    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data:{
                amount: priceForStripe,
                token
            }
        }).then(response => {
            alert('Payment successful')
        }).catch(err => {
            console.log('Payment error: ', err.message)
            alert('There was an issu with your payment. Please sure you use the provided credit card')
        })
    }
    return (
        <StripeCheckout
            label="Pay Now"
            name="CROWN Clothing Ltd."
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}/>
    );
};

export default StripeCheckoutButton;
