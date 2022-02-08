import * as React from 'react';
import {
    Box,
    CardContent,
    CardActions,
    Card,
    CardMedia,
    Typography,
    Button,
    IconButton
} from '@material-ui/core';
import { Favorite, Comment, Share, ThumbUp } from '@material-ui/icons';

export default function IdeaCard({category, ideaInfo}) {
    const imageSrc = './' + category?.img;
    return (
    <Box > 
       <div>
            <>
                <Card sx={{ maxWidth: 100 }} variant="outlined">
                    <CardMedia
                        component="img"
                        height="140"
                        image={imageSrc}
                        alt={category?.name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {ideaInfo?.title || 'Idea Title'}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            {ideaInfo?.description || 'Idea Description to tell us more about the concept and its thought'}
                        </Typography>
                        <Typography variant="h6" color="textSecondary">
                            By {ideaInfo?.authors || 'Idea author/team'}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <IconButton aria-label="press to add to favorite">
                            <Favorite />
                        </IconButton>
                        <IconButton aria-label="press to like">
                            <ThumbUp />
                        </IconButton>
                        <IconButton aria-label="press to comment">
                            <Comment />
                        </IconButton>
                        <IconButton aria-label="press to share">
                            <Share />
                        </IconButton>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </>
        </div>
    </Box>
  );
}
