const express = require("express");
const router = new express.Router();


const CropsController = require('../controllers/crop')


// post data 
router.post("/crop", CropsController.crops_post_info);

// read the data 
router.get("/crops", CropsController.crops_get_info);

// get individual data 
router.get("/crops/:name", CropsController.crops_get_individualInfo);

module.exports = router;


