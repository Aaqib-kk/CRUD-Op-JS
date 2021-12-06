// define all things, all request which we wrote in app.js, CRUD. Three layer architecture MDC. View is the postman

const Users = require("../models/user-model");

const bcr = require('bcrypt')

exports.createRec = (req, res) => {

    if (!req.body.email) {
        return res.send("Please Enter your email also")
    }
    else if (!req.body.password) {
        return res.send("Please Enter your passwrod also")
    }
    else if (!req.body.name) {
        return res.send("Please Enter your name also")
    }
    else if (!req.body.age) {
        return res.send("Please Enter your age also")
    }
    else if (!req.body.gender) {
        return res.send("Please Enter your gener also")
    }
    else {
        const user = new Users(
            {
                email: req.body.email,
                password: bcr.hashSync(req.body.password, 10), //hashsync take 2 things, 1 is string and other is length of hesh
                name: req.body.name,
                age: req.body.age,
                gender: req.body.gender,
                isActive: req.body.isActive,
                userType: req.body.userType,
            }
        );
        user
            .save()
            .then((data) => {
                res.send("Record Added" + data)
            })
            .catch((e) => {
                console.log(e);
            })
    }
}

exports.findAllRec = (req, res) => {
    Users.find()
        .then((users) => {
            res.send(users);
        })
        .catch((e) => {
            console.log(e);
        })
}
exports.findOne = (req, res) => {
    Users.findById(req.params.id)
        .then((user) => {
            // if(!user) {
            //     return res.status(404).send("No record is Find");
            // }
            res.send(user);
        })
        .catch((e) => {
            return res.status(404).send("Error while finding the record");
            // console.log(e);
        })
}
exports.deleteRec = (req, res) => {
    Users.findByIdAndRemove(req.params.id)
        .then((user) => {
            res.send("Record is deleted")
        })
        .catch((e) => {
            return res.send("Error while deleting the record");
        })
}
exports.updateRec = (req, res) => {
    if (!req.body.email) {
        return res.send("Please Enter your email also")
    }
    else if (!req.body.password) {
        return res.send("Please Enter your passwrod also")
    }
    else if (!req.body.name) {
        return res.send("Please Enter your name also")
    }
    else if (!req.body.age) {
        return res.send("Please Enter your age also")
    }
    else if (!req.body.gender) {
        return res.send("Please Enter your gener also")
    }
    else {
        Users.findByIdAndUpdate(req.params.id, req.body, { new: true })
            .then((user) => {
                res.send("updated User: " + user);
            })
            .catch((e) => {
                return res.send("Error while detecting the record");
            })
    }
}
//==== Request ====
// {
//     "email":"mak@gmail.com",
//     "password": "pass1234",
//     "name": "mak",
//     "age":25,
//     "gender":"male",
//     "isActive": true,
//     "userType" : "admin"
// }