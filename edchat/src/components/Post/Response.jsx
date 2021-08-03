import React from 'react'
import { makeStyles, Typography } from '@material-ui/core'
import PostAuthor from './PostAuthor'
import PostContent from './PostContent'

const useStyles = makeStyles(theme => ({

}))

export default function Response(props) {
    const classes = useStyles()
    return(
        <div>
            <PostAuthor author={props.author}/>
            <PostContent content={props.content} />
        </div>
    )
}