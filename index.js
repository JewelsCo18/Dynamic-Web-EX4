const express = require("express"); 
const app = express(); 
//Setting up port dynaically with Heroku
const port = process.env.PORT || 4000; 

const firebase = require("firebase/app"); 

//Firebase configuration object 
const firebaseConfig = {
    apiKey: "AIzaSyAM9jTOzVw5P6ltKUsW6N_tj-65Xi1Dulw",
    authDomain: "exercise-four-af84d.firebaseapp.com",
    projectId: "exercise-four-af84d",
    storageBucket: "exercise-four-af84d.appspot.com",
    messagingSenderId: "181653130447",
    appId: "1:181653130447:web:64bac580d11d2251a1fbba"
};

firebase.initializeApp(firebaseConfig); 

const indexRoute = require('./routes/index.js'); 
const articleRoute = require('./routes/article')
const createArticleRoute = require('./routes/createArticle');

app.use('/', indexRoute); 
app.use('/article', articleRoute); 
app.use('/create', createArticleRoute); 

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})