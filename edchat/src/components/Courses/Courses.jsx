import React from 'react';
import { makeStyles } from '@material-ui/core';
import courseStyle from './coursesStyle.js'

const useStyles = makeStyles(courseStyle);

function Courses() {
    const classes = useStyles()

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
                    <p className={classes.name}>{course.name}</p>
                    <p className={classes.section}>{course.section}</p>
                </div>
            ))}
        </div>
    )
}

export default Courses
