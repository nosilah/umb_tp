var express = require('express');
var router = express.Router();
const fetch = require('node-fetch')

/* GET users listing. */
router.post('/', async function (req, res) {
        
    let email = req.body.Email;
    let data = {
        "email": email
    }
    
    let responce = await fetch('http://nginx/api/getauthlink', {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
        .catch(err => console.log(err))

        console.log(responce);
    res.send(responce)
});


module.exports = router;