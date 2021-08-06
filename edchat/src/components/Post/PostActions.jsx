import React from 'react'
import { makeStyles, CardActions, Button, Typography, Accordion, AccordionDetails, AccordionSummary, AccordionActions, TextField } from '@material-ui/core'
import { Bookmark, ChatBubbleRounded } from '@material-ui/icons'
import Response from './Response'
import PostAuthor from './PostAuthor'
import { Respond } from './PostFunctions.js'

const useStyles = makeStyles(theme => ({
    responses: {
        marginLeft: 'auto',
        marginRight: '10px',
        listStyleType: 'none'
    },
    bookmark: {
        marginLeft: '40px',
        marginRight: '15px',
    }
}))

export default function PostActions(props) {
    var response = ""

    const RespondToPost = function (event) {
        console.log(props.postid);
        console.log(response);
        var promise = Respond(props.postid, response);

        promise.then(function () {
            window.location.reload();
        })
    }

    const handleChangeResponse = function (event) {
        response = event.target.value;
    }
    const classes = useStyles();
    const responses = props.responses;

    var rows = [];

    for (var i = 0; i < responses.length; i++) {
        const post = <Response author="Joe" content={responses[i]} />
        const elm = <li className={classes.responses}>
            {post}
        </li>
        rows.push(elm)
    }
    return (
        <Accordion>
            <AccordionSummary
                aria-label='Expand'
            >
                <CardActions>
                    <Button
                        aria-label='Bookmark'
                        startIcon={<Bookmark color='disabled' />}
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
                        startIcon={<ChatBubbleRounded color='disabled' />}
                        variant='contained'
                        color='secondary'
                        disableElevation
                        onClick={(event) => event.stopPropagation()}
                        onFocus={(event) => event.stopPropagation()}
                    >
                        Add Response
                    </Button>
                    <Typography variant='button' className={classes.responses}>
                        View all responses
                    </Typography>
                </CardActions>
            </AccordionSummary>
            <AccordionDetails>
                <ul>
                    {rows}
                </ul>
            </AccordionDetails>
            <AccordionActions>
                <TextField fullWidth id='response' variant='outlined' onChange={handleChangeResponse} />
                <Button variant='secondary' onClick={RespondToPost} color="#90caf9">
                    Post Response
                </Button>
            </AccordionActions>
        </Accordion>

    )
}