import React from 'react'
import { Container, Grid, Card, CardHeader, CardContent, CardActions, Typography, Avatar, Button } from '@material-ui/core'
import { withStyles } from '@material-ui/styles';
import PostHeader from './PostHeader'
import PostAuthor from './PostAuthor'
import PostContent from './PostContent'
import PostActions from './PostActions'
import {AskQuestion, Respond, GetAllPosts} from './PostFunctions.js'

const styles = theme => ({
    root: {
        maxWidth: 'sm',
        listStyleType: 'none'
    }
})

class Post extends React.Component {
    constructor(){
        super();
        this.state = {
            content: 'Loading'
        }
    }

    MakePost(post){
        // TODO
        // Add responses to question's content. 
        // New React Component?
        return <div>
                    <PostHeader author= { <PostAuthor time="8/1/2020" author="Joe"/> } title={post.data.question}/>
                    <PostContent content={post.data.content}/>
                    <PostActions />
                </div>;
    }

    componentWillMount() {
        const promise = GetAllPosts();
        
        //Promise is binded to this class so it can have scope of this.state
        promise.then(function(AllPosts) {          
            var rows = [];

            for (var i = 0; i < AllPosts.length; i++){
                const post = this.MakePost(AllPosts[i]);
                const elm = <li key={AllPosts[i].id}>
                                {post}
                            </li>
                rows.push(elm)
            }
            
            this.setState({content: rows});
        }.bind(this));
    }

    render(){
        const { classes } = this.props;
        return (
            <Container className={classes.root}>
                <Card>
                    {this.state.content}
                </Card>
            </Container>
        )
    }
}
export default withStyles(styles)(Post);