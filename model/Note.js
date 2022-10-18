const express = require('express');
const mongoose= require('mongoose');
 


const notesSchema = {
    name: {
        type: String,
        trim: true,
        require: true,
        minlength:3
    },
    address:{
        type: String,
        trim: true,
        require: true 
    },
    phone:{
        type: String,
        trim: true,
        require: true 
    }

}

const S_inf=mongoose.model("student",notesSchema);

 
module.exports= S_inf;