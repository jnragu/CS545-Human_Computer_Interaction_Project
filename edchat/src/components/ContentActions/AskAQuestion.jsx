import React, { useState } from 'react'
import { makeStyles, Card, CardHeader, TextField, CardContent, Button, CardActions } from '@material-ui/core'
import {AskQuestion} from '../Post/PostFunctions.js'
import { withStyles } from '@material-ui/styles';
import {CreateCourse, GetAllCourses} from '../Post/PostFunctions.js';

const styles = theme => ({
    "dropDown": {
        width: '80%',
        marginLeft: '10%',
        margingRight: '10%'
    }
});

class AskAQuestion extends React.Component {

    constructor() {
        super();
        this.state = {
            "options": [],
            "selectedCourse": ""
        }
    }
    
    componentWillMount() {
        const promise = GetAllCourses();

        //Promise is binded to this class so it can have scope of this.state
        promise.then(function (AllCourses) {

            this.setState({"selectedCourse": AllCourses[0].data.course_id});

            var courses = AllCourses.map((course, index) => (
                <option value={course.data.course_id}>{course.data.course_id}</option>
    
            ))

            this.setState({"options": courses });
        }.bind(this));
    }

    render() {
        //used to store Title and Content
        const { classes } = this.props;
        var name;
        var title;
        var content;



        const handleClick = function(event) {
            var course = this.state.selectedCourse;
            if (!title || !content){
                console.log("Error: missing value for Asking a question");
            }
            else {
                var date = new Date().getTime()
                if (!name) {
                    name = "Anonymous"
                }
                var res = AskQuestion(name, course, title, content, date);
                res.then(function () {
                    window.location.reload();
                });
            }
            
        }.bind(this);

        const handleChangeTitle = function(event) {
            title = event.target.value;
        }

        const handleChangeContent = function(event) {
            content = event.target.value;
        }

        const handleChangeName = function(event) {
            name = event.target.value;
        }

        const handleChangeCourse = function(event) {
            this.state.selectedCourse = event.target.value;
        }.bind(this)

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
                <select name="selectList" id="selectList" className={classes.dropDown} onChange={handleChangeCourse}>
                  {this.state.options}
                </select>
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
}

export default withStyles(styles)(AskAQuestion);

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