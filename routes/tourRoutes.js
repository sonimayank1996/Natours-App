const express = require("express");
const {
  getAllTours,
  createTour,
  getTour,
  updateTour,
  deleteTour,
} = require("../controllers/tourController");

const router = express.Router();

// router.param('id', checkId);

// Create checkBody middleware
// check the body contain name and price property
// If not. send back 400(bad request)
// Add it to the post handler stack

router.route("/").get(getAllTours).post(createTour);
router.route("/:id").get(getTour).patch(updateTour).delete(deleteTour);

module.exports = router;
