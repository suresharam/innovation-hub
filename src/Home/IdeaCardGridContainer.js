import * as React from 'react';
import { connect } from 'react-redux';
import IdeaCard from './IdeaCard';
import { Grid, Box } from '@material-ui/core';

function IdeaCardGridContainer({ideas = []}) {
    return (
        <Box margin='20px 40px 20px 15px'> 
            <Grid
                container
                spacing={2}
                justifyContent="center"
                
            >
                {ideas.map((idea, index) => {
                    const imgSrc = `./${idea?.category?.toLowerCase()}.png`;
                    return (
                        <Grid key={index} item xs={3}>
                            <IdeaCard
                                category={{
                                    name: idea?.category,
                                    img: imgSrc
                                }}
                                ideaInfo={{
                                    title: idea?.title,
                                    description: idea?.description,
                                    authors: idea?.authors
                                }}
                            />
                        </Grid>
                    );
                })}
            </Grid>
        </Box>
    );
}

function mapStateToProps(state) {
    return {
        ideas: state?.ideas?.map((idea) => {
            return {
                title: idea?.title,
                description: idea?.description,
                authors: idea?.authors,
                category: idea?.category
            };
        })
    };
}

export default connect(mapStateToProps)(IdeaCardGridContainer);
