import React, { useState } from 'react'
import { makeStyles, Card, CardHeader, TextField, CardContent, Button, CardActions } from '@material-ui/core'
import { AskQuestion } from '../Post/PostFunctions.js'

const useStyles = makeStyles(theme => ({}))

export default function AskAQuestion() {
    //used to store Title and Content
    var title;
    var content;

    const classes = useStyles()
    const [contentValue, setContentValue] = useState('Controlled')

    const handleChange = (event) => {
        setContentValue(event.target.value)
    }

    const handleClick = function (event) {
        if (!title || !content) {
            console.log("Error: missing value for Asking a question");
        }
        else {
            var date = new Date().getTime()

            var res = AskQuestion(title, content, date);
            res.then(function () {
                window.location.reload();
            });
        }

    }

    const handleChangeTitle = function (event) {
        title = event.target.value;
    }

    const handleChangeContent = function (event) {
        content = event.target.value;
    }

    return (
        <Card className={classes.root}>
            <CardHeader
                title={
                    <TextField
                        label='Add a Title'
                        variant='outlined'
                        onChange={handleChangeTitle}
                        fullWidth={true}
                    />
                } />
            <CardContent>
                <TextField
                    multiline
                    rows={5}
                    placeholder='Start typing your question here...'
                    variant='outlined'
                    onChange={handleChangeContent}
                    fullWidth={true}
                />
            </CardContent>
            <CardActions style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button
                    variant='contained'
                    color='primary'
                    onClick={handleClick}

                >
                    Post
                </Button>
            </CardActions>
        </Card>
    )
}
