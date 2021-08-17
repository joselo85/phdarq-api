const mongoose = require('mongoose');
const mongoUser = process.env.mongoUser;
const mongoPass = process.env.mongoPass;


const uri = `mongodb+srv://${mongoUser}:${mongoPass}@cluster0.8u8wi.mongodb.net/projects?retryWrites=true&w=majority`;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});