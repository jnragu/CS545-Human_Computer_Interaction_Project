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
        IconButton
    } from '@material-ui/core'
import { Search, Notifications, Person } from '@material-ui/icons'
import logo from '../Icons/StevensLogo.png'
import Notification from '../Notification/Notification'

const useStyles = makeStyles( theme => ({
    root: {
        zIndex: theme.zIndex.drawer + 1,
    },
    title: {
        marginLeft: '20px'
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

    const open = Boolean(anchorEl)
    const id = open ? 'notification-popover' : undefined 

    return (
        <AppBar postition='fixed' color='inherit' className={classes.root}>
            <Toolbar>
                <Avatar src={logo} />
                <Typography variant='h2' className={classes.title}>   
                    Stevens Institute of Technology
                </Typography>
                <TextField 
                    variant='outlined'
                    label='Tags'
                    InputProps={{
                    endAdornment: (
                        <InputAdornment position='end'>
                            <Search fontSize='small'/>
                        </InputAdornment>
                        )
                    }}
                    className={classes.search}
                />
                <div className={classes.actions}>
                    <IconButton
                        onClick={handleClick}
                    >
                        <Badge badgeContent={1}>
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