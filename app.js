const express = require("express");
const morgan = require("morgan");
const envConfig = require("./config/env.config");

const app = express();
app.use(morgan("dev"));
app.use(express.json());

app.get("/", function (req, res) {
    res.json({
        message: "API Sakila is running!",
    });
});

app.use("/api/films", require("./routes/film.route"));
app.use("/api/actors", require("./routes/actor.route"));
app.use("/api/countries", require("./routes/country.route"));
app.use("/api/cities", require("./routes/city.route"));

app.listen(envConfig.PORT, function () {
    console.log(`API is running at http://localhost:${envConfig.PORT}`);
});
