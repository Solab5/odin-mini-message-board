const express = require("express");
const indexRouter = require("./routes/indexRouter");
const newFormRouter = require("./routes/newFormRouter")
const app = express();

app.set("view engine", "ejs")


app.use(express.urlencoded({ extended: true }));
app.use("/", indexRouter);
app.use("/new", newFormRouter);


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});