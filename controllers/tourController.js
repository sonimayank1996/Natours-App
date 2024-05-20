const Tour = require("../models/tourModel");
console.log('test');
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
// exports.checkBody = (req, res, next) => {
//   console.log(req.body.name, req.body.price);
//   if (!req.body.name || !req.body.price) {
//     return res.status(400).json({
//       status: "failed",
//       message: "Bad request",
//     });
//   }
//   next();
// };

// ROUTE HANDLER
exports.getAllTours = async (req, res) => {
  try {
    const tours = await Tour.find();
    res.status(200).json({
      status: "success",
      results: tours.length,
      data: {
        tours,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "failed",
      message: e,
    });
  }
};

exports.getTour = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);
    // Tour.findOne({ _id: req.params.id})
    res.status(200).json({
      status: "success",
      data: {
        tour,
      },
    });
  } catch (err) {}
  res.status(400).json({
    status: "failed",
    message: err,
  });
};

exports.createTour = async (req, res) => {
  // const newTour = new Tour();
  // newTour.save();
  try {
    const newTour = await Tour.create(req.body);
    res.status(201).json({
      status: "success",
      data: { tour: newTour },
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err,
    });
    console.log(err);
  }
};

exports.updateTour = async (req, res) => {
  try {
    const { id } = req.params;
    const tour = await Tour.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json({
      status: "success",
      date: {
        tour,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err,
    });
  }
};

exports.deleteTour = async (req, res) => {
  const { id } = req.params;
  try {
    await Tour.findByIdAndDelete(id);

    res.status(204).json({
      status: "success",
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err,
    });
  }
};
