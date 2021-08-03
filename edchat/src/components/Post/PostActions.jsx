import React from 'react'
import 
    { makeStyles, 
        CardActions, 
        Button, 
        Typography, 
        Accordion, 
        AccordionDetails, 
        AccordionSummary, 
        TextField, 
        AccordionActions,
    } from '@material-ui/core'
import { Bookmark, ChatBubbleRounded } from '@material-ui/icons'
import Response from './Response'
import PostAuthor from './PostAuthor'

const useStyles = makeStyles(theme => ({
    responses: {
        listStyleType: 'none'
    },
    bookmark: {
        marginLeft: '40px',
        marginRight: '15px',
    },
    responses: {

    }
}))

export default function PostActions(props) {
    const classes = useStyles();
    const responses = props.responses;

    var rows = [];

    for (var i = 0; i < responses.length; i++){
        const post = <Response author="Joe" content={responses[i]}/>
        const elm = <li className={classes.responses}>
                        {post}
                    </li>
        rows.push(elm)
    }
    return(
        <Accordion>
            <AccordionSummary
                aria-label='Expand'
            >
                <CardActions>
                    <Button 
                        aria-label='Bookmark'
                        startIcon={<Bookmark color='disabled'/>}
                        variant='contained'
                        color='secondary'
                        disableElevation
                        className={classes.bookmark}
                        onClick={(event) => event.stopPropagation()}
                        onFocus={(event) => event.stopPropagation()}
                    >
                        Bookmark
                    </Button>
                    <Button 
                        aria-label='AddResponse'
                        startIcon={<ChatBubbleRounded color='disabled'/>}
                        variant='contained'
                        color='secondary'
                        disableElevation
                        onClick={(event) => event.stopPropagation()}
                        onFocus={(event) => event.stopPropagation()}
                    >
                        Add Response
                    </Button>
                    <Typography variant='button' className={classes.responses}>
                        View # of responses
                    </Typography>
                </CardActions>
            </AccordionSummary>
            <AccordionDetails>
                <ul>
                    {rows}
                </ul>
            </AccordionDetails>
            <AccordionActions>
                <TextField
                    variant='outlined'
                />
                <Button
                    variant='secondary'
                >
                    Post Response
                </Button>
            </AccordionActions>
        </Accordion>
        
    )
}