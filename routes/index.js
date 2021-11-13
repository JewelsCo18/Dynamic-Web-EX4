const express = require('express'); 

const router = express.Router(); 

const firestore = require("firebase/firestore"); 

const db = firestore.getFirestore(); 

router.get('/', (req, res) =>{
    //blogposts is a function
    const blogposts = firestore.getDocs(firestore.collection(db, "blogposts")); 

    const blogPostsArray = []

    blogposts //therefore we can call it asynchonously 
        .then((response) => {
            //we can put a console log here for testing 
            response.forEach((doc) => {
                blogPostsArray.push(doc.data()); 
            })
            return res.send(blogPostsArray); 
        })
        .catch(function (error) {
            console.log("Error: ", error); 
            return res.send(error); 
        });
}); 

module.exports = router; 