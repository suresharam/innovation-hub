import * as React from 'react';
import { connect } from 'react-redux';
import IdeaCard from './IdeaCard';
import { Grid, Box, Typography } from '@material-ui/core';

function IdeaCardGridContainer({ideas = [], ideasCount, ideasEventType}) {
    const eventRelatedIdeas = ideasEventType
        ? ideas.filter( i => i.event === ideasEventType )?.slice(0)?.reverse()
        : ideas?.slice(0)?.reverse();
    const ideasToShow = ideasCount
        ? eventRelatedIdeas?.slice(0,ideasCount)
        : eventRelatedIdeas;
    return (
        <Box margin='20px 40px 20px 15px'> 
            <Grid
                container
                spacing={2}
                justifyContent="center"
                className="idea-container"
                
            >
                {ideasToShow.map((idea, index) => {
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

                {ideasToShow?.length === 0 && (
                    <Typography variant="h5">
                       No ideas found
                    </Typography>
                )}
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
                category: idea?.category,
                event: idea?.event
            };
        })
    };
}

export default connect(mapStateToProps)(IdeaCardGridContainer);
