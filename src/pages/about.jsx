import React from "react";
import { useState, useEffect } from 'react';
import './About.css'; // Import the CSS file
import { CardContent, Typography, Grid, Button } from "@mui/material";

// Import your images (assuming they are stored locally)
import img1 from '../assets/image4.jpg';
import img2 from '../assets/image11.jpg';
import img3 from '../assets/image3.jpg';
import img4 from '../assets/image6.jpg';
import img5 from '../assets/image20.jpg';
import img6 from '../assets/image7.jpg';
import img7 from '../assets/image9.jpg';
import img8 from '../assets/image5.jpg';
import img9 from '../assets/image10.jpg';

// Store images in an array
const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

const VideoComponent = () => {
  return (
    <div className="video-container">
       <h1 style={{ textAlign: 'center', color: '#ffb703' }}> Watch Our Video</h1>
      <CardContent>
       

        <iframe
          width="50%"
          height="315"
          src="https://www.youtube.com/embed/Y88uxC0OmwA?si=q5tKqv_hVPrtgXVO"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>

        <iframe
          width="50%"
          height="315"
          src="https://www.youtube.com/embed/Y88uxC0OmwA?si=q5tKqv_hVPrtgXVO"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </CardContent>

      {/* Display images below the video */}
      <Typography variant="h5" className="image-title" style={{ margin: "10px 0", textAlign: "center" }}>
        Bit of Memories
      </Typography>
      <Typography variant="body1" style={{ textAlign: 'left', margin: '20px', fontSize: '18px', color: '#555' }}>
        Welcome to the gallery of cherished memories. Each photo captures moments of joy, flavor, and experience, representing the vibrant atmosphere of our restaurant. From handcrafted dishes to shared laughter, we invite you to explore the visual stories behind every meal. Our journey is one of passion, dedication, and an endless pursuit of culinary perfection.
      </Typography>
      <Grid container spacing={2}>
        {images.map((image, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <div className="image-frame"> {/* Black frame wrapper */}
              <img src={image} alt={`Gallery Image ${index + 1}`} className="gallery-image animated-image" />
            </div>
          </Grid>
        ))}
      </Grid>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', color: 'white' }}>
        <div>
          <h2>ChefD</h2>
        </div>
        <div>
          <h2>Our Location</h2>
          <p>No92, Dikhena Dodangoda.</p>
          <p>Get Direction</p>

          <h2>Our Location</h2>
          <p>Rannagala chefD</p>
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
            
            {/* css part in contact num,location cart */}
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
};

export default VideoComponent;
