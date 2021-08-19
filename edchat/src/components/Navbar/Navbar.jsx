import React, { useState } from 'react'
import {
    makeStyles,
    Typography,
    Toolbar,
    TextField,
    InputAdornment,
    Badge,
    Avatar,
    Popover,
    AppBar,
    IconButton,
    Tooltip
} from '@material-ui/core'
import { Search, Notifications, Person } from '@material-ui/icons'
import logo from '../Icons/StevensLogo.png'
import Notification from '../Notification/Notification'

const useStyles = makeStyles(theme => ({
    root: {
        zIndex: theme.zIndex.drawer + 1,
    },
    title: {
        marginLeft: '20px',
        cursor: 'pointer'
    },

    search: {
        marginLeft: '60px'
    },
    actions: {
        marginLeft: 'auto'
    }
}))

export default function Navbar() {
    const classes = useStyles()
    const [anchorEl, setAnchorEl] = useState(null)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const goToHome = function () {
        window.location.href = "/";
    }

    const open = Boolean(anchorEl)
    const id = open ? 'notification-popover' : undefined

    return (
        <AppBar postition='fixed' color='inherit' className={classes.root}>
            <Toolbar>
                <Tooltip title="Home">
                    <Avatar src={logo} onClick={goToHome} style={{ cursor: 'pointer' }} />
                </Tooltip>
                <Tooltip title="Home">
                    <Typography variant='h2' className={classes.title} onClick={goToHome}>
                        Stevens Institute of Technology
                    </Typography>
                </Tooltip>
                <div className={classes.actions}>
                    <IconButton
                        onClick={handleClick}
                    >
                        <Badge badgeContent={1} color="primary">
                            <Notifications />
                        </Badge>
                    </IconButton>
                    <Popover
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                    >
                        <Notification />
                    </Popover>
                    <Badge>
                        <Person />
                    </Badge>
                </div>
            </Toolbar>
        </AppBar>
    )
}