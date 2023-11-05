const express = require('express');
const { FlightController } = require('../../controllers');
const { FlightMiddlewares } =require('../../middlewares');
const router = express.Router();

///api/v1/flights POST
router.post('/', 
            FlightMiddlewares.validateCreateRequest,
            FlightController.createFlight);

// ///api/v1/flights GET
// router.get('/', 
//             AirplaneController.getAirplanes);

// ///api/v1/flights/:id GET
// router.get('/:id', 
//             AirplaneController.getAirplane);

// ///api/v1/flights/:id PATCH
// router.patch('/:id',
//             AirplaneMiddlewares.validateCreateRequest,
//             AirplaneController.updateAirplane);

// ///api/v1/flights/:id DELETE
// router.delete('/:id', 
//             AirplaneController.destroyAirplane);

module.exports = router;