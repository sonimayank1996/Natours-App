const Tour = require("../models/tourModel");

// middleware
// exports.checkId = (req, res, next, val) => {
//   if (val * 1 > tours.length) {
//     return res.status(404).json({
//       status: "failed",
//       message: "Invalid ID",
//     });
//   }
//   next();
// };

// middleware
exports.checkBody = (req, res, next) => {
  console.log(req.body.name, req.body.price);
  if (!req.body.name || !req.body.price) {
    return res.status(400).json({
      status: "failed",
      message: "Bad request",
    });
  }
  next();
};

// ROUTE HANDLER
exports.getAllTours = (req, res) => {
  res.status(200).json({
    status: "success",
  });
};

exports.getTour = (req, res) => {
  res.status(200).json({
    status: "success",
  });
};

exports.createTour = (req, res) => {
  res.status(201).json({
    status: "success",
  });
};

exports.updateTour = (req, res) => {
  const { id } = req.params;
  res.status(200).json({
    status: "success",
  });
};

exports.deleteTour = (req, res) => {
  const { id } = req.params;
  res.status(200).json({
    status: "success",
  });
};
