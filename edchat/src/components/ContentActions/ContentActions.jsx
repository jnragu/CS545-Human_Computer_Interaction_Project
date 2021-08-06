import React, { Component, useState } from 'react'
import { makeStyles, Button, Grid, TextField, InputAdornment, Popover, Typography } from '@material-ui/core'
import { Search, AddBox } from '@material-ui/icons'
import AskAQuestion from './AskAQuestion'

const useStyles = makeStyles(theme => ({
    root: {
        direction: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
}))

export default function ContentActions() {
    const classes = useStyles()
    const [anchorEl, setAnchorEl] = useState(null)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const open = Boolean(anchorEl)
    const id = open ? 'simple-popover' : undefined

    return (
        <Grid container className={classes.root}>
            <Grid item>
                <Button
                    startIcon={<AddBox />}
                    variant='contained'
                    color='primary'
                    onClick={handleClick}
                >
                    Ask a Question
                </Button>
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
                    <AskAQuestion />
                </Popover>
            </Grid>
            <Grid item>
                <TextField
                    variant='outlined'
                    label='Tags'
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position='start'>
                                <Search fontSize='small' />
                            </InputAdornment>
                        )
                    }}
                />
            </Grid>
        </Grid>
    )
}