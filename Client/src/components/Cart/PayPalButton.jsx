import React, { act } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const PayPalButton = ({amount,onSuccess,onError}) => {
  return (
    <PayPalScriptProvider
      options={{
        clientId:
          "AdubAn0A6bbwK8ObDl2xFBi-acN7hYQcdB4SklRr0i5Jp4wXXFSgJtFi44Arf3yw0Q1k-13vgvJd1d0v",
      }}
    >
      <PayPalButtons
        style={{ layout: "vertical" }}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [{ amount: { value: amount } }],
          });
        }}
        onApprove={(data,actions)=>{
            return actions.order.capture().then(onSuccess);
        }}
        onError={onError}
      />
    </PayPalScriptProvider>
  );
};

export default PayPalButton;
