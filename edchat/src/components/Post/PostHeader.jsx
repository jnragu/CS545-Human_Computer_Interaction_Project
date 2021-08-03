import React from 'react'
import { makeStyles, Grid, Typography, Button, CardHeader } from '@material-ui/core'
import PostAuthor from './PostAuthor'

const useStyles = makeStyles(theme => ({
    root: {
        direction: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
    },
    tag: {
        marginTop: '10px'
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
            <Button 
                variant='contained' 
                className={classes.tag} 
                color='primary'
                disableElevation
            >
                <Typography variant='action'>
                    Tag
                </Typography>
            </Button>
        </Grid>
    )
}