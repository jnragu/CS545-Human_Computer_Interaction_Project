import React, { useState } from 'react'
import { makeStyles, Drawer, Button, Toolbar, Typography } from '@material-ui/core'
import SideBarItem from './SideBarItem'
import { PersonAdd } from '@material-ui/icons'
import { withStyles } from '@material-ui/styles';
import { CreateCourse, GetAllCourses } from '../Post/PostFunctions.js';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const drawerWidth = 270;

const styles = theme => ({
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
    },
    courses: {
        listStyleType: 'none'
    }
})





class SideBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "courses": [],
            "isOpen": false
        }
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleOpen() {
        this.setState({ isOpen: true });
    }

    handleClose() {
        this.setState({ isOpen: false });
        console.log(this.state.isOpen)
    }


    componentWillMount() {
        const promise = GetAllCourses();
        const { classes } = this.props;

        //Promise is binded to this class so it can have scope of this.state
        promise.then(function (AllCourses) {

            var courses = AllCourses.map((course) => (

                <li key={course.id} className={classes.courses}>
                    <SideBarItem class={course.data.course_name} classid={course.data.course_id} />
                </li>

            ))

            this.setState({ "courses": courses });
        }.bind(this));
    }


    render() {
        const { classes } = this.props;
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
                    {this.state.courses}
                    <Button
                        variant='contained'
                        color='primary'
                        startIcon={<PersonAdd />}
                        className={classes.action}
                        onClick={this.handleOpen}
                    >
                        Join a new class
                    </Button>
                    <Dialog open={this.handleClose} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                        <DialogTitle id="form-dialog-title">Join a new Class</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                To join a new class, enter the name of the class, followed by the class course ID
                            </DialogContentText>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Course Name"
                                type="string"
                                fullWidth
                            />
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Course ID"
                                type="string"
                                fullWidth
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.handleClose} color="primary">
                                Cancel
                            </Button>
                            <Button onClick={this.handleClose} color="primary">
                                Join Class
                            </Button>
                        </DialogActions>
                    </Dialog>
                </div>
            </Drawer>
        )
    }
}

export default withStyles(styles)(SideBar);