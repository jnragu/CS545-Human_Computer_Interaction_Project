import React, { Component, useState } from 'react'
import { makeStyles, Button, Grid, TextField, InputAdornment, Dialog, DialogTitle, DialogContent, Tooltip } from '@material-ui/core'
import { Search, AddBox } from '@material-ui/icons'
import AskAQuestion from './AskAQuestion'
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';

const useStyles = makeStyles(theme => ({
    root: {
        paddingBottom: '30px',
        paddingTop: '20px',
        marginLeft: '25px'
    },
}))

export default function ContentActions() {
    const classes = useStyles()
    const [anchorEl, setAnchorEl] = useState(null)
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
        setIsOpen(true)
    }

    const handleClose = () => {
        setAnchorEl(null)
        setIsOpen(false)
    }


    const open = Boolean(anchorEl)
    const id = open ? 'simple-popover' : undefined

    return (
        <Grid container className={classes.root}>

            <Grid item>
{/*                 <Button
                    startIcon={<AddBox />}
                    variant='contained'
                    color='primary'
                    onClick={handleClick}
                >
                    Ask a Question
                </Button> */}
                <Dialog
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
                    <Grid item container alignItems="flex-end" direction="column">
                        <Grid item onClick={handleClose}>
                            <Tooltip title="Cancel" placement="right-start">
                                <CloseOutlinedIcon />
                            </Tooltip>
                        </Grid>
                    </Grid>
                    <DialogTitle>
                        Create Post
                    </DialogTitle>

                    <AskAQuestion />
                </Dialog>
            </Grid>
        </Grid>
    )
}