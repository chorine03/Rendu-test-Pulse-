//reservationController.js
//Import reservation Model
Reservation = require('./reservationModel');
//For index
exports.index = function (req, res) {
    Reservation.get(function (err, reservation) {
        if (err)
            res.json({
                status: "error",
                message: err
            });
        res.json({
            status: "success",
            message: "Got reservation Successfully!",
            data: reservation       
        });
    });
};
//For creating new reservation
exports.add = function (req, res) {
    var reservation = new Reservation();
    reservation.name = req.body.name? req.body.name: reservation.name;
    reservation.email = req.body.email;
    reservation.phone = req.body.phone;
    reservation.address = req.body.address;
//Save and check error
    reservation.save(function (err) {
        if (err)
            res.json(err);
res.json({
            message: "New Reservation Added!",
            data: reservation
        });
    });
};
// View reservation
exports.view = function (req, res) {
    Reservation.findById(req.params.reservation_id, function (err, reservation) {
        if (err)
            res.send(err);
        res.json({
            message: 'Reservation Details',
            data: reservation
        });
    });
};
// Update Reservation
exports.update = function (req, res) {
    Reservation.findById(req.params.reservation_id, function (err, reservation) {
        if (err)
            res.send(err);
        reservation.name = req.body.name ? req.body.name : reservation.name;
        reservation.email = req.body.email;
        reservation.phone = req.body.phone;
        reservation.address = req.body.address;
//save and check errors
        reservation.save(function (err) {
            if (err)
                res.json(err)
            res.json({
                message: "Reservation Updated Successfully",
                data: reservation
            });
        });
    });
};
// Delete Reservation
exports.delete = function (req, res) {
    Reservation.deleteOne({
        _id: req.params.reservation_id
    }, function (err, contact) {
        if (err)
            res.send(err)
        res.json({
            status: "success",
            message: 'Reservation Deleted'
        })
    })
}