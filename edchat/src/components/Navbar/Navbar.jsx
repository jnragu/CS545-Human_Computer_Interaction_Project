import React from 'react'
import navbarStyles from './navbarStyles.js';
import { makeStyles, Button, IconButton } from '@material-ui/core';
import logo from '../Icons/StevensLogo.png';
import MagGlass from "../Icons/Mag.svg";
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import PersonIcon from '@material-ui/icons/Person';
const useStyles = makeStyles(navbarStyles);

function Navbar() {
    const classes = useStyles()
    return (
        <div>
            <nav className={classes.topnav} >
                <div className={classes.title}>
                    <img src={logo} alt="logo" className={classes.logo} />
                    <Button style={{ textTransform: 'capitalize' }}>Stevens Institute of Technology</Button>
                </div>
                <form action="/" className={classes.form}>
                    <input type="text" placeholder="Type to search" className={classes.searchField} />
                    <button type="submit" className={classes.searchButton}>
                        <img src={MagGlass} alt="Mangifying Glass" />
                    </button>
                </form>
                <div className={classes.Icons}>
                    <IconButton style={{ color: '#AEAEAE' }} className={classes.Bell}>
                        <NotificationsNoneOutlinedIcon />
                    </IconButton>
                    <IconButton style={{ color: '#AEAEAE' }} className={classes.userIcon}>
                        <PersonIcon />
                    </IconButton>
                </div>

            </nav>
        </div>
    )
}

export default Navbar
