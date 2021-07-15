import React from 'react';
import { makeStyles, Button } from '@material-ui/core';

import buttonStyles from './buttonStyle.js';

const useStyles = makeStyles(buttonStyles);

function Buttons() {
    const classes = useStyles();
    return (
        <div>
            {/* Anisha's work area */}
            <Button className={classes.btn}>
                Ask a Question
            </Button>
            {/* Anusha's work area */}
            <section style={{ backgroundColor: 'green' }}>
                Tags
            </section>
        </div>
    )
}

export default Buttons;
