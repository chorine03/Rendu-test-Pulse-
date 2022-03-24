var express = require("express");
const Reservation = require("../reservationModel");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res) {
  Reservation.find(function (err, reservation) {
    if (err) {
      res.send(err);
    }
    res.json({
      message: "liste des reservations",
      data: reservation,
    });
  });
});

/*Create New reservation*/

router.post("/", function (req, res) {
  //console.log(req.body );
  const reservation = new Reservation();
  reservation.username = req.body.username ? req.body.username : reservation.username;
  reservation.parkingId = req.body.parkingId;
  reservation.date = req.body.date;

  //Save and check error
  reservation.save(function (err) {
    if (err) res.json(err);
    res.json({
      message: "Un nouveau reservation Ajouté!",
      data: reservation,
    });
  });
});

// View reservation

router.get("/:reservation_id", function (req, res) {
  Reservation.findById(req.params.reservation_id, function (err, reservation) {
    if (err) {
      res.send({
        message: "Aucun reservation trouvé",
        err,
      });
    }
    res.json({
      data: reservation,
    });
  });
});

router.put("/:reservation_id", function (req, res) {
  Reservation.findById(req.params.reservation_id, function (err, reservation) {
    if (err) {
      res.send(err);
    }
    reservation.parkingId = req.body.parkingId;
    reservation.username = req.body.username;
    reservation.date = req.body.date;
    

    reservation.save(function (err) {
      if (err) {
        res.send(err);
      }
      res.json({
        message: "Le reservation à bien été mis à jour",
        data: reservation,
      });
    });
  });
});

router.delete("/:reservation_id", function (req, res) {
  Reservation.remove(
    { _id: req.params.reservation_id },
    function (err, reservation) {
      if (err) {
        res.send(err);
      }
      res.json({ message: "Le reservation a bien été supprimer" });
    }
  );
});

module.exports = router;