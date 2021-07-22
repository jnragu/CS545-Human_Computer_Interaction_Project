import React from 'react'
import {AskQuestion, Respond, GetAllPosts} from './PostFunctions.js'

function Posts() {
    const promise = GetAllPosts();

    //Must handle promise. Ask joe for help with promises. 
    promise.then(function(AllPosts) {
        //This is an array of all questions in the database. 
        //AllPosts.id is the auto-generated ID in the database. use this to index.
        //AllPosts.data is the raw data.
        //Check browser console to see this printed to console. Also check PostFunctions.js for how these functions work. 
        console.log(AllPosts);
    });
    return (
        <div style={{ backgroundColor: 'red', width: '60vw', height: '100vh', }}>
            anisha was here
        </div>
    )
}

export default Posts
