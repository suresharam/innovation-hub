import Header from "./Header";
import SwipeableTextMobileStepper from "./SwipeableTextMobileStepper";
import SearchAndFilter from "./SearchAndFilter";
import { Grid, ListItem, Typography } from "@material-ui/core";
import IdeaCardGridContainer from "../Home/IdeaCardGridContainer";

const Hackathon = () => {
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
      <Grid item xs={4}>
        <ListItem></ListItem>
      </Grid>
      <Grid item xs={4}>
        <SwipeableTextMobileStepper />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h4" className="App__sub-section">
          Hackathon Ideas
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <SearchAndFilter />
      </Grid>
      <Grid item xs={12}>
        <IdeaCardGridContainer ideasCount={4} />
      </Grid>
    </Grid>
  );
};

export default Hackathon;
