import React from 'react';
import dashboardStyles from './dashboardStyles.js';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(dashboardStyles);

function Dashboard() {
    const classes = useStyles()
    return (
        <div>
            test
        </div>
    )
}

export default Dashboard;