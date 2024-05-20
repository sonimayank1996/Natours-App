const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = require("./app");

dotenv.config({ path: "./config.env" });

mongoose
  .connect(process.env.DATABASE_LOCAL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("db connection done"));

// START THE SERVER
const port = process.env.PORT || 8000;

console.log(app.get("env"));
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

// mongodb+srv://jonas:<password>@cluster0.vt4cab8.mongodb.net/
//  mongodb+srv://jonas:<password>@cluster0.vt4cab8.mongodb.net/
