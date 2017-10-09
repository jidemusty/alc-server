import Joi from 'joi';

export default {

    createStudent: {
        body: {
            name: Joi.string().required(),
            email: Joi.string().required().email(),
            sex: Joi.string().required(),
            age: Joi.number().required(),
            department: Joi.string().required()
        }
    },

    getStudent: {
        params: {
            id: Joi.string().required()
        }
    },

    updateStudent: {
        body: {
            name: Joi.string().required(),
            email: Joi.string().required().email(),
            sex: Joi.string().required(),
            age: Joi.number().required(),
            department: Joi.string().required()
        }
      }

};