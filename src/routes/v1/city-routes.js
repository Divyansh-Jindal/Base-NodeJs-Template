const express = require('express');
const { CityController } = require('../../controllers');
const router = express.Router();


// console.log('Inside airplane routes');

///api/v1/cities POST
router.post('/', 
            CityController.createCity);


module.exports = router;