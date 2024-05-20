const dotenv = require("dotenv");
const mongoose = require("mongoose");
const Tour = require("../../models/tourModel");
const fs = require('fs');
dotenv.config({ path: "./config.env" });

mongoose
  .connect(process.env.DATABASE_LOCAL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("db connection done"));

  const tours = JSON.parse(fs.readFileSync(`${__dirname}/tours-simple.json`, 'utf-8'));

  // IMPORT DATA INTO DB
  const importData = async () => {
    try {
        await Tour.create(tours);
        console.log('Data successfully loaded');
        process.exit();
    } catch(err) {
        console.log(err);
    }
  }

  // DELETE ALL DATA FROM DB
  const deleteData = async () => {
    try {
        await Tour.deleteMany();
        console.log('Data successfully deleted!');
        process.exit();
    } catch(err) {
        console.log(err);
    }
  }

  if(process.argv[2] === '--import') {
    importData();
  } else if(process.argv[2] === '--delete') {
    deleteData();
  }
