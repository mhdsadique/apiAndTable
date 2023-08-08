const express=require("express")
const mongoose=require("mongoose")

const userscheema= mongoose.Schema({
    number:Number,
    name:String,
    mark:Number
})

const UserModel=mongoose.model("test",userscheema)
module.exports={UserModel}
