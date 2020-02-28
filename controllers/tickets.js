const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    create,
    new: newTicket,
    delete: deleteTicket
};

function newTicket (req, res) {
    Flight.findById(req.params.id, (err, flight) => {
        res.render('tickets/new', {title: 'Add Ticket', flight});
    })
};

function create (req, res) {
    req.body.flight = req.params.id;
    Ticket.create(req.body, (err) => {
        res.redirect(`/flights/${req.params.id}`);
    })
};

function deleteTicket (req, res) {
    console.log('HELLO!');
    Ticket.findByIdAndDelete(req.params.ticketId, (err, ticket) => {
        res.redirect(`/flights/${req.params.flightId}`);
    })
};