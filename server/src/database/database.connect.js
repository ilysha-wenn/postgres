const pgp = require('pg-promise')(/*options*/);
const databaseConfig = require('../configuration/config.database');
try {
    const connect = 
    {
        host: databaseConfig.host,
        port: databaseConfig.port,
        database: databaseConfig.database,
        user: databaseConfig.user,
        password: databaseConfig.password  
    };
    const database = pgp(connect);
    module.exports = database;
} catch(error) { console.log(error) };
