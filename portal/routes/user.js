const express = require('express');
const router = express.Router();
const fetch = require('node-fetch')


/**
 * this route for update the user profile and can be work only if user is   authorzated
 * @return object updated users 
 */

router.post('/api/user/update-profile', async (req, res) => {

    // let email = req.body.email;
    let data = {
        "name": req.body.name,
        "email": req.body.email,
    }

    let responce = await fetch(`http://nginx/api/user/${req.body.id}/update-profile`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + req.headers['authorization']
        }
    }).then(res => res.json()).catch(err => console.log(err))

    // .catch(err => console.log(err))
    // console.log(responce.status);
    // let resData = {
        
    // }
    console.log(responce.data);
    if (responce) {
        res.json(responce.data)
    }else{
        res.json({
            massage: "this email using with another user"
        })
    }

});

module.exports = router;