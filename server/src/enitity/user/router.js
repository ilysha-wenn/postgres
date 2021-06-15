const router = require('express').Router();
const controller = require('./controller');

router.get('/user', controller.getAll);
router.get('/user/:id', controller.getOne);
router.post('/user', controller.create);
router.put('/user', controller.update);
router.delete('/user/:id', controller.delete);

module.exports = router;