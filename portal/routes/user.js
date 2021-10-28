const express = require('express');
const router = express.Router();
const fetch = require('node-fetch')


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
  }).then(res => res.json())
  // .catch(err => console.log(err))

  // console.log(responce.status);
  console.log(req.headers['authorization']);
  res.json(responce)
});

module.exports = router;
