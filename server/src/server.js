module.exports.init = (config) => {
    try {
        const express = require('express');
        const app = express();

        app.use(express.json());
        const router = require('../src/enitity/index');
        app.use('/api', router.userRouter);
        app.use('/api', router.postRouter);

        return app;
    } catch (error) {
        console.log(error);
    }
}

module.exports.start = (app, config) => {
    try {
        const PORT = config.server.PORT;
        app.listen(PORT, () => console.log(`Run ${PORT}`));
    } catch (error) {
        console.log(error);
    }
}