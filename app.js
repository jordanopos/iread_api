const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const User = require("./model/user");

require("dotenv/config");


app.use(express.json({ extended: true })); // for parsing application/json
app.use(express.urlencoded({ extended: true, })); // for parsing application/x-www-form-urlencoded


mongoose 
 .connect(process.env.DB_CONNECTIONSTRING, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,   })   
 .then(() => console.log("Database connected!"))
 .catch(err => console.log(err));


app.listen(3000, () => {
    console.log('Hello handsome opos, i am listening on port 3000');
});

app.get('/', (req, res) => {
    res.send('First request hey');
});


app.post('/opos', (req, res) => {
    console.log(req.body.name);
    res.send(`Hello ${req.body.name}`);
});

app.get('/users', (req, res) => {

    let users = ["Ojangole", "Pawan", "Opolot", "Destiny", "Kieron"];

    res.send({
        "users": users
    });
});

app.post("/create_user", async (req, res) => {
    try {
        console.log(req.body);
        const myUser = new User(req.body);
        myUser.save((err)=>{
            if(err){
                 console.log(err);
                 return;
            }});
        res.send(myUser);
    } catch (err) {
        res.send({ "message": "An eror occured" })
    }
});



app.get("/randomendpoint", (req, res)=> {
    res.send({
        "Hello handsome opos" : "How are you man"
    });
});
