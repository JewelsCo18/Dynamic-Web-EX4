const express = require('express'); 

const router = express.Router(); 

router.get('/', (req, res) =>{
    res.send(`
    <h1> Individual Post </h1>
    <p>Post goes here </p>
    `); 
}); 

module.exports = router; 