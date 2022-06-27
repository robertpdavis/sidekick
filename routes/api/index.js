const router = require('express').Router();
const userRoutes = require('./userRoutes');
// const xxxxRoutes = require('./xxxxRoutes');

router.use('/users', userRoutes);
// router.use('/xxx', xxxxRoutes);

module.exports = router;
