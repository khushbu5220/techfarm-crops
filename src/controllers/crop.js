const express = require('express');

require("../db/conn");
const crop = require("../models/crop");



exports.crops_post_info = async (req,res) => {
    try{
        const data = await crop.find();

        res.status(200).json(data);

    } catch (error) {
        res.status(500).json({ error : error.message})
    }
}

exports.crops_get_info = async (req,res) => {
    try{
        const data = await crop.find();

        res.status(200).send({data});

    } catch (error) {
        res.status(500).send({ error : error.message})
    }
}

exports.crops_get_individualInfo = async (req,res) => {
    try{
        const name = req.params.name;
        const data = await crop.findOne({name});
       
               if(!data){
                   return res.status(404).send(e);
               }else{
                   res.status(200).send(data);
                   console.log(data)
               }

    }catch(e){
        res.status(500).send(e);
    }
 
    
    
}