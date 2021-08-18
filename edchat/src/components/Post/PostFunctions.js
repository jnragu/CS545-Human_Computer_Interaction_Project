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

    var res = post.update({
        responses: firebase.firestore.FieldValue.arrayUnion(response)
    });
    return res;
}

//Create a brand new question in the database.
//Initialize responses to empty array.
function AskQuestion(name, course, question, content, date){
    var response = db.collection("post").add({
        "name": name,
        "courseid": course,
        "question": question,
        "content": content,
        "date": date,
        "responses": [] 
    });
    return response;
}

async function GetAllCourses() {
    var courses = await db.collection("courses").get();
    var AllCourses = []
    courses.forEach((doc) => {
        AllCourses.push({
            "id": doc.id,
            "data": doc.data()
        });
    });

    return AllCourses;
}

//Create a brand new course in the database.
//Initialize responses to empty array.
function CreateCourse(course_name, course_id, course_color){
    var response = db.collection("courses").add({
        "course_name": course_name,
        "course_id": course_id,
        "course_color": course_color
    });
    return response;
}

export {GetAllPosts, AskQuestion, Respond, GetAllCourses, CreateCourse}
