exports.startExpress = function() {
    const express = require('express');
    const path = require('path');
    const Joi = require('joi');
    const app = express();
    const bodyParser = require('body-parser');

    app.use('/public', express.static(path.join(__dirname, '../static')));
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());
   
    app.get('/', (req, res)=> {
        res.sendFile(path.join(__dirname, '../static', 'index.html'));
    });

    app.post('/', (req, res)=> {
        const schema = Joi.object({
            email : Joi.string().trim().email().required(),
            password : Joi.string().min(5).max(10).required()
        });
        /*Joi.validate(req.body, schema, (err, result)=>{
            if(err) {
                console.log(err);
                res.send("Error");
            }
            else {
                console.log(result);
                res.send('Success');
            }
        });*/

        //console.log(req.body[0].value);

        try {
            const value = schema.validate({
                email: req.body[0].value,
                password : req.body[1].value
            });

            console.log(value);
            res.send('Success');
        }
        catch (err) {
            res.send("error");
            console.log(err);
        }

        //res.json({success : true});
    });

    app.listen(3000);
}