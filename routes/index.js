const express = require('express'); 

const router = express.Router(); 

const firebase = require("firebase/firestore/lite"); 

const db = firebase.getFirestore(); 
//reference to the blogpost collection created on firebase web 
const blogposts = db.collection("blogpost"); 

router.get('/', (req, res) =>{
    res.send(`
    <h1> All Articles</h1>
    <p> Articles coming soon...firebase setup necessary</p>
    `); 
}); 

module.exports = router; 