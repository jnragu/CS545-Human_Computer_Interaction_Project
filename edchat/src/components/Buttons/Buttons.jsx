import React, { useState } from 'react';
import { makeStyles, Button } from '@material-ui/core';

import buttonStyles from './buttonStyle.js';
import AddBox from '@material-ui/icons/AddBox';

const useStyles = makeStyles(buttonStyles);

function Buttons() {
    const classes = useStyles();

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            {/* Anisha's work area */}
            <Button className={classes.btn} startIcon={<AddBox />} onClick={handleClickOpen}>
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
