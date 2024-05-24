const express = require("express");
const {
  getAllTours,
  createTour,
  getTour,
  updateTour,
  deleteTour,
  aliasTopTour
} = require("../controllers/tourController");

const router = express.Router();

// router.param('id', checkId);

// Create checkBody middleware
// check the body contain name and price property
// If not. send back 400(bad request)
// Add it to the post handler stack

// top 5 cheapest route
router.route('/top-5-cheap').get(aliasTopTour, getAllTours);

router.route("/").get(getAllTours).post(createTour);
router.route("/:id").get(getTour).patch(updateTour).delete(deleteTour);

module.exports = router;
