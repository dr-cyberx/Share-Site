const HttpErrors = require('../models/Http-errors');
const { v4: uuidv4 } = require('uuid');


const DUMMY_PLACES = [
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


const getPlaceByUserId = (req, res, next) => {
  const userId = req.params.uid;
  const place = DUMMY_PLACES.find(p => p.creatorId === userId);

  if (!place) {
    // const error = new Error('Could not find place of the provided place id!');
    // error.code = 404;
    // return next(error)
    return next(
      new HttpErrors('could not find place of this user id ', 404)
    )
  }
  res.json({ place })
}

const createPlace = (req, res, next) => {
  const { title, description, coordinates, address, creatorId } = req.body;
  const createdPlace = {
    id: uuidv4(),
    title,
    description,
    location: coordinates,
    address,
    creatorId
  };

  DUMMY_PLACES.push(createdPlace);

  res.status(201).json({ place: createdPlace });
}

exports.getPlaceById = getPlaceById;
exports.getPlaceByUserId = getPlaceByUserId;
exports.createPlace = createPlace;
