import express from 'express'
import morgan from 'morgan'
import  path  from 'path'
import cors from 'cors'
import { json } from 'express'

const app = express()


const corsOptions ={
    origin:'*', 
    credentials:true,            
    optionSuccessStatus:200,
 }
 
 app.use(cors(corsOptions)) 


app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(morgan('dev'))
const __dirname = path.resolve();
app.use('/', express.static(path.join(__dirname, '../dist')))

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin","*");
//     res.header("Access-Control-Allow-Methods","GET,PUT,POST,DELETE,OPTIONS");
//     res.header("Access-Control-Allow-Headers","X-Requested-With,Content-type,Accept,X-Access-Token,X-Key");
//     res.contentType('application/json')
//     next();
//   });

app.set('port', 3000)


app.listen(app.get('port'), () => {
    console.log(`server is wor on localhost:${app.get('port')}`);
});



app.post('/login', (req, res) => {
    
    res.send(req.body.User)
})


