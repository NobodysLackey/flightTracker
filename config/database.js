const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/flights',
    {useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
    }
);

const db = mongoose.connection;

db.on('connected', () => {
    console.log(`Connected to flights at ${db.host}:${db.port}`);
});