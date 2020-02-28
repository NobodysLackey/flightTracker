const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/flighttracker',
    {useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
    }
);