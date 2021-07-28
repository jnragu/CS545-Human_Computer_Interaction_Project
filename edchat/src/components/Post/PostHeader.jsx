import React from 'react'
import { makeStyles, Grid, Typography, Button, CardHeader } from '@material-ui/core'
import PostAuthor from './PostAuthor'

const useStyles = makeStyles(theme => ({
    root: {
        direction: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
    }
}))

export default function PostHeader(props) {
    const classes = useStyles()
    return(
        <Grid container className={classes.root}>
            <CardHeader 
                title = {
                    <Typography variant='h1'>
                        Title!
                    </Typography>
                }
                subheader = { props.author }
            />
            <Button>
                <Typography variant='subtitle1'>
                    Tag
                </Typography>
            </Button>
        </Grid>
    )
}