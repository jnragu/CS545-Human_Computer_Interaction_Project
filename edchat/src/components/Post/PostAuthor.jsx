import React from 'react'
import { makeStyles, Typography, Grid, Avatar } from '@material-ui/core'
import { Person } from '@material-ui/icons'

const detailsMargin = '10px'

const useStyles = makeStyles(theme => ({
    root: {
        direction: 'row', 
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    }, 
    author: {
        marginTop: '5px',
        marginLeft: detailsMargin
    },
    time: {
        marginLeft: detailsMargin,
        marginTop: '3px'
    }
}))

export default function PostAuthor() {
    const classes = useStyles()
    return (
        <Grid container className={classes.root}>
            <Grid item>
                <Avatar>
                    <Person />
                </Avatar>
            </Grid>
            <Grid item>
                <Typography variant='h2' className={classes.author}>
                    Author
                </Typography>
                <Typography variant='h3' className={classes.time}>
                    Time posted
                </Typography>
            </Grid>
        </Grid>
    )
}