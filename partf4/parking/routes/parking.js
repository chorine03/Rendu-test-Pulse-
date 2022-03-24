var express = require("express");
const Parking = require("../parkingModel");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res) {
  Parking.find(function (err, parking) {
    if (err) {
      res.send(err);
    }
    res.json({
      message: "liste des parkings",
      data: parking,
    });
  });
});

/*Create New parking*/

router.post("/", function (req, res) {
  const parking = new Parking();
  parking.name = req.body.name ? req.body.name : parking.name;
  parking.price = req.body.price;
  parking.address = req.body.address;

  //Save and check error
  parking.save(function (err) {
    if (err) res.json(err);
    res.json({
      message: "Un nouveau parking Ajouté!",
      data: parking,
    });
  });
});

// View parking

router.get("/:parking_id", function (req, res) {
  Parking.findById(req.params.parking_id, function (err, parking) {
    if (err) {
      res.send({
        message: "Aucun parking trouvé",
        err,
      });
    }
    res.json({
      data: parking,
    });
  });
});

router.put("/:parking_id", function (req, res) {
  Parking.findById(req.params.parking_id, function (err, parking) {
    if (err) {
      res.send(err);
    }
    parking.name = req.body.name;
    parking.price = req.body.price;
    parking.address = req.body.address;
    

    parking.save(function (err) {
      if (err) {
        res.send(err);
      }
      res.json({
        message: "Le parking à bien été mis à jour",
        data: parking,
      });
    });
  });
});

router.delete("/:parking_id", function (req, res) {
  Parking.remove(
    { _id: req.params.parking_id },
    function (err, parking) {
      if (err) {
        res.send(err);
      }
      res.json({ message: "Le parking a bien été supprimer" });
    }
  );
});

module.exports = router;