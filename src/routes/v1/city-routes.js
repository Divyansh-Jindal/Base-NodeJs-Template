const express = require('express');
const { CityController } = require('../../controllers');
const {CityMiddlewares} =require('../../middlewares');
const router = express.Router();


// console.log('Inside airplane routes');

///api/v1/cities POST
router.post('/', 
            CityMiddlewares.validateCreateRequest,
            CityController.createCity);

///api/v1/cities/:id PATCH
router.patch('/:id', 
            CityMiddlewares.validateCreateRequest,
            CityController.updateCity);

///api/v1/cities/:id DELETE
router.delete('/:id', 
            CityController.destroyCity);



module.exports = router;