const express = require("express"); 
const app = express(); 

const port = 4000; 

const indexRoute = require('./routes/index.js'); 
const articleRoute = require('./routes/article')
const createArticleRoute = require('./routes/createArticle');

app.use('/', indexRoute); 
app.use('/article', articleRoute); 
app.use('/create', createArticleRoute); 

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})