const {StatusCodes} = require('http-status-codes');

const { CityRepository } = require('../repositories');
const AppError = require('../utils/errors/app-error');


const cityRepository = new CityRepository();

async function createCity(data){
    try {
        // console.log('Inside service');
        const city = await cityRepository.create(data);
        return city;
    } catch (error) {
        if(error.name == 'SequelizeValidationError' || error.name == 'SequelizeUniqueConstraintError'){
            let explanation=[]
            error.errors.forEach((err) => {
                explanation.push(err.message);
            });
            // console.log(explanation);
            throw new AppError(explanation , StatusCodes.BAD_REQUEST);
        }
        throw new AppError('Cannot create a neww City object' , StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports={
    createCity,
}