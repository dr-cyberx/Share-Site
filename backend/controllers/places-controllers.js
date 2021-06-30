const { validationResult } = require('express-validator');
const { v4: uuidv4 } = require('uuid');

const Place = require('../models/place');
const HttpErrors = require('../models/Http-errors');


let DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Empire state Building',
    description: 'One of the most famous sky scraper in the world',
    imageUrl: 'https://static.toiimg.com/thumb/71579199.cms?resizemode=75&width=1200&height=900',
    address: '20 W 34th St, New York, NY 10001, United States',
    location: {
      lat: '40.7484445',
      lng: '-73.9878531'
    },
    creatorId: 'u1'
  },
  {
    id: 'p2',
    title: 'Emp. state Building',
    description: 'One of the most famous sky scraper in the world',
    imageUrl: 'https://static.toiimg.com/thumb/71579199.cms?resizemode=75&width=1200&height=900',
    address: '20 W 34th St, New York, NY 10001, United States',
    location: {
      lat: '40.7484445',
      lng: '-73.9878531'
    },
    creatorId: 'u2'
  },
]

const getPlaceById = (req, res) => {
  const placeId = req.params.pid;
  const place = DUMMY_PLACES.find(p => p.id === placeId)
  if (!place) {
    // const error = new Error('Could not find place of the provided place id!');
    // error.code = 404;
    // throw error;
    throw HttpErrors('could not find place of the provided place id!');
  }
  res.json({ place })
}


const getPlacesByUserId = (req, res, next) => {
  const userId = req.params.uid;
  const places = DUMMY_PLACES.filter(p => p.creatorId === userId);

  if (!places || places.length === 0) {
    // const error = new Error('Could not find place of the provided place id!');
    // error.code = 404;
    // return next(error)
    return next(
      new HttpErrors('could not find place of this user id ', 404)
    )
  }
  res.json({ places })
}

const createPlace = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new HttpErrors(`${errors.errors[0].param} should not be empty `, 422);
  }
  const { title, description, coordinates, address, creatorId } = req.body;
  const createdPlace = new Place({
    title,
    description,
    location: coordinates,
    image: 'https://images.unsplash.com/photo-1555109307-f7d9da25c244?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZW1waXJlJTIwc3RhdGUlMjBidWlsZGluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
    address,
    creatorId
  })

  try {
    await createdPlace.save();
  } catch (err) {
    const error = new HttpErrors(
      'Creating place failed',
      500
    )
    return next(error);
  }

  res.status(201).json({ place: createdPlace });
}

const updatePlace = (req, res, next) => {
  const inputErrors = validationResult(req);
  if (!inputErrors.isEmpty()) {
    throw new HttpErrors(`${inputErrors.errors[0].param} should not be empty `, 422)
  }
  const { title, description } = req.body;
  const placeId = req.params.pid;

  const updatedplace = { ...DUMMY_PLACES.find(p => p.id === placeId) };
  const placeIndex = DUMMY_PLACES.findIndex(p => p.id === placeId);
  updatedplace.title = title;
  updatedplace.description = description;

  DUMMY_PLACES[placeIndex] = updatedplace;

  res.status(200).json({ place: updatedplace })
};

const deletePlace = (req, res, next) => {
  const placeId = req.params.pid;
  if (!DUMMY_PLACES.find(p => p.id === placeId)) {
    throw new HttpErrors('no places are found with this id ', 404)
  }
  DUMMY_PLACES = DUMMY_PLACES.filter(p => p.id !== placeId);
  res.status(200).json({ message: 'Deleted successfully!' });
};

exports.getPlaceById = getPlaceById;
exports.getPlacesByUserId = getPlacesByUserId;
exports.createPlace = createPlace;
exports.updatePlace = updatePlace;
exports.deletePlace = deletePlace;
