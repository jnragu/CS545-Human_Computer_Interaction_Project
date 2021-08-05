import React from 'react'
import { makeStyles, Drawer, Button, Toolbar, Typography } from '@material-ui/core'
import SideBarItem from './SideBarItem'
import { PersonAdd } from '@material-ui/icons'

const drawerWidth = 270;

const useStyles = makeStyles(theme => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerContainer: {
        overflow: 'auto',
        marginTop: '20px',
        backgroundColor: theme.palette.background
    },
    drawerTitle: {
        margin: '20px'
    },
    action: {
        marginLeft: '50px'
    }
}))


export default function PostContent() {
    const classes = useStyles()
    return (
        <Drawer
            className={classes.drawer}
            variant='permanent'
            anchor='left'
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            <Toolbar />
            <div className={classes.drawerContainer} >
                <Typography variant='h2' className={classes.drawerTitle}>
                    Current Courses (5)
                </Typography>
                <SideBarItem
                    class='Human Computer Interaction'
                    classid='CS-545-WS'
                />
                <SideBarItem class='Thermodynamics' classid='E-234-A' />
                <SideBarItem class='Astronomy' classid='PEP-151-WS' />
                <SideBarItem class='Psychology of Prejudice' classid='HSS-333-A' />
                <Button
                    variant='contained'
                    color='primary'
                    startIcon={<PersonAdd />}
                    className={classes.action}
                >
                    Join a new class
                </Button>
            </div>
        </Drawer>
    )
}