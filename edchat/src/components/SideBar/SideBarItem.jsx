import React from 'react'
import { makeStyles, Container, Typography, Grid } from '@material-ui/core'
import { FiberManualRecord } from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
    grid: {
        direction: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        margin: '15px'
    },
    icon: {
        marginRight: '8px',
        marginTop: '2px'
    },
    classid: {
        marginTop: '2px'
    }
}))

export default function SideBarItem(props) {
    var classid = props.classid;

    const handleClick = function(event) {
        window.location.href = "/?classid=" + classid;
    }
    const classes = useStyles()
    return(
        <Container onClick={handleClick}>
            <Grid container className={classes.grid}>
                <Grid item className={classes.icon}>
                    <FiberManualRecord fontSize='small'/>
                </Grid>
                <Grid item>
                    <Typography variant='h2'>
                    {props.class}
                    </Typography>
                    <Typography variant='h3' className={classes.classid}>
                        {props.classid}
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    )
}