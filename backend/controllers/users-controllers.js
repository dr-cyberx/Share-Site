const { v4: uuidv4 } = require("uuid");
const { validationResult } = require("express-validator");
const HttpErrors = require("../models/Http-errors");
const Users = require("../models/users");

const getUsers = async (req, res, next) => {
  res.json({ users: DUMMY_USERS });
};

const login = async (req, res, next) => {
  const { email, password } = req.body;
  let existingUser;

  try {
    existingUser = await Users.find({ email: email });
    
  } catch (err) {
    const error = new HttpErrors("could not find user!", 404);
    return next(error);
  }

  if (!existingUser || existingUser[0].password !== password) {
    const error = new HttpErrors("Invalid login credential", 401);
    return next(error);
  }

  res.status(200).json({ message: "Logged in" });
};

const signup = async (req, res, next) => {
  const signupError = validationResult(req);
  if (!signupError.isEmpty()) {
    throw new HttpErrors(
      "please check your entered field there might be some error ",
      422
    );
  }
  const { name, email, password, image, places } = req.body;

  const newUser = new Users({
    name,
    email,
    password,
    image,
    places,
  });

  try {
     await newUser.save(newUser);
  } catch (err) {
    const error = new HttpErrors("failed to sign up", 400);
    return next(error);
  }

  res
    .status(201)
    .json({ message: "User registered Succefully", user: newUser });
};

exports.getUsers = getUsers;
exports.login = login;
exports.signup = signup;
