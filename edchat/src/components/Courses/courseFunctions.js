import firebase from 'firebase'

//DONT DO THIS IN A REAL SCENARIO. This gives anyone full access to firebase console. Deploy an API to hide this logic instead. 
const firebaseConfig = {
    apiKey: "zbXQrqvl2K5WxfDCPPaskvhofCBP9RyizqGynrPC",
    authDomain: "cs545-project.firebaseapp.com",
    projectId: "cs545-project",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

//Returns an array of every course in the database.
//Returns a promise of the data.
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
function CreateCourse(course_name, course_id){
    var response = db.collection("courses").add({
        "course_name": course_name,
        "course_id": course_id
    });
    return response;
}

export {GetAllCourses, CreateCourse}
