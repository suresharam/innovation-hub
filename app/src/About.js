import * as React from 'react';
import {Box, CardContent, Card, Typography, CardHeader, Avatar, CardMedia} from '@material-ui/core';

export default function About() {
      
  return (
    <Box sx={{ minWidth: 120, marginTop: '10px' }}> 
       <div>
            <h2>About</h2>
            <h4>
                Condé Nast is a global media company that produces some of the world’s leading print, digital, video and social brands.
                These include Vogue, GQ, The New Yorker, Vanity Fair, Wired and Architectural Digest (AD), Condé Nast Traveler and La Cucina Italiana, among others.
            </h4>
            
            <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                    avatar={
                    <Avatar sx={{}} aria-label="recipe">
                        I
                    </Avatar>
                    }
                    title="Condenast Innovation"
                    subheader="January 20, 2022"
                />
                <CardMedia
                    component="video"
                    height="308"
                    width="617"
                    src="./conde.mp4"
                    title="Condenast Core Values"
                    controls
                    muted
                    loop
                    autoPlay
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        We at Condé Nast believe in Innovation is the Future !!!
                    </Typography>
                </CardContent>
            </Card>
        </div>
    </Box>
  );
}
