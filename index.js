const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();   
const routes = require('./logic/index')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://nayf:nayf@cluster0.pdskexv.mongodb.net/overcooked')
.then(()=>console.log('connected to Mongodb....'))
.catch((err)=>console.error('could not conecteing to MogodB'))



app.get('/' ,routes.route1)

app.post('/',routes.route2)
 
app.get('/:name',routes.route3)



app.listen(3000,()=>{console.log("Running...^_^")})