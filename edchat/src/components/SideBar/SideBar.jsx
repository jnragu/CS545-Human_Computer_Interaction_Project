import React from 'react'
import { makeStyles, Drawer, Button, Toolbar, Typography } from '@material-ui/core'
import SideBarItem from './SideBarItem'
import { PersonAdd } from '@material-ui/icons'
import { withStyles } from '@material-ui/styles';
import {CreateCourse, GetAllCourses} from '../Post/PostFunctions.js';

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
    constructor(){
        super();
        this.state = {
            "courses": []
        }
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

            this.setState({"courses": courses });
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
                    >
                        Create a new class
                    </Button>
                </div>
            </Drawer>
        )
    }
}

export default withStyles(styles)(SideBar);