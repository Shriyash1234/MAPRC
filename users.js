const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");



let userSchema =new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    Timestamp: String,
    Email: String,
    FEmail: String,
    Message: String,
    Photo: String,
    Address:String,
    ID:String
  });
  
  module.exports=mongoose.model('users',userSchema)
  