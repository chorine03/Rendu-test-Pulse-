//parkingModel.js
var mongoose = require('mongoose');
//schema
var parkingSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    
    price: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});
// Export Parking Model
const Parking = mongoose.model("Parking", parkingSchema);

module.exports = Parking;
// Export Reservation Model