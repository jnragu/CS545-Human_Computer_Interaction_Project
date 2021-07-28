import React from 'react'
import { makeStyles, Container, AppBar, Typography, Toolbar, TextField, InputAdornment, Badge, Avatar, Grid } from '@material-ui/core'
import { Search, Notifications, Person } from '@material-ui/icons'
import logo from '../Icons/StevensLogo.png'

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

export default function NavBar() {
    const classes = useStyles()
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
                    <Badge badgeContent={1}>
                        <Notifications />
                    </Badge>
                    <Badge>
                        <Person />
                    </Badge>  
                </div>
            </Toolbar>
        </AppBar>
    )
}