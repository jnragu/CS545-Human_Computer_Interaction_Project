import React, { useState } from 'react'
import { makeStyles, Button, Grid, TextField, InputAdornment, Popover, Typography, Dialog, DialogTitle, DialogContent } from '@material-ui/core'
import { Search, AddBox } from '@material-ui/icons'
import AskAQuestion from './AskAQuestion'

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
                    <DialogTitle>
                        Create Post
                    </DialogTitle>
                    <DialogContent>
                        Click away to cancel post
                    </DialogContent>
                    <AskAQuestion />
                </Dialog>
            </Grid>
        </Grid>
    )
}