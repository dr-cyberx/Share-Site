const { v4: uuidv4 } = require("uuid");
const { validationResult } = require("express-validator");
const HttpErrors = require("../models/Http-errors");
const Users = require("../models/users");

const getUsers = async (req, res, next) => {
  res.json({ users: DUMMY_USERS });
};

const login = (req, res, next) => {
  const { email, password } = req.body;
  let existingUser;

  try {
    existingUser = Users.find({ email: email });
  } catch (err) {
    const error = new HttpsError("could not find user!");
    return next(error);
  }

  if (!existingUser || existingUser.password !== password) {
    const error = new HttpsError("Invalid login credential", 401);
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

  const newUser = {
    name,
    email,
    password,
    image,
    places,
  };

  try {
     await Users.save(newUser);
  } catch (err) {
    const error = new HttpsError("failed to sign up", 400);
  }

  res
    .status(201)
    .json({ message: "User registered Succefully", user: newUser });
};

exports.getUsers = getUsers;
exports.login = login;
exports.signup = signup;
