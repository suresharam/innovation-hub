import React from "react";
import {Box} from '@material-ui/core';


export default function WYWIdeas() {
  return (
    <Box
        component="img"
        sx={{
          paddingX: 30,
          paddingY: 30
        }}
        alt="TComing Soon"
        src="./ComingSoon.png"
      />
  );
}