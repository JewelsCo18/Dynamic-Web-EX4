const express = require('express'); 

const router = express.Router(); 

router.get('/', (req, res) =>{
    res.send(`
    <h1> All Articles</h1>
    <p> Articles coming soon...firebase setup necessary</p>
    `); 
}); 

module.exports = router; 