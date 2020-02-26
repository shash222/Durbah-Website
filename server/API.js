const express = require('express');
const app = express();
const port = 5000;
const fs = require('fs');
// const cors = require('cors');

app.listen(port, () => {
    console.log("Server is running");
});

var upcomingSeminarData = JSON.parse(fs.readFileSync("../constants/upcomingSeminarData.json"));

app.get("/upcomingSeminarData", (req, res) => {
    res.send(upcomingSeminarData);
})
