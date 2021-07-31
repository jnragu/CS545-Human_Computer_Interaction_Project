import React from 'react'
import { Container, Grid, Card, CardHeader, CardContent, CardActions, Typography, Avatar, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import PostHeader from './PostHeader'
import PostAuthor from './PostAuthor'
import PostContent from './PostContent'
import PostActions from './PostActions'
import {AskQuestion, Respond, GetAllPosts} from './PostFunctions.js'

const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: 'sm'
    },
}))

// export default function Post() {
//     const promise = GetAllPosts();

//     //Must handle promise. Ask joe for help with promises. 
//     promise.then(function(AllPosts) {
//         //This is an array of all questions in the database. 
//         //AllPosts[0].id is the auto-generated ID in the database. use this to index.
//         //AllPosts[0].data is the raw data.
//         //Check browser console to see this printed to console. Also check PostFunctions.js for how these functions work. 

//         //Make sure you keep the id of every post stored somewhere. But only add the post.data attribute to the DOM
        
//         for (var i = 0; i < AllPosts.length; i++){
            
//         }
//         console.log(AllPosts)
//     });

//     const classes = useStyles()
//     return (
//         <Container className={classes.root}>
//             <Card>
//                 <PostHeader 
//                     author= { <PostAuthor time="8/1/2020" author="Joe"/> } title="Example Title"
//                 />
//                 <PostContent content="Example Content"/>
//                 <PostActions />
                
//             </Card>
//         </Container>
//     )
// }
class Post extends React.Component {
    constructor(){
        super();
        this.state = {
            content: 'Loading'
        }
    }

    componentWillMount() {
        const promise = GetAllPosts();
        
        promise.then(function(AllPosts) {
            //This is an array of all questions in the database. 
            //AllPosts[0].id is the auto-generated ID in the database. use this to index.
            //AllPosts[0].data is the raw data.
            //Check browser console to see this printed to console. Also check PostFunctions.js for how these functions work. 

            //Make sure you keep the id of every post stored somewhere. But only add the post.data attribute to the DOM
            
            for (var i = 0; i < AllPosts.length; i++){
                
            }
            this.setState({content: AllPosts[0].id});
        }.bind(this));
    }

    render(){
        let content = ''
    
        return (
            <Container className={{
                maxWidth: 'sm'
            }}>
                <Card>
                    <PostHeader 
                        author= { <PostAuthor time="8/1/2020" author="Joe"/> } title="Example Title"
                    />
                    <PostContent content={this.state.content}/>
                    <PostActions />
                    
                </Card>
            </Container>
        )
    }
}
export default Post;