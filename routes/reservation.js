const express = require('express');
const router = express.Router();
const reservationController = require("../controllers/reservationController");


/* POST create reservation. */
router.post('/reservation/create', reservationController.create);

/* POST findAll reservation. */
router.post('/reservation/find-all', reservationController.findAll);

/* POST findOneById reservation. */
router.post('/reservation/find-one-by-id', reservationController.findOneById);

/* POST update reservation. */
router.post('/reservation/update/:id', reservationController.update);

/* POST delete reservation. */
router.post('/reservation/delete', reservationController.delete);


module.exports = router;
