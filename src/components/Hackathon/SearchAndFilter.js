import * as React from 'react';
import { Grid, ListItem, FormControl, InputLabel, NativeSelect } from "@material-ui/core";

const SearchAndFilter = ({onFilterSelectedCallback}) => {
    const handleChange = (event) =>{
        const filter = `Hackathon ${event.target.value}`;
        onFilterSelectedCallback && onFilterSelectedCallback(filter);
    }
    return (
        <Grid className="Grid Hackathon" container spacing={2}>
            <Grid item xs={3}>
                <ListItem></ListItem>
            </Grid>
            <Grid item xs={6}>
                <ListItem>
                    <FormControl onChange={handleChange.bind(this)} fullWidth>
                        <InputLabel variant="standard" htmlFor="uncontrolled-native">
                        Select the Hackathon Year
                        </InputLabel>
                        <NativeSelect
                            defaultValue={2022}
                            inputProps={{
                                name: 'year',
                                id: 'uncontrolled-native',
                            }}
                        >
                        <option value={2020}>2020</option>
                        <option value={2021}>2021</option>
                        <option value={2022}>2022</option>
                        </NativeSelect>
                    </FormControl>
                </ListItem>
            </Grid>
        </Grid>
  );
}

export default  SearchAndFilter;
