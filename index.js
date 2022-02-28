var express = require("express");
var app = express();
var path = require("path");
const router = express.Router();
const PORT = process.env.PORT || 5000;

router.use("/assets", express.static(__dirname + "/assets"));

router.get("/", function(req, res) {
    res.sendFile(path.join(__dirname + "/index.html"));
});

app.use("/", router);
app.listen(PORT);

console.log("Server running on port " + PORT);