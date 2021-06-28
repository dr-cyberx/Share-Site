const express = require('express');
const { check } = require('express-validator');

const usersController = require('../controllers/users-controllers');

const router = express.Router();

const { login, signup, getUsers } = usersController;

router.get('/', getUsers);

router.post('/login', login);

router.post('/signup',[
  check('name').not().isEmpty(),
  check('email').isEmail(),
  check('password').isLength({min: 6})
], signup);

module.exports = router;