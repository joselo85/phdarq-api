const mongoose = require('mongoose');

const Project = mongoose.model('Project', {
    name : {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    alt: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    imgs: {
        type: Array,
        required: true
    }
});

module.exports = Project;