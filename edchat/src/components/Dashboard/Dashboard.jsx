import React, { useState } from 'react'
import { makeStyles, 
        Container, 
        Toolbar, 
        Fab, 
        Typography,
        Dialog,
        DialogTitle, 
        Tooltip,
        Grid
    } from '@material-ui/core'
import NavBar from '../Navbar/Navbar'
import SideBar from '../SideBar/SideBar'
import Post from '../Post/Post'
import ContentActions from '../ContentActions/ContentActions'
import { ContactSupport, CloseOutlined } from '@material-ui/icons'
import AskAQuestion from '../ContentActions/AskAQuestion'

const useStyles = makeStyles( theme => ({
    root: {
        maxWidth: 'lg',
        backgroundColor: theme.palette.background,
        display: 'flex',
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background,
        padding: theme.spacing(3),
      },
    post: {
        padding: theme.spacing(2), 
        margin: theme.spacing(2),
    },
    fab: {
        position: 'fixed',
        bottom: theme.spacing(15),
        right: theme.spacing(10),
      },
      fabIcon: {
          marginRight: theme.spacing(.5)
      }
  }))


export default function Dashboard() {
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
            <Container className={classes.root}>
                <NavBar />
                <SideBar />
                <main className={classes.content}>
                    <Toolbar />
                    <ContentActions />
                    <Post className={classes.post}/>
                </main>
                <Fab 
                    className={classes.fab}
                    variant='extended'
                    color='primary'
                    onClick={handleClick}
                >
                    <ContactSupport className={classes.fabIcon}/>
                    <Typography variant='h2'>
                        Ask a Question
                    </Typography>
                </Fab>
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
                                <CloseOutlined />
                            </Tooltip>
                        </Grid>
                    </Grid>
                    <DialogTitle>
                        Create Post
                    </DialogTitle>

                    <AskAQuestion />
                </Dialog>
            </Container>
        )

}
