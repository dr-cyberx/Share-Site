const express = require('express');

const PlaceController = require('../controllers/places-controllers');



const router = express.Router();

const {
  getPlaceById,
  getPlaceByUserId,
  createPlace,
  updatePlace,
  deletePlace
} = PlaceController;

router.get('/:pid', getPlaceById);

router.get('/users/:uid', getPlaceByUserId);

router.post('/', createPlace);

router.patch('/:pid', updatePlace);

router.delete('/:pid', deletePlace)

module.exports = router;