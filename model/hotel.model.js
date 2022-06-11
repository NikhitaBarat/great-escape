const mongoose = require('mongoose')

const hotelSchema = mongoose.Schema({
    hotel_name: String,
    imgurl: String,
    despscription: String,
    rating: Number,
    old_price: Number,
    new_price: Number,
})

module.exports = mongoose.model('hotels', hotelSchema);

