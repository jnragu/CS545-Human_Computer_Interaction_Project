import React from 'react'
import { makeStyles, Container, Typography, Grid, Button } from '@material-ui/core'
import { FiberManualRecord } from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
    grid: {
        direction: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        margin: '15px',

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

    const handleClick = function (event) {
        window.location.href = "/?classid=" + classid;
    }
    const classes = useStyles()
    return (
        <Container onClick={handleClick}>
            <Grid container className={classes.grid}>
                <Grid item className={classes.icon}>
                    <FiberManualRecord fontSize='small' />
                </Grid>
                <Grid item>
                    <button style={{
                        cursor: 'pointer', background: 'none',
                        border: 'none',
                        padding: '0',
                        color: '#069',
                        textDecoration: 'underline',
                        textAlign: 'left',
                        width: '100%',
                    }}>
                        <Typography variant='h2' style={{ cursor: 'pointer' }}>
                            {props.class}
                        </Typography>
                        <Typography variant='h3' className={classes.classid} style={{ cursor: 'pointer' }}>
                            {props.classid}
                        </Typography>
                    </button>
                </Grid>
            </Grid>
        </Container>
    )
}