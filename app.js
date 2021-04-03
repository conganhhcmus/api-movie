const express = require("express");
const morgan = require("morgan");
const envConfig = require("./config/env.config");
require("express-async-errors");

const app = express();
app.use(morgan("dev"));
app.use(express.json());

app.get("/", function (req, res) {
    res.json({
        message: "API Sakila is running!"
    });
});
app.get("/err", function (req, res) {
    throw new Error("Error!");
});
app.use("/api/films", require("./routes/film.route"));
app.use("/api/actors", require("./routes/actor.route"));
app.use("/api/countries", require("./routes/country.route"));
app.use("/api/cities", require("./routes/city.route"));
app.use("/api/categories", require("./routes/category.route"));
app.use(function (req, res, next) {
    res.status(404).json({
        error_message: "endpoint not found",
    });
});
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).json({
        error_message: "Something is broke!",
    });
});

app.listen(envConfig.PORT, function () {
    console.log(`API is running at http://localhost:${envConfig.PORT}`);
});
