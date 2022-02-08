import * as React from 'react';
import IdeaCard from './IdeaCard';
import { Grid, Box } from '@material-ui/core';

export default function IdeaCardGridContainer() {
    return (
        <Box margin='20px'> 
            <Grid
                container
                spacing={2}
                justifyContent="center"
                
            >
                <Grid item xs={3}>
                    <IdeaCard
                        category={{
                            name: "Technology",
                            img: "./technology.png"
                        }}
                        ideaInfo={{
                            title: 'Idea Harvest Tool',
                            description: 'A place for us to collaborate bringing in all the novice ideas under one Condenast platform!',
                            authors: 'Nihar, Rashmi, Sneha, Suresh'
                        }}
                    />
                </Grid>
                <Grid item xs={3}>
                    <IdeaCard
                        category={{
                            name: "Digital",
                            img: "./digital.png"
                        }}
                        ideaInfo={{
                            title: 'Idea: Digital',
                            description: 'A place for us to collaborate bringing in all the novice ideas under one Condenast platform!',
                            authors: 'Nihar, Rashmi, Sneha, Suresh'
                        }}
                    />
                </Grid>
                <Grid item xs={3}>
                    <IdeaCard
                        category={{
                            name: "Brands",
                            img: "./brands.png"
                        }}
                        ideaInfo={{
                            title: 'Idea: Brands',
                            description: 'A place for us to collaborate bringing in all the novice ideas under one Condenast platform!',
                            authors: 'Nihar, Rashmi, Sneha, Suresh'
                        }}
                    />
                </Grid>
                <Grid item xs={3}>
                    <IdeaCard
                        category={{
                            name: "Tools",
                            img: "./tools.png"
                        }}
                        ideaInfo={{
                            title: 'Idea: Tools',
                            description: 'A place for us to collaborate bringing in all the novice ideas under one Condenast platform!',
                            authors: 'Nihar, Rashmi, Sneha, Suresh'
                        }}
                    />
                </Grid>
                <Grid item xs={3}>
                    <IdeaCard
                        category={{
                            name: "Advertisement",
                            img: "./advertisement.png"
                        }}
                        ideaInfo={{
                            title: 'Idea: Advertisement',
                            description: 'A place for us to collaborate bringing in all the novice ideas under one Condenast platform!',
                            authors: 'Nihar, Rashmi, Sneha, Suresh'
                        }}
                    />
                </Grid>
                <Grid item xs={3}>
                    <IdeaCard
                        category={{
                            name: "Others",
                            img: "./others.png"
                        }}
                        ideaInfo={{
                            title: 'Idea: Others',
                            description: 'A place for us to collaborate bringing in all the novice ideas under one Condenast platform!',
                            authors: 'Nihar, Rashmi, Sneha, Suresh'
                        }}
                    />
                </Grid>
                <Grid item xs={3}>
                    <IdeaCard
                        category={{
                            name: "Technology",
                            img: "./technology.png"
                        }}
                    />
                </Grid>
                <Grid item xs={3}>
                    <IdeaCard
                        category={{
                            name: "Technology",
                            img: "./technology.png"
                        }}
                    />
                </Grid>
            </Grid>
        </Box>
    );
}
