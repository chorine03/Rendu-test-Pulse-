// //parkingController.js
// //Import parking Model
// Parking = require('./parkingModel');
// //For index
// exports.index = function (req, res) {
//     Parking.get(function (err, parking) {
//         if (err)
//             res.json({
//                 status: "error",
//                 message: err
//             });
//         res.json({
//             status: "success",
//             message: "Got parking Successfully!",
//             data: parking       
//         });
//     });
// };
// //For creating new parking
// exports.add = function (req, res) {
//     var parking = new Parking();
//     parking.name = req.body.name? req.body.name: parking.name;
//     parking.email = req.body.email;
//     parking.phone = req.body.phone;
//     parking.address = req.body.address;
// //Save and check error
//     parking.save(function (err) {
//         if (err)
//             res.json(err);
// res.json({
//             message: "New Parking Added!",
//             data: parking
//         });
//     });
// };
// // View Parking
// exports.view = function (req, res) {
//     Parking.findById(req.params.parking_id, function (err, parking) {
//         if (err)
//             res.send(err);
//         res.json({
//             message: 'Parking Details',
//             data: parking
//         });
//     });
// };
// // Update Parking
// exports.update = function (req, res) {
//     Parking.findById(req.params.parking_id, function (err, parking) {
//         if (err)
//             res.send(err);
//         parking.name = req.body.name ? req.body.name : parking.name;
//         parking.email = req.body.email;
//         parking.phone = req.body.phone;
//         parking.address = req.body.address;
// //save and check errors
//         parking.save(function (err) {
//             if (err)
//                 res.json(err)
//             res.json({
//                 message: "Parking Updated Successfully",
//                 data: parking
//             });
//         });
//     });
// };
// // Delete Parking
// exports.delete = function (req, res) {
//     Parking.deleteOne({
//         _id: req.params.parking_id
//     }, function (err, contact) {
//         if (err)
//             res.send(err)
//         res.json({
//             status: "success",
//             message: 'Parking Deleted'
//         })
//     })
// }