const router = require('express').Router();

router.get('/post', (req, res) => res.json('post'));

module.exports = router;