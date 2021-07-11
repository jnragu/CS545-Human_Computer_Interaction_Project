import React from 'react';
import dashboardStyles from './dashboardStyles.js';
import { makeStyles } from '@material-ui/core';
import Navbar from './Navbar/Navbar.jsx';
import Courses from './Courses/Courses.jsx';
import Posts from './Posts/Posts.jsx'

const useStyles = makeStyles(dashboardStyles);

function Dashboard() {
    const classes = useStyles()
    return (
        <div style={{ backgroundColor: '#FBFBFB', color: '#2D2D2A', height: '100vh' }}>
            <Navbar />
            <div style={{ display: 'flex', }}>
                <Courses />
                <Posts />
            </div>

        </div>
    )
}

export default Dashboard;