import React from 'react'
import { makeStyles, Container, Toolbar, Button } from '@material-ui/core'
import NavBar from '../Navbar/Navbar'
import SideBar from '../SideBar/SideBar'
import Post from '../Post/Post'
import ContentActions from '../ContentActions/ContentActions'

const useStyles = makeStyles( theme => ({
    root: {
        maxWidth: 'lg',
        backgroundColor: theme.palette.background,
        display: 'flex'
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background,
        padding: theme.spacing(3),
      },
    post: {
        padding: theme.spacing(2), 
        margin: theme.spacing(2)
    }
  }))


export default function Dashboard() {
    const classes = useStyles()

        return (
            <Container className={classes.root}>
                <NavBar />
                <SideBar />
                <main className={classes.content}>
                    <Toolbar />
                    <ContentActions />
                    <Post className={classes.post}/>
                </main>
            </Container>
        )

}
