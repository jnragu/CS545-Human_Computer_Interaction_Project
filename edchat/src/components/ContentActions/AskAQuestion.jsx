import React, { useState } from 'react'
import { makeStyles, Card, CardHeader, TextField, CardContent, Button, CardActions } from '@material-ui/core'
import {AskQuestion} from '../Post/PostFunctions.js'

const useStyles = makeStyles(theme => ({}))

export default function AskAQuestion() {
    //used to store Title and Content
    var name;
    var title;
    var content;

    const classes = useStyles()
    const [contentValue, setContentValue] = useState('Controlled')

    const handleChange = (event) => {
        setContentValue(event.target.value)
    }

    const handleClick = function(event) {
        if (!title || !content){
            console.log("Error: missing value for Asking a question");
        }
        else {
            var date = new Date().getTime()
            if (!name) {
                name = "Anonymous"
            }
            var res = AskQuestion(name, title, content, date);
            res.then(function () {
                window.location.reload();
            });
        }
        
    }

    const handleChangeTitle = function(event) {
        title = event.target.value;
    }

    const handleChangeContent = function(event) {
        content = event.target.value;
    }

    const handleChangeName = function(event) {
        name = event.target.value
    }

    return(
        <Card>
            <CardContent>
                <TextField 
                    label='Display Name'
                    variant='outlined'
                    onChange={handleChangeName}
                    defaultValue="Anonymous"
                />
            </CardContent>
            <CardHeader 
            title={
                <TextField 
                    label='Add a Title'
                    variant='outlined'
                    onChange={handleChangeTitle}
                />
            }/>
            <CardContent>
                <TextField 
                multiline 
                rows={5}
                placeholder='Start typing your question here...'
                variant='outlined'
                onChange={handleChangeContent}
                />
            </CardContent>
            <CardActions>
                <Button
                    variant='contained'
                    color='primary'
                    onClick={handleClick}
                >
                    Post
                </Button>
            </CardActions>
        </Card>
    )
}

// export default class AskAQuestion extends React.Component {
//     constructor(){
//         super();
//     }

//     render(){
//         //const classes = useStyles()
//         const [contentValue, setContentValue] = useState('Controlled')

//         const handleChange = (event) => {
//             setContentValue(event.target.value)
//         }

//         const handleClick = function(event) {
//             console.log(1);
//         }

//         return(
//             <Card>
//                 <CardHeader 
//                 title={
//                     <TextField 
//                         label='Add a Title'
//                         variant='outlined'
//                     />
//                 }/>
//                 <CardContent>
//                     <TextField 
//                     multiline 
//                     rows={5}
//                     placeholder='Start typing your question here...'
//                     variant='outlined'
//                     />
//                 </CardContent>
//                 <CardActions>
//                     <Button
//                         variant='contained'
//                         color='primary'
//                         onClick={handleClick}
//                     >
//                         Post
//                     </Button>
//                 </CardActions>
//             </Card>
//         )
//     }
// }