const { Router } = require('express');
const { check } = require('express-validator');

const PlaceController = require('../controllers/places-controllers');

const router = Router(); 

const {
  getPlaceById,
  getPlacesByUserId,
  createPlace,
  updatePlace,
  deletePlace
} = PlaceController;

router.get('/:pid', getPlaceById);

router.get('/users/:uid', getPlacesByUserId);

router.post('/', [
  check('title').not().isEmpty(),
  check('description').isLength({ min: 5 }),
  check('address').not().isEmpty(),
], createPlace);

router.patch('/:pid', [
  check('title').not().isEmpty(),
  check('description').isLength({ min: 5 })
], updatePlace);

router.delete('/:pid', deletePlace)

module.exports = router;