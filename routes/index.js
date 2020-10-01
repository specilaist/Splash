const router = require('express').Router();
const apiRoutes = require('./apiroutes');

router.use('/api', apiRoutes);

module.exports = router;
