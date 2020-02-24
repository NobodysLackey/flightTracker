const Flight = require('../models/flight');

module.exports = {
    index,
    show,
    new: newFlight,
    create
};

function index (req, res) {
    Flight.find({}, (err, flights) => {
        if (err) return next(err);
        res.render('flights/index', {flights});
    });
};

function show(req, res) {
    Flight.findById(req.params.id, (err, flight) => {
      res.render('flights/show', { title: 'Flight Details', flight });
    });
};

function newFlight (req, res) {
    res.render('flights/new');
};

function create (req, res) {
    let flight = new Flight(req.body);
    flight.save((err) => {
        if (err) return res.render('flights/new');
        res.redirect('/flights');
    });
};