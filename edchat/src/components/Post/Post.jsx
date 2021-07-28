import React from 'react'
import { Container, Grid, Card, CardHeader, CardContent, CardActions, Typography, Avatar, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import PostHeader from './PostHeader'
import PostAuthor from './PostAuthor'
import PostContent from './PostContent'
import PostActions from './PostActions'

const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: 'sm'
    },
}))

export default function Post() {
    const classes = useStyles()
    return (
        <Container className={classes.root}>
            <Card>
                <PostHeader 
                    author= { <PostAuthor /> }
                />
                <PostContent />
                <PostActions />
            </Card>
        </Container>
    )
}
