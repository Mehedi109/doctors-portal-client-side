import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(
  'pk_test_51I3MhVD7PjyNJImR8ksiRSe5zCH2KO6WmrHyNjicVL4g0qpLt81vLVefSZ6cPZquslEcqtLTngFTt5r6VcNC9ZsB00sy3eBJJ2'
);

const Payment = () => {
  const { appointmentId } = useParams();
  const [appointment, setAppointment] = useState({});
  useEffect(() => {
    fetch(
      `https://afternoon-sierra-15220.herokuapp.com/appointments/${appointmentId}`
    )
      .then((res) => res.json())
      .then((data) => setAppointment(data));
  }, [appointmentId]);

  return (
    <div>
      <h2>
        Please pay for : {appointment.patientName} for {appointment.serviceName}
      </h2>
      <h4>Pay : ${appointment.price}</h4>
      {appointment?.price && (
        <Elements stripe={stripePromise}>
          <CheckoutForm appointment={appointment} />
        </Elements>
      )}
    </div>
  );
};

export default Payment;

/*
1. install stripe and stripe react 
2. set  publishable key
3. elements 
4. checkout form
5. create payement method
6. server create payment intent api
7. load client secret
8. confirm card payment
9. handle user error 
*/
