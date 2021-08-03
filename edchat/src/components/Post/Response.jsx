import React from 'react'
import { makeStyles, Typography } from '@material-ui/core'
import PostAuthor from './PostAuthor'
import PostContent from './PostContent'

const useStyles = makeStyles(theme => ({

}))

export default function Response() {
    const classes = useStyles()
    return(
        <div>
            <PostAuthor author='Name of Author'/>
            <PostContent content='Content here!!!!!!/dkjafsajdshkflj' />
        </div>
    )
}