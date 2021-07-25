import React, { useState } from 'react';
import { makeStyles, Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import courseStyle from './coursesStyle.js'
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';

import { BrowserRouter as Router, Route, Link, Switch, } from "react-router-dom";

const useStyles = makeStyles(courseStyle);

function Courses() {
    const classes = useStyles()

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

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
                {courses.map((course, index) => (

                    <div key={index} className={classes.courses}>
                        <li className={classes.point}></li>
                        <div >
                            <Link className={classes.name} to={course.path}>{course.name}</Link>
                            <p className={classes.section}>{course.section}</p>
                        </div>
                    </div>

                ))}

            </Router>
            <section className={classes.join}>
                <Button className={classes.joinBtn} startIcon={<PersonAddOutlinedIcon />} onClick={handleClickOpen}>
                    Join A new class
                </Button>
            </section>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
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
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Join
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default Courses
