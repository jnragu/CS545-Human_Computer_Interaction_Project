import React from 'react'
import { Card, 
        CardHeader, 
        TextField, 
        CardContent, 
        Button, 
        CardActions, 
        FormControl,
        Select,
        Menu,
        MenuItem,
        InputLabel
} from '@material-ui/core'
import { AskQuestion } from '../Post/PostFunctions.js'
import { withStyles } from '@material-ui/styles';
import { GetAllCourses } from '../Post/PostFunctions.js';

const styles = theme => ({
    root: {
        width: '500px'
    },
    formControl: {
        minWidth: 150,
        marginLeft: theme.spacing(2),
    }
});

class AskAQuestion extends React.Component {

    constructor() {
        super();
        this.state = {
            "options": [],
            "selectedCourse": "",
            "isOpen": true
        }
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleOpen() {
        this.setState({ isOpen: true });
    }

    handleClose() {
        this.setState({ isOpen: false });
        console.log(this.state.isOpen)
    }


    componentWillMount() {
        const promise = GetAllCourses();

        //Promise is binded to this class so it can have scope of this.state
        promise.then(function (AllCourses) {

            this.setState({ "selectedCourse": AllCourses[0].data.course_id });

            var courses = AllCourses.map((course) => course.data.course_id)
            
            var coursesDict = {}
            AllCourses.map((course) => coursesDict[course.data.course_id] = course.data.course_color)
            
            this.setState({ 'options': courses });
            this.setState({ 'courseColors': coursesDict})
        }.bind(this));
    }

    render() {
        //used to store Title and Content
        const { classes } = this.props;
        var name;
        var title;
        var content;

        this.state.anchorEl = null

        let dropDownItems = []
        this.state.options.forEach((course, index) => {
            dropDownItems.push( 
                <MenuItem value={course}>
                    {course}
                </MenuItem>
            )
        })
        console.log(this.state.options)

        const handleClick = function (event) {
            var course = this.state.selectedCourse;
            if (!title || !content) {
                console.log("Error: missing value for Asking a question");
            }
            else {
                var date = new Date().getTime()
                var color = this.state.courseColors[course]
                if (!name) {
                    name = "Anonymous"
                }
                var res = AskQuestion(name, course, title, content, date, color);
                res.then(function () {
                    window.location.reload();
                });
            }

        }.bind(this);
        
        const handleChangeTitle = function (event) {
            title = event.target.value;
        }

        const handleChangeContent = function (event) {
            content = event.target.value;
        }

        const handleChangeName = function (event) {
            name = event.target.value;
        }

        const handleChangeCourse = function (event) {
            this.state.selectedCourse = event.target.value;
        }.bind(this)

        return (
            <Card className={classes.root}>
                <CardContent>
                    <TextField
                        label='Display Name'
                        variant='outlined'
                        onChange={handleChangeName}
                        defaultValue="Anonymous"
                    />
                </CardContent>
                <FormControl 
                    variant='outlined'
                    className={classes.formControl}
                >
                    <InputLabel>
                        Class
                    </InputLabel>
                    <Select id='selectList' onChange={handleChangeCourse}>
                        {dropDownItems}
                    </Select>
                </FormControl>
                <CardHeader
                    title={
                        <TextField
                            label='Add a Title'
                            variant='outlined'
                            onChange={handleChangeTitle}
                            fullWidth={true}
                        />
                    } />
                <CardContent>
                    <TextField
                        multiline
                        rows={5}
                        placeholder='Start typing your question here...'
                        variant='outlined'
                        onChange={handleChangeContent}
                        fullWidth={true}
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
                    {/* <Button
                        color='primary'
                    >
                        Cancel
                    </Button> */}
                </CardActions>
            </Card>
        )
    }
}

export default withStyles(styles)(AskAQuestion);
