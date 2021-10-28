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
    res.json(responce)
});

router.get('/api/auth/:id/:authkey/', async (req, res) => {

    let responce = await fetch(`http://nginx/api/auth/${req.params.id}/${req.params.authkey}`)
        .then(res => res.json())
        .catch(err => console.log(err))

    console.log('get the link');
    console.log(responce);
    console.log(req.url);
    if (responce.accessToken) {
       
        res.json({
            "id": responce.user.id,
            "email": responce.user.email,
            "name": '',
            "accessToken": responce.accessToken
        })
    } else {
        res.json({
            responce
        })

    }


})

router.get('/home', (req, res) => res.redirect('/'))

router.get('/logout', (req, res) => {



    res.json('you are logout')
})

router.get('/check_auth', async (req, res) => {
    if (req.cookies.authPortal) {

        headers = {
            Authorization: "Bearer " + req.cookies.authPortal.accessToken
        }
        let responceApi = await fetch('http://nginx/api/check_auth', {
            headers: headers
        }).then(res => res.json()).catch(err => console.log(err));

        console.log(res);
        //    console.log("Bearer " + req.cookies.authPortal.accessToken);
        if (responceApi) {
            res.send(responceApi.user)
        } else {
            res.send('your token not exexts')
        }
    } else {
        res.redirect('/')
    }

})




router.get('/test', (req, res) => res.redirect('/'))


// router.get('/profile', (req, res) => res.send(console.log(res)))


module.exports = router;