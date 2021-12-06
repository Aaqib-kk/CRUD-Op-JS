const express = require("express");
const app = express();
const bodyParser = require("body-parser")
app.use(bodyParser.json())      //middleware
app.use(bodyParser.urlencoded({extended: false}))


app.use("/",require("./user_routes"));

app.listen(4000, ()=>{
    console.log('server is up on 4000')
})

// app.get('/',(req,res) =>{
//     res.send('Welcome to the first Test of DB');
// })


// app.get('/:user_id/:user_name', (req,res)=>{
//     console.log(" UserId "+req.params.user_id);
//     console.log(" UserName "+req.params.user_name);
//     res.send("Values Accepted")
// });


// const db = require('./db');

