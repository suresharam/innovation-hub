import * as React from 'react';
import {Box} from '@material-ui/core';

export default function Header() {
      
  return (
    <Box className="About" sx={{marginTop: '35px'}}> 
       <div>
            <h2>HACKATHON</h2>
            <h4>
                The word "hackathon" is a portmanteau of the words "hack" and "marathon", where "hack" is used in the sense of exploratory programming, not its alternate meaning as a reference to breaching computer security.
            </h4>
            <h4>
                Every Year GPT hosts its Hackathon to bring out the crazy Ideas out of its Engineers.
                The world is divided by Time. Our teams separated by Location. 
                Our Global Hackathon is united by our Freedom to Innovate
            </h4>
        </div>
    </Box>
  );
}
