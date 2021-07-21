const { v4: uuidv4 } = require("uuid");
const { validationResult } = require("express-validator");
const HttpErrors = require("../models/Http-errors");
const Users = require("../models/users");

const getUsers = async (req, res, next) => {
  let allUser;
  try {
    allUser = await Users.find({}, "email name");
  } catch (err) {
    const error = new HttpErrors(
      "can't find user please try again later!",
      500
    );
  }

  res.json({ users: allUser.map((user) => user.toObject({ getters: true })) });
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
  const { name, email, password, places } = req.body;

  const newUser = new Users({
    name,
    email,
    password,
    image:
      "https://phantom-marca.unidadeditorial.es/6b6ff14954a49532a9f7712e50a8d5df/resize/1320/f/jpg/assets/multimedia/imagenes/2020/12/09/16075352646388.jpg",
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
