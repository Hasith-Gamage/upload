import React from "react";
import './Menu.css'; // Import the CSS file
import { Card, CardMedia, CardContent, Typography, Grid } from "@mui/material";

import image1 from '../assets/image1.jpg';
import image2 from '../assets/image1.jpg';
import image3 from '../assets/image1.jpg';
import image4 from '../assets/image1.jpg';
import image5 from '../assets/image1.jpg';
import image6 from '../assets/image1.jpg';
import image7 from '../assets/image1.jpg';

const images = [
  { id: 1, src: image1, title: 'Item 1 nbvbsadhjjdjad annsdjandads' },
  { id: 2, src: image2, title: 'Item 2' },
  { id: 3, src: image3, title: 'Item 3' },
  { id: 4, src: image4, title: 'Item 4' },
  { id: 5, src: image5, title: 'Item 5' },
  { id: 6, src: image6, title: 'Item 6' },
];

const Menu = () => {
  return (
    <div className="menu-container">
      <Typography variant="h4" className="menu-title">Our Menu</Typography>
      <Grid container spacing={4}>
        {images.map((image) => (
          <Grid item xs={12} sm={6} md={4} key={image.id}>
            <Card className="menu-card">
              <CardMedia
                component="img"
                height="200"
                image={image.src}
                alt={image.title}
                className="menu-image"
              />
              <CardContent>
                <Typography variant="h6" className="menu-item-title">
                  {image.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Menu;
