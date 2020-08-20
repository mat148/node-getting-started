exports.startJoi = function() {
    const Joi = require('joi');

    const arrayString = ['banana', 'bacon', 'cheese'];
    const arrayObjects = [{example: 'example1'},{example: 'example2'},{example: 'example3'}];

    const userInput = { 
        personalInfo: {
            streetAddress: '12345',
            city: 'ur mum',
            state: 'ny'
        },
        preferences : arrayObjects
    };

    const personalInfoSchema = Joi.object({
        streetAddress : Joi.string().trim().required(),
        city : Joi.string().trim().required(),
        state: Joi.string().trim().max(2).required()
    });

    //const preferencesSchema = Joi.array().items(Joi.string());
    const preferencesSchema = Joi.array().items(Joi.object().keys({
        example: Joi.string().required()
    }));

    const schema = Joi.object().keys({
        personalInfo : personalInfoSchema,
        preferences : preferencesSchema
    });

    //console.log(schema._ids._byKey);
    //console.log(userInput);

    try {
        const value = schema.validate({
            personalInfo : userInput.personalInfo,
            preferences : userInput.preferences
        });

        console.log(value);
    }
    catch (err) {
        console.log(err);
    }
}