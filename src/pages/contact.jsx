import React from 'react';
import { Button } from '@mui/material';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// To fix the default icon issue in leaflet
import L from 'leaflet';
delete L.Icon.Default.prototype._getIconUrl;



// Import the marker icons
import markerIconRetina from '../assets/lf/marker-icon-2x.png';
import markerIcon from '../assets/lf/marker-icon.png';
import markerShadow from '../assets/lf/marker-shadow.png';

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIconRetina,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});


export default function Contact() {
  return (
    <div>
      <h1 style={{ textAlign: 'center', color: '#ffb703' }}>Reservation</h1>
      <h4 style={{ textAlign: 'center', color: 'White' }}>
        ChefD offers easy table reservations for a seamless dining experience with friends and family.
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

      {/* Add Map below the table reservation */}
      <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
        <MapContainer
          center={[6.713024, 79.970703]} // Replace with your coordinates
          zoom={13}
          scrollWheelZoom={false}
          style={{ height: '300px', width: '80%' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[6.713024, 79.970703]}>
            <Popup>
              ChefD is located here! <br /> NO92, Dikhena Dodangoda.
            </Popup>
          </Marker>
        </MapContainer>
      </div>

      <h1 style={{ textAlign: 'center', color: '#ffb703' }}>077 306 8959</h1>

      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', color: 'white' }}>
        <div>
          <h2>ChefD</h2>
        </div>
        <div>
          <h2>Our Location</h2>
          <p>NO92, Dikhena Dodangoda.</p>
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
  );
}
