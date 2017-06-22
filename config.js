'use strict';

module.exports = {
    port: process.env.PORT || 3000,
    db: process.env.MONGODB || 'mongodb://localhost/shop',
    SECRET_TOKEN: 'misko'
};