const express = require('express');

const usersController = require('../controllers/users-controllers');

const router = express.Router();

const {login, signup} = usersController;

router.post('/login', login);

router.post('/signup', signup);

module.exports = router;