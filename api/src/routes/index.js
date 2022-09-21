const { Router } = require('express');
const { getDog } = require('../controllers/getDog');
const { postDog } = require('../controllers/postDog');
const { findDogById } = require('../controllers/findDogById');
const { findDogByName } = require('../controllers/findDogByName.js');
const { getTemp } = require('../controllers/getTemperaments');
const { modify } = require('../controllers/nodify');
const { erase } = require('../controllers/erase');


const router = Router();

router.get('/dog', getDog);

router.post('/dog', postDog);

router.get('/dogs', findDogByName);

router.get('/dog/:id', findDogById);

router.get('/temperament', getTemp);

router.put('/dog', modify);

router.delete('/dog/:id', erase);

module.exports = router;