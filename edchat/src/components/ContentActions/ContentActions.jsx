import React, { Component } from 'react'
import { makeStyles, Button, Grid, TextField, InputAdornment, Popover } from '@material-ui/core'
import { Search, AddBox } from '@material-ui/icons'
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state'

const useStyles = makeStyles( theme => ({
    root: {
        direction: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    }
}))

export default function ContentActions() {
    const classes = useStyles() 
    return(
        <Grid container className={classes.root}>
            <Grid item>
                <Button 
                    startIcon={<AddBox />}
                    variant='contained'
                    color='primary'
                    onClick={this.onTrigger}
                >
                    Ask a Question
                </Button>
            </Grid>
            <Grid item>
                <TextField 
                    variant='outlined'
                    label='Tags'
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position='start'>
                                <Search fontSize='small'/>
                            </InputAdornment>
                        )
                    }}
                />
            </Grid>
        </Grid>
    )
}