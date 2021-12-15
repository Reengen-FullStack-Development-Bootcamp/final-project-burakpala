const { Client } = require('pg');

const client = new Client({
    host: 'castor.db.elephantsql.com',
    user: 'srbpvmyb',
    port: 5432,
    password: 's-KZ-ZyPZvr1oNqxG_ZCs5M_LITYDe6g',
    database: 'srbpvmyb'
});

client.connect();

module.exports = client;