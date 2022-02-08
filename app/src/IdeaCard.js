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
import FavoriteIcon from '@material-ui/icons/Favorite';

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
                        <Typography variant="body2" color="text.secondary">
                            {ideaInfo?.description || 'Idea Description to tell us more about the concept and its thought'}
                        </Typography>
                        <Typography variant="h6" color="text.secondary">
                            By {ideaInfo?.authors || 'Idea author/team'}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </>
        </div>
    </Box>
  );
}
