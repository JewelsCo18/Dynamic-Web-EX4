const express = require('express'); 

const router = express.Router();

//Create form for submitting
const form = `
<h1> Create Articles</h1>

<form action="/create/submit">
    <div style="display: flex; flex-direction:column; margin-bottom:20px; max-width: 325px;">
        <label for="articleTitle"> Article Title </label>
        <input type="text" name="articleTitle" placeholder="type article title..."/>

        <label for "articleText"> Article Text </label>
        <input type="text" name="articleText" placeholder="Article text..."/>

        <label for "author"> Author </label>
        <input type="text" name="author" placeholder="Author name..."/>
    </div>
    <button type="submit"> Submit Article </button>
</form>
`; 

//require firebase
const firestore = require('firebase/firestore'); 

//reference firestore db 
const db = firestore.getFirestore(); 

//Serves web form for users
router.get('/', (req, res) =>{
    res.send(form); 
});

//API endpoint for data submission 
router.get("/submit", (req, res) => {
    const queryParams = req.query; //Query parameter from URL
    const title = queryParams.articleTitle; 
    const text = queryParams.articleText; 
    const author = queryParams.author; 

    //Create ID from title
    const idFromTitle = title.replace(/\s+/g, '-').toLowerCase();  //this is written with regex...essentially strips spaces and replaces with dashes

    //Submit to firebase
    const setBlogPost = firestore.setDoc(firestore.doc(db, "blogposts", idFromTitle), {
        title: title, 
        text: text, 
        author: author, 
    })

    setBlogPost
        .then((response) => {
            //If successful send correct message
            res.send(`
            <h1> Submission Successful!</h1>
            <p><a href="/create"> Add another post here!</a></p>`)
        })
        .catch((error) => {
            //if failure send correct message
            console.warn(error); 
            res.send(`Error Submitting: ${error.toString()}`); 
        }); 
}); 

module.exports = router; 