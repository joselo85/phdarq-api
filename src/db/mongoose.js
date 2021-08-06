const mongoose = require('mongoose');

const uri = "mongodb+srv://joselorenzo:ignacio20@cluster0.8u8wi.mongodb.net/projects?retryWrites=true&w=majority";

mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});