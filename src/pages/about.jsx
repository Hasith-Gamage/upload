import React from "react";
import { useState, useEffect } from 'react';
import './About.css'; // Import the CSS file
import { Card, CardContent, Typography, Grid } from "@mui/material";

// Import your images (assuming they are stored locally)
import img1 from '../assets/image4.jpg';
import img2 from '../assets/image11.jpg';
import img3 from '../assets/image3.jpg';
import img4 from '../assets/image6.jpg';
import img5 from '../assets/image8.jpg';
import img6 from '../assets/image7.jpg';
import img7 from '../assets/image9.jpg';
import img8 from '../assets/image5.jpg';
import img9 from '../assets/image10.jpg';

// Store images in an array
const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

const VideoComponent = () => {

  // const [videoSrc, setVideoSrc] = useState('');

  // useEffect(() => {
  //   const storedVideoSrc = localStorage.getItem('videoSrc');
  //   if (storedVideoSrc) {
  //     setVideoSrc(storedVideoSrc);
  //   } else {
  //     const videoUrl = process.env.PUBLIC_URL + '../assets/vid/cover.mp4'; // Load from public folder
  //     setVideoSrc(videoUrl);
  //     localStorage.setItem('videoSrc', videoUrl);
  //   }
  // }, []);
  return (
    <div className="video-container">
      <CardContent>

        <Typography variant="h5" className="image-title" style={{ margin: "20px 0", textAlign: "center" }}>
          Watch Our Video
      </Typography>
          <iframe width="100%" height="500" src="https://www.youtube.com/embed/bg--q7bOJLY?si=SWfG2qrxq1rtt1MB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        {/* <div className="video-background">
          {videoSrc && (
            <video className="background-video" autoPlay loop muted>
              <source src={videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div> */}
      </CardContent>


      {/* Display images below the video */}
      <Typography variant="h5" className="image-title" style={{ margin: "20px 0", textAlign: "center" }}>
        Bit of Memories
      </Typography>
      <Grid container spacing={2}>
        {images.map((image, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <div className="image-frame"> {/* Black frame wrapper */}
              <img src={image} alt={`Gallery Image ${index + 1}`} className="gallery-image" />
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default VideoComponent;
