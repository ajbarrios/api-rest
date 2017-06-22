'use strict';

const mongoose = require('mongoose');
const User = require('../models/user');
const service = require('../services/service');

function signUp (req, res) {
    const body = req.body;
    const user = new User({
        email: body.email,
        displayName: body.displayName
    });

    user.save(err => {
        if (err) res.status(500).send({ message: `Error al crear el usuario ${err}` });

        return res.status(200).send({ token: service.createToken(user) });
    });
}

function signIn (req, res) {
    User.find({ email: req.body.email }, (err, user) => {
        if (err) res.status(500).send({ message: 'err' });
        if (!user) res.status(404).send({ message: 'El usuario no existe!' });

        req.user = user;
        res.status(200).send({ 
            message: 'Login correcto!', 
            token: service.createToken(user)
        });
    });
}

exports = module.exports = {
    signUp,
    signIn
}