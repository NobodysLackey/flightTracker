const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    create,
    new: newTicket
};

function newTicket (req, res) {
    Flight.findById(req.params.id, (err, flight) => {
        res.render('tickets/new', {title: 'Add Ticket', flight});
    })
};

function create (req, res) {
    console.log(req.body);
    console.log(req.params);
    req.body.flight = req.params.id;
    Ticket.create(req.body, (err) => {
        res.redirect(`/flights/${req.params.id}`);
    })
};