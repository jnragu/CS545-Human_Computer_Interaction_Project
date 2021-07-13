import React, { useState } from 'react';
import { makeStyles, Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import courseStyle from './coursesStyle.js'
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
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
            section: 'CS-545-WS'
        },

        {
            name: 'Thermodynamics',
            section: 'E-234-A'
        },
        {
            name: 'Astronomy',
            section: 'PEP-151-WS'
        },
        {
            name: 'Psychology of Prejudice',
            section: 'HSS-333-A'
        },
        {
            name: 'Microprocessor Systems',
            section: 'CPE-390-A'
        },
    ]

    return (
        <div style={{ width: '20vw', height: '100vh', borderRight: '1px solid #ECECEC' }}>
            <p style={{ textAlign: 'center', color: '#A3A3A3', marginBottom: '30px', fontSize: '13px', }}>Current courses ({courses.length})</p>
            {courses.map((course, index) => (
                <div key={index} className={classes.courses}>
                    <li className={classes.point}></li>
                    <div>
                        <p className={classes.name}>{course.name}</p>
                        <p className={classes.section}>{course.section}</p>
                    </div>
                </div>
            ))}
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
