const express = require('express')
const morgan = require('morgan')
const path = require('path')
const cors = require('cors')
const { json } = require('express')

const app = express()

app.use(cors({ origin: 'http://localhost:3011/' , credentials :  true}));
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(morgan('dev'))

app.use('/', express.static(path.join(__dirname, '../dist')))

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods","GET,PUT,POST,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Headers","X-Requested-With,Content-type,Accept,X-Access-Token,X-Key");
    res.contentType('application/json')
    next();
  });
app.set('port', 3017)

app.listen(app.get('port'), () => {
    console.log(`server is wor on localhost:${app.get('port')}`);
});



app.post('/login', (req, res) => {
    
    res.send(req.body.User)
})
