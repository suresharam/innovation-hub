import * as React from 'react';
import {Box, CardContent, Card, CardHeader, Avatar, CardMedia} from '@material-ui/core';

export default function About() {
      
  return (
    <Box className="About" sx={{ minWidth: 120, marginTop: '35px' }}> 
       <div>
            <h2>About</h2>
            <h4>
                You know the saying, “Nothing changes if nothing changes.” Well if nothing changes, we stay the same. We don’t grow. We don’t evolve. 
                We don’t get better. And that’s not going to work—not for you, and not for the world. We need positive change. We need new ideas. We need progress.
            </h4>
            
            <Card className="Card" sx={{ maxWidth: 345 }}>
                <CardHeader 
                    avatar={
                    <Avatar sx={{}}>
                        C
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
                    <h4>
                        We at Condé Nast believe Innovation is the Future !!!
                    </h4>
                </CardContent>
            </Card>
        </div>
    </Box>
  );
}
