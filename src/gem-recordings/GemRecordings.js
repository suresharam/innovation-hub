import React from "react";
import {Box} from '@material-ui/core';


export default function GemRecordings() {
  return (
    <Box
        className="Hackathon"
        component="img"
        sx={{
          height: 450,
          width: 500,
          paddingX: 85,
          paddingY: 30
        }}
        alt="TComing Soon"
        src="./ComingSoon.png"
      />
  );
}