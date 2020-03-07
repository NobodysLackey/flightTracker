const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    index,
    show,
    new: newFlight,
    create,
    delete: deleteOne,
    showUpdate,
    update
};

function index (req, res) {
    Flight.find({}, (err, flights) => {
        if (err) return next(err);
        res.render('flights/index', {flights});
    });
};

function show(req, res) {
    Flight.findById(req.params.id, (err, flight) => {
        Ticket.find({flight: flight._id}, (err, tickets) => {
            res.render('flights/show', { title: 'Flight Details', flight, tickets });
        })
    })
};

function newFlight (req, res) {
    res.render('flights/new');
};

function create (req, res) {
    if (!req.body.departs) {
        let redate = new Date();
        redate.setFullYear(redate.getFullYear()+1);
        req.body.departs = redate;
    }
    let flight = new Flight(req.body);
    flight.save((err) => {
        if (err) return res.render('flights/new');
        res.redirect('/flights');
    });
};

function deleteOne (req, res) {
    Flight.findByIdAndDelete(req.params.id, (err, flight) => {
        res.redirect('/flights');
    })
};

function showUpdate (req, res) {
    Flight.findById(req.params.id, (err, flight) => {
        res.render('flights/edit', {flight});
    })
};

function update (req, res) {
    console.log('TACO')
    if (!req.body.departs) {
        let redate = new Date();
        redate.setFullYear(redate.getFullYear()+1);
        req.body.departs = redate;
    }
    Flight.findByIdAndUpdate(req.params.id, req.body, (err, flight) => {
        res.redirect("/flights/");
    })
};