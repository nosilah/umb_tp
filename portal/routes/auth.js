
const express = require('express');
const router = express.Router();
const fetch = require('node-fetch')

/* GET users listing. */
router.post('/register', async (req, res) => {

    let email = req.body.email;
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
        // .catch(err => console.log(err))

    console.log(responce.status);
    res.send(responce)
});

router.get('/api/auth/:id/:authkey', async (req, res) => {

    let params = {
        "id" : req.params.id,
        "authkey": req.params.authkey,
    }
    let responce = await fetch(`http://nginx/api/auth/${req.params.id}/${req.params.authkey}`)
    .then(res => res.json())
    .catch(err => console.log(err))

    console.log(responce.accessToken);
    let auth = {
        "accessToken" : responce.accessToken
    }
    res.cookie("authPortal", auth)
    res.redirect('/' + 'heretestmusldkf')

})

router.get('/logout', (req, res) => {

    console.log(req.cookies.authPortal.accessToken);
    // res.clearCookie('AuthPortalApi')
    res.send('you are logout')
})

// router.get('/')

// router.get('/profile', (req, res) => res.send(console.log(res)))


module.exports = router;