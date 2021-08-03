import firebase from 'firebase'

//DONT DO THIS IN A REAL SCENARIO. This gives anyone full access to firebase console. Deploy an API to hide this logic instead. 
const firebaseConfig = {
    apiKey: "zbXQrqvl2K5WxfDCPPaskvhofCBP9RyizqGynrPC",
    authDomain: "cs545-project.firebaseapp.com",
    projectId: "cs545-project",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

//Returns an array of every post in the database.
//Returns a promise of the data.
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

//id is the auto-generated ID of a post
//response is just a string
function Respond(id, response){
    var post = db.collection("post").doc(id);

    post.update({
        responses: firebase.firestore.FieldValue.arrayUnion(response)
    });
}

//Create a brand new question in the database.
//Initialize responses to empty array.
function AskQuestion(question, content, date){
    var response = db.collection("post").add({
        "question": question,
        "content": content,
        "date": date,
        "responses": [] 
    });
    return response;
}

export {GetAllPosts, AskQuestion, Respond}
