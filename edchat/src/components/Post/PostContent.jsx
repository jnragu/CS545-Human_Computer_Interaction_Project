import React from 'react'
import { makeStyles, CardContent, Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({}))

export default function PostContent() {
    const classes = useStyles()
    return(
        <CardContent>
            <Typography component='p'>
                This is the content of the post!
            </Typography>
        </CardContent>
    )
}