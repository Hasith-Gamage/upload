
import React from 'react';
import { Button } from '@mui/material';

export default function Contact() {
  return (
    <div >
      <h1 style={{ textAlign: 'center', color: '#ffb703' }}>Reservation</h1>
      <h4 style={{ textAlign: 'center', color: 'White' }}>
        Monello Pizza offers easy table reservations for a seamless dining experience with friends and family.
      </h4>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Button
          variant="outlined"
          sx={{
            color: '#ffb703',
            borderColor: '#ffb703',
            backgroundColor: 'transparent',
            padding: '10px 20px',
            fontWeight: 'bold',
            '&:hover': {
              backgroundColor: '#ffb703',
              color: 'black',
              borderColor: '#ffb703',
            },
          }}
        >
          TABLE RESERVATIONS
        </Button>
      </div>
      <h1 style={{ textAlign: 'center', color: '#ffb703' }}>077 040 0600</h1>

      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', color: 'white' }}>
        <div>
          <h2>Dcafe</h2>
        </div>
        <div>
          <h2>Our Location</h2>
          <p>No.18/5, Modara Dewala Road, Ambalangoda.</p>
          <p>Get Direction</p>
        </div>
        <div>
          <h2>Quick Link</h2>
          <p>Home</p>
          <p>Menu</p>
          <p>About Us</p>
          <p>Contact Us</p>

        </div>
        <div>
          <h2>Opening Hours</h2>
          <p>Monday to Sunday
            11.00AM - 10.30PM</p>
            <Button
          variant="outlined"
          sx={{
            color: '#ffb703',
            borderColor: '#ffb703',
            backgroundColor: 'transparent',
            padding: '10px 20px',
            fontWeight: 'bold',
            '&:hover': {
              backgroundColor: '#ffb703',
              color: 'black',
              borderColor: '#ffb703',
            },
          }}
        >
          TABLE RESERVATIONS
        </Button>
        </div>

      </div>



    </div>
  )
};


