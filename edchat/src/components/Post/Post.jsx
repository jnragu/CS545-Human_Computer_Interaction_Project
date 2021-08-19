import React from 'react'
import { Container, Card, Box } from '@material-ui/core'
import { withStyles } from '@material-ui/styles';
import PostHeader from './PostHeader'
import PostAuthor from './PostAuthor'
import PostContent from './PostContent'
import PostActions from './PostActions'
import { AskQuestion, Respond, GetAllPosts } from './PostFunctions.js'
import { spacing } from '@material-ui/system'

const styles = theme => ({
    root: {
        maxWidth: 'sm',
        listStyleType: 'none',
    },
    card: {
        marginTop: '1px'
    },
    listStyle: {
        listStyleType: 'none'
    }
})

class Post extends React.Component {
    constructor() {
        super();
        this.state = {
            content: 'Loading'
        }
    }

    MakePost(post) {
        // TODO
        // New React Component?
        const classes = styles();
        var date = new Date(post.data.date).toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric', hour12: true, hour: "numeric", minute: "numeric" });
        return (
            <Card className={classes.listStyle}>
                <PostHeader 
                    author={<PostAuthor time={date} author={post.data.name} />} 
                    title={post.data.question} 
                    color={post.data.course_color}
                    courseid={post.data.courseid}
                />
                <PostContent content={post.data.content} />
                <PostActions 
                    responses={post.data.responses} 
                    postid={post.id} 
                />
            </Card>
        )

    }

    componentWillMount() {
        const promise = GetAllPosts();
        const classes = styles();
        const urlParams = new URLSearchParams(window.location.search);
        const myParam = urlParams.get('classid');
        console.log(myParam);

        //Promise is binded to this class so it can have scope of this.state
        promise.then(function (AllPosts) {

            AllPosts.sort((a, b) => (a.data.date < b.data.date) ? 1 : -1)

            var rows = [];

            for (var i = 0; i < AllPosts.length; i++) {
                if (AllPosts[i].data.courseid == myParam || !myParam) {
                    const post = this.MakePost(AllPosts[i]);
                    const elm =
                        <div>
                            <li key={AllPosts[i].id} >
                                {post}
                            </li>
                            <div style={{textIndent: '-9999px'}}>hi</div>
                        </div>
                    rows.push(elm)
                }

            }

            this.setState({ content: rows });
        }.bind(this));
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.listStyle}>
                {this.state.content}
            </div>
        )
    }
}
export default withStyles(styles)(Post);