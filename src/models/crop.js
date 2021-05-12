const mongoose = require("mongoose");
const validator = require("validator");
const express = require("express");
const { urlencoded } = require("express");


var crops = new mongoose.Schema({
    heading: String,
    description: String
  
  });


const cropSchema = new mongoose.Schema({
    image: String,
    name: {type:String, 
          unique:true },
    info: [crops]
   
});

// create a new collection

const Crop = new mongoose.model('Crop', cropSchema);

module.exports = Crop;




var data  = new  Crop({

})

// data.save(function (err, data) {
//     if (err) return console.log(err.message)
// })