const serverConfig = require('./configuration/config.server');
const server = require('./server');

const app = server.init();
server.start(app, serverConfig);