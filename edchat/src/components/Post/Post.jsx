import React from 'react'
import { Container, Card, Accordion } from '@material-ui/core'
import { withStyles } from '@material-ui/styles';
import PostHeader from './PostHeader'
import PostAuthor from './PostAuthor'
import PostContent from './PostContent'
import PostActions from './PostActions'
import { AskQuestion , Respond, GetAllPosts } from './PostFunctions.js'

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
        var date = new Date(post.data.date).toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric', hour12: true, hour: "numeric", minute: "numeric"});
        return <div>
                    <PostHeader author= { <PostAuthor time={date} author="Joe"/> } title={post.data.question}/>
                    <PostContent content={post.data.content}/>
                    <PostActions responses={post.data.responses}/>
                </div>;
    }

    componentWillMount() {
        const promise = GetAllPosts();
        
        //Promise is binded to this class so it can have scope of this.state
        promise.then(function(AllPosts) {          
            
            AllPosts.sort((a, b) => (a.data.date > b.data.date) ? 1 : -1)
            
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