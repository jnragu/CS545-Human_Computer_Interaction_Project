import React from 'react'
import { makeStyles, Container, Toolbar, Button } from '@material-ui/core'
import NavBar from '../NavBar/NavBar'
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
                    <Post />
                </main>
            </Container>
        )

}
