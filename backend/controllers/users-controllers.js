const { v4: uuidv4 } = require('uuid');
const { validationResult } = require('express-validator');
const HttpErrors = require('../models/Http-errors');

const DUMMY_USERS = [
  {
    id: 'u1',
    name: 'Neil willson',
    email: 'test1@gmail.com',
    password: 'test1'
  }
]

const getUsers = (req, res, next) => {
  res.json({ users: DUMMY_USERS })
}

const login = (req, res, next) => {
  const { email, password } = req.body;

  const filterUser = DUMMY_USERS.find(u => u.email === email);
  if (!filterUser || filterUser.password !== password) {
    throw new HttpErrors("Sorry you can't log in may be you entered wrong creadentials", 401);
  }

  res.status(200).json({ message: 'Logged in' })
}

const signup = (req, res, next) => {
  const signupError = validationResult(req);
  if(!signupError.isEmpty()){
    throw new HttpErrors('please check your entered field there might be some error ', 422)
  }
  const { name, email, password } = req.body;

  const newUser = {
    id: uuidv4(),
    name,
    email,
    password
  }

  DUMMY_USERS.push(newUser);

  res.status(201).json({ message: 'User registered Succefully', user: newUser });
}

exports.getUsers = getUsers;
exports.login = login;
exports.signup = signup;