const express = require('express');
const router = express.Router();
const ticketsCtrl = require('../controllers/tickets');

router.get('/', ticketsCtrl.index);
router.get('/new', ticketsCtrl.new);

router.post('/', ticketsCtrl.create);
router.post('/flights/:id/tickets', ticketsCtrl.addToBooking);

module.exports = router;