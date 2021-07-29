import React from 'react'
import { makeStyles, CardContent, Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({}))

export default function PostContent(props) {
    const classes = useStyles()
    return(
        <CardContent>
            <Typography component='p'>
                {props.content}
            </Typography>
        </CardContent>
    )
}