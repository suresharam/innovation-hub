import React from "react";
import debounce from 'lodash.debounce';
import Header from "./Header";
import SwipeableTextMobileStepper from "./SwipeableTextMobileStepper";
import SearchAndFilter from "./SearchAndFilter";
import { Grid, ListItem, Typography } from "@material-ui/core";
import IdeaCardGridContainer from "../Home/IdeaCardGridContainer";

const Hackathon = () => {
  const [ideasCount, setIdeasCount] = React.useState(4);
  const [ideasEventType, setIdeasEventType] = React.useState('Hackathon 2022');
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight) {
        const currIdeasShownCount = document.querySelector('.Hackathon__ideas-container .idea-container').children.length;
        const ideasToBeShown = currIdeasShownCount + 4;
        ideasCount !== ideasToBeShown && setIdeasCount(ideasToBeShown);
      }
    };
    const throttledScroll = debounce(handleScroll, 500);
    window.addEventListener('scroll', throttledScroll);

    return () => {
      window.removeEventListener('scroll', throttledScroll);
    };
  }, [ideasCount]);
  return (
    <Grid className="Grid Hackathon" container spacing={2}>
      <Grid item xs={2}>
        <ListItem></ListItem>
      </Grid>
      <Grid item xs={8}>
        <ListItem>
          <Header />
        </ListItem>
      </Grid>
      <Grid item xs={2}>
        <ListItem></ListItem>
      </Grid>
      <Grid item xs={5}>
        <ListItem></ListItem>
      </Grid>
      <Grid item xs={2}>
        <SwipeableTextMobileStepper />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h4" className="App__sub-section">
          Hackathon Ideas
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <SearchAndFilter  onFilterSelectedCallback={(eventTypeSelected) => {
          setIdeasEventType(eventTypeSelected);
        }}/>
      </Grid>
      <Grid item xs={12} className="Hackathon__ideas-container">
        <IdeaCardGridContainer ideasCount={ideasCount} ideasEventType={ideasEventType} />
      </Grid>
    </Grid>
  );
};

export default Hackathon;
