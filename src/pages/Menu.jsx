import React, { useState } from "react";
import './Menu.css'; // Import the CSS file
import { Card, CardMedia, CardContent, Typography, Grid, Button } from "@mui/material";

import image1 from '../assets/image19.jpg';
import image2 from '../assets/image17.jpg';
import image3 from '../assets/image37.jpg';
import image4 from '../assets/image12.jpg';
import image5 from '../assets/image18.jpg';
import image6 from '../assets/image8.jpg';

const images = [
  { id: 1, src: image1, title: 'Crispy Chicken', backgroundColor: 'black', fontColor: '#ffb703' },
  { id: 2, src: image2, title: 'Koththu', backgroundColor: 'black', fontColor: '#ffb703' },
  { id: 3, src: image3, title: 'Burger', backgroundColor: 'black', fontColor: '#ffb703' },
  { id: 4, src: image4, title: 'Rice Corner', backgroundColor: 'black', fontColor: '#ffb703' },
  { id: 5, src: image5, title: 'Combo Pack', backgroundColor: 'black', fontColor: '#ffb703' },
  { id: 6, src: image6, title: 'Bacon Burger', backgroundColor: 'black', fontColor: '#ffb703' },
];

const Menu = () => {
  const [clickedImage, setClickedImage] = useState(null); // State to track clicked image

  const handleImageClick = (id) => {
    setClickedImage(id); // Set the clicked image's ID to trigger animation
  };

  return (
    <div className="menu-container">
      <h1 style={{ textAlign: 'center', color: '#ffb703' }}>Our Menu</h1>
      <Grid container spacing={4}>
        {images.map((image) => (
          <Grid item xs={12} sm={6} md={4} key={image.id}>
            <Card
              className={`menu-card ${clickedImage === image.id ? 'clicked' : ''}`}
              onClick={() => handleImageClick(image.id)} // Trigger animation on click
              sx={{
                backgroundColor: image.backgroundColor,
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={image.src}
                alt={image.title}
                className="menu-image"
              />
              <CardContent>
                <Typography
                  variant="h6"
                  className="menu-item-title"
                  sx={{
                    color: image.fontColor,
                    fontWeight: 'bold',
                  }}
                >
                  {image.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Rest of your code here for the footer, etc. */}
    </div>
  );
};

export default Menu;
