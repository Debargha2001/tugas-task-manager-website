const express = require('express');
const req = require('express/lib/request');
const router = express.Router();

const homeController = require('../controllers/home_controller');

router.get('/',homeController.home);
router.use('/tasks',require('./tasks'));

module.exports = router;