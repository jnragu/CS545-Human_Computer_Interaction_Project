import React from 'react'
import { makeStyles, Typography, Grid } from '@material-ui/core'
import PostAuthor from './PostAuthor'
import PostContent from './PostContent'

const useStyles = makeStyles(theme => ({
    root: {
        direction: 'row', 
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    time: {
        marginLeft: '50px',
        marginTop: '3px'
    }
}))

export default function Response(props) {
    const classes = useStyles()
    return(
        <div>
            <PostAuthor author={props.author} time={props.time}/>
            <PostContent content={props.content} />
        </div>
    )
}