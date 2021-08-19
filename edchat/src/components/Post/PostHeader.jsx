import React from 'react'
import { makeStyles, Grid, Typography, Button, CardHeader } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    root: {
        direction: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    tag: {
        padding: theme.spacing(1),
        marginTop: theme.spacing(1),
        marginRight: theme.spacing(1)
    }
}))

export default function PostHeader(props) {
    const classes = useStyles()
    return (
        <Grid container className={classes.root}>
            <CardHeader
                title={
                    <Typography variant='h1'>
                        {props.title}
                    </Typography>
                }
                subheader={props.author}
            />
            <Button
                variant='outlined'
                className={classes.tag}
                style={{ 
                    color: props.color,
                    borderColor: props.color 
                }}
                disableElevation
            >
                <Typography 
                    variant='button'
                >
                    {props.courseid}
                </Typography>
            </Button>
        </Grid>
    )
}