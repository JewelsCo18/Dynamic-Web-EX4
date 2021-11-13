const express = require('express'); 

const router = express.Router(); 

const firestore = require("firebase/firestore"); 

const db = firestore.getFirestore(); 

//Getting a single article by ID
//Available at /article/:id

//default
router.get('/', (req, res) =>{
    res.send(`Please include an ID`); 
}); 

router.get('/:id', (req, res) =>{
    const postId = req.params.id; 
    const blogpost = firestore.getDoc(firestore.doc(db, "blogposts", postId)); 

    blogpost
        .then((response) => {
            const post = response.data(); 
            if(post) {
                res.send(post); 
            } else {
                return res.send("No document!"); 
            }  
        }).catch((error) => {
            res.send("No doc...error: ", error); 
        })
}); 

module.exports = router; 