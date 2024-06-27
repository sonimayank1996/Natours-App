const express = require("express");
const morgan = require("morgan");
const tourRouter = require("./routes/tourRoutes");
const userRouter = require("./routes/userRoutes");

const app = express();

// MIDDLEWARE
if(process.env.NODE_ENV === 'development') {
  app.use(morgan("dev")); // GET /api/v1/tours 200 6.757 ms - 8555
}
  

app.use(express.json()); // mddleware is the that can be modify the incoming request data, middle of request and response
// data of body is added to it by use this middleware

app.use(express.static(`${__dirname}/public`))
app.use((req, res, next) => {
  console.log("Hello middleware");
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use("/api/v1/tours", tourRouter);
app.use("/api/v1/users", userRouter);

// handling Unhandle routes
app.all('*', (req, res) => {
  res.status(404).json({
    status: 'failed',
    message: `Can't find ${req.originalUrl}`
  })
})

// ROUTE
// app.get("/api/v1/tours", getAllTours);

// `/api/v1/tours/:id/:y?` - y is optional
// app.get("/api/v1/tours/:id", getTour);
// app.post("/api/v1/tours", createTour);
// app.patch("/api/v1/tours/:id", updateTour);
// app.delete("/api/v1/tours/:id", deleteTour);

module.exports = app;
// we can do lie this
// Tour Route
