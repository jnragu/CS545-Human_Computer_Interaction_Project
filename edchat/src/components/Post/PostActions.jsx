import React from 'react'
import { makeStyles, CardActions, Button, Typography } from '@material-ui/core'
import { Bookmark, ChatBubbleRounded } from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
    responses: {
        marginLeft: 'auto',
        marginRight: '10px'
    },
    bookmark: {
        marginLeft: '40px',
        marginRight: '15px',
    }
}))

export default function PostActions() {
    const classes = useStyles()
    return(
        <CardActions disableSpacing>
            <Button 
                startIcon={<Bookmark color='disabled'/>}
                variant='contained'
                color='secondary'
                disableElevation
                className={classes.bookmark}
            >
                Bookmark
            </Button>
            <Button 
                startIcon={<ChatBubbleRounded color='disabled'/>}
                variant='contained'
                color='secondary'
                disableElevation
            >
                Add Reponse
            </Button>
            <Typography variant='button' className={classes.responses}>
                Number of responses
            </Typography>
        </CardActions>
    )
}