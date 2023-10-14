const express=require('express');
const router=express.Router();
const { InfoController } = require('../../controllers');
const airplaneRoutes = require('./airplane-routes');



// console.log('Inside v1 routes');

router.use('/airplanes', airplaneRoutes);

router.all('/info',InfoController.info);

module.exports=router;