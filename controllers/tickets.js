const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
  index,
  addToBooking
};

function index(req, res) {
  Ticket.find({}, (err, tickets) => {
    res.render('tickets/index', { title: 'Tickets Purchased', tickets });
  });
};

function addToBooking(req, res) {
  Flight.findById(req.params.id, (err, flight) => {
    Ticket.find({flight: flight._id}, (err, tickets) => {
        res.render('tickets/new', {
            title: 'Add Ticket',
            tickets
        });
    });
  });
};