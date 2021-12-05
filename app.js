const express = require("express");
const app = express();
const bodyParser = require("body-parser")

const userController = require("./controllers/user_controller")

app.use(bodyParser.json())      //middleware

app.use(bodyParser.urlencoded({extended: false}))

// app.get('/',(req,res) =>{
//     res.send('Welcome to the first Test of DB');
// })

app.post('/', userController.createRec);
app.get('/', userController.findAllRec);
app.get('/:id', userController.findOne);
app.delete('/:id', userController.deleteRec);
app.post('/update/:id', userController.updateRec);

// app.get('/:user_id/:user_name', (req,res)=>{
//     console.log(" UserId "+req.params.user_id);
//     console.log(" UserName "+req.params.user_name);
//     res.send("Values Accepted")
// });


// const db = require('./db');

app.listen(4000, ()=>{
    console.log('server is up on 4000')
})