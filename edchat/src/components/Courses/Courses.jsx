import React from 'react';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import { withStyles } from '@material-ui/styles';
import { BrowserRouter as Router, Link } from "react-router-dom";
import { GetAllCourses } from '../Post/PostFunctions.js';


const styles = theme => ({
    root: {
        width: '500px'
    }
});

class Courses extends React.Component {

    constructor() {
        super();
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

        //Promise is binded to this class so it can have scope of this.state
        promise.then(function (AllCourses) {
            const { classes } = this.props;
            var courses = AllCourses.map((course, index) => (

                <div key={index} className={classes.courses}>
                    <li className={classes.point}></li>
                    <div >
                        <Link className={classes.name} to={course.path}>{course.data.course_name}</Link>
                        <p className={classes.section}>{course.data.course_id}</p>
                    </div>
                </div>

            ))

            this.setState({ "courses": courses });
        }.bind(this));
    }

    render() {
        const { classes } = this.props;


        const courses = [
            {
                name: 'Computer Human Interaction',
                section: 'CS-545-WS',
                path: '/CS-545-WS',
                main: () => <h2>cs</h2>
            },

            {
                name: 'Thermodynamics',
                section: 'E-234-A',
                path: '/E-234-A',
            },
            {
                name: 'Astronomy',
                section: 'PEP-151-WS',
                path: '/PEP-151-WS'
            },
            {
                name: 'Psychology of Prejudice',
                section: 'HSS-333-A',
                path: '/HSS-333-A'
            },
            {
                name: 'Microprocessor Systems',
                section: 'CPE-390-A',
                path: '/CPE-390-A'
            },
        ]

        return (
            <div style={{ width: '20vw', height: '100vh', borderRight: '1px solid #ECECEC' }}>
                <p style={{ textAlign: 'center', color: '#A3A3A3', marginBottom: '30px', fontSize: '13px', }}>Current courses ({courses.length})</p>
                <Router>
                    {this.state.courses}

                </Router>
                <section className={classes.join}>
                    <Button className={classes.joinBtn} startIcon={<PersonAddOutlinedIcon />} onClick={this.handleOpen}>
                        Join A new class
                    </Button>
                </section>
                <Dialog open={this.handleClose} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Join a course</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Enter the course code provided by your course instructor to join.
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Enter code"
                            type="email"
                            fullWidth
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={this.handleClose} color="primary">
                            Join
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }

}

export default withStyles(styles)(Courses);
