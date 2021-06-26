const express = require('express');

const PlaceController = require('../controllers/places-controllers');



const router = express.Router();

const { getPlaceById, getPlaceByUserId, createPlace } = PlaceController;

router.get('/:pid', getPlaceById);

router.get('/users/:uid', getPlaceByUserId);

router.post('/', createPlace);

module.exports = router;