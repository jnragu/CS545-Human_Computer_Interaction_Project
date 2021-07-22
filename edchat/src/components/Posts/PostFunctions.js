import firebase from 'firebase'

//DONT DO THIS IN A REAL SCENARIO. This gives anyone full access to firebase console. Deploy an API to hide this logic instead. 
const firebaseConfig = {
    apiKey: "AIzaSyAnnZxuCx8dSwMCFzop8YqkVX96ZdTYwg8",
    authDomain: "cs545-project.firebaseapp.com",
    projectId: "cs545-project",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

async function GetAllPosts() {
    var posts = await db.collection("post").get();
    var AllPosts = []
    posts.forEach((doc) => {
        AllPosts.push({
            "id": doc.id,
            "data": doc.data()
        });
    });

    return AllPosts;
}

function Respond(id, response){
    var post = db.collection("post").doc(id);

    post.update({
        responses: firebase.firestore.FieldValue.arrayUnion(response)
    });
}

function AskQuestion(question){
    db.collection("post").add({
        "question": question,
        "responses": [] 
    });
}

export {GetAllPosts, AskQuestion, Respond}