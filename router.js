const express = require('express');


module.exports.default = function(app) {

    express.Router();
    app.use(function(req, res, next) {

        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'OPTIONS,GET,POST,DELETE,PUT');
        res.header('Access-Control-Allow-Credentials', 'true');
        //res.header('Access-Control-Allow-Headers', 'X-API-KEY,Origin,X-Requested-With,Content-Type,x-access-token,authorization,Authorization,Accept,Access-Control-Request-Method,token');

        next();
    });

    app.use('/users', require('./api/user.api.js'));
    app.use('/messages', require('./api/message.api.js'));
};