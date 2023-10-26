import React from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import CheckoutFrom from './CheckoutFrom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import useCart from '../../hooks/useCart';

const stripePromise = loadStripe(import.meta.env.VITE_Payment_getway_pk);

const Payment = () => {
const [cart] = useCart();
const total = cart.reduce((sum,item) => sum + item.price, 0);
const price = parseFloat(total.toFixed(2));
    return (
        <div>
            <SectionTitle subHeading="Please Provide" heading="Payment"></SectionTitle>
            <Elements stripe={stripePromise}>
                <CheckoutFrom cart={cart} price={price}></CheckoutFrom>
            </Elements>
            
        </div>
    );
};

export default Payment;