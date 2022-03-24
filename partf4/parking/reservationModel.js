//reservationModel.js
var mongoose = require('mongoose');
//schema
var reservationSchema = mongoose.Schema({

    // l'id du parking
    parkingId: {type: mongoose.Schema.Types.ObjectId, ref:"Parking"},
    
    username: {
        type: String,
        required: true
    },
   
    date: {
        type: String,
        required: true
    },

   
});
// Export Reservation Model
const Reservation = mongoose.model("Reservation", reservationSchema);

module.exports = Reservation;

