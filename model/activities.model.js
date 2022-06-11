const mongoose = require('mongoose');

const ActivitiesSchema = mongoose.Schema({
    activity_name: String,
    price: String,
    location: String,
    rating: Number
})

module.exports = mongoose.model('activitydb', ActivitiesSchema);