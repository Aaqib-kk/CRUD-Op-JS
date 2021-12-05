const { model } = require("mongoose");
const mongoose = require("../db")
const schema = new mongoose.Schema(
    {
        email: String,
        password: String,
        name: String,
        age: Number,
        gender: String,
        isActive: Boolean,
        userType: String,
    },
    {
        strict : true,
        versionKey : false,
        timestamps : {
            createdAt : "CreatedTime",
            updatedAt : "LastUpdateTime"
        }
    }
);
module.exports = mongoose.model("Users", schema)