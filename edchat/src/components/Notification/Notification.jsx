import React from 'react'
import { makeStyles,
         Grid,
         Avatar,
         Typography
        } from '@material-ui/core'
import { Person } from '@material-ui/icons'

const useStyles = makeStyles(theme => ({}))

const dummyContent = 'Nice analysis. You also have made me think of what we would do if we tried to anticipate a video of personal tech 20 years from now!'

export default function Notification() {
    const classes = useStyles()
    return(
        <Grid>
            <Avatar>
                <Person />
            </Avatar>
            <Typography>
                Gregg Vesonder replied to your post
            </Typography>
            <Typography>
                {dummyContent}
            </Typography>
            <Typography>
                25 minutes ago
            </Typography>
        </Grid>
    )
}