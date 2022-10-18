const express = require('express');
const mongoose= require('mongoose');
 


const notesSchema = {
    email: {
        type: String
    },
    password:{
        type: String,
        trim: true,
        minlength:5
    }
    

}

const User=mongoose.model("user",notesSchema);

 
module.exports= User;