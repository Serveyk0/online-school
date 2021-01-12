const { Schema, model } = require('mongoose');

let schema = new Schema({
    name: {
        type: String,
        required: true
    },
    peoples: {
        type: Array,
        required: true
    },
    consists_of: {
        type: Array,
        required: true
    },
    info_courses:{
        type: Array,
        required: true
    },
    main_course:{
        type: Object,
        required: true
    }
});

module.exports = model("course", schema);