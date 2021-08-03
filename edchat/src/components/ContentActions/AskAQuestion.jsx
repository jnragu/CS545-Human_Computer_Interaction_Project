import React, { useState } from 'react'
import { makeStyles, Card, CardHeader, TextField, CardContent, Button, CardActions } from '@material-ui/core'

const useStyles = makeStyles(theme => ({}))

export default function AskAQuestion() {
    const classes = useStyles()
    const [contentValue, setContentValue] = useState('Controlled')

    const handleChange = (event) => {
        setContentValue(event.target.value)
    }

    return(
        <Card>
            <CardHeader 
            title={
                <TextField 
                    label='Add a Title'
                    variant='outlined'
                />
            }/>
            <CardContent>
                <TextField 
                multiline 
                rows={5}
                placeholder='Start typing your question here...'
                variant='outlined'
                />
            </CardContent>
            <CardActions>
                <Button
                    variant='contained'
                    color='primary'
                >
                    Post
                </Button>
            </CardActions>
        </Card>
    )
}