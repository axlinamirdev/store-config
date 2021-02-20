import React, {useContext } from 'react';
import '../styles/components/Payment.css';
import AppContext from "../context/AppContext"
import { PayPalButton } from "react-paypal-button"
import { handleSumTotal } from '../utils/Sumatoria'
import { useHistory } from 'react-router-dom'

const Payments = () => {
  const { state: { cart, buyer }, addNewOrder } = useContext(AppContext)
  const history = useHistory()
  
  const paypalOtions = {
    clientId: 'AS1wy696hAPtDJjKRIgjBoYGWCSfDAWe6Ksnj3XvBYvNDEUvx2-UOUfXDgb8f4ERzlU4j3SLzBo5ckW2',
    intent: 'capture',
    currency: 'USD'
  }

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect'
  }

  const handlePaymentSuccess = (data) => {
    console.log(data);
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        product: cart,
        payment: data
      }
      addNewOrder(newOrder);
      history.push('/checkout/success')
    }
  }

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido:</h3>
        {cart.map((item) => (
          <div className="Payment-item" key={item.title}>
            <div className="Payment-element">
              <h4>{item.title}</h4>
              <span>
                $
                {' '}
                {item.price}
              </span>
            </div>
          </div>
        ))}
        <div className="Payment-button">
            <PayPalButton 
        			paypalOptions={paypalOtions}
            		buttonStyles={buttonStyles}
        			amount={handleSumTotal(cart)}
        			onPaymentStart={()=>console.log("start payment")}
        			onPaymentSuccess={data => handlePaymentSuccess(data)}
        			onPaymentError = {error => console.log(error)}
        			onPaymentCancel = {data => console.log(data)}
        		/>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Payments;