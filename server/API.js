const express = require('express');
const app = express();
const port = 5000;
const fs = require('fs');
const https = require('https');
const cors = require('cors');

const UPCOMING_SEMINAR_DATA_JSON_FILE_PATH = "../constants/upcomingSeminarData.json";

const UPCOMING_SEMINAR_DATA_JSON_FILE_PATH = "../constants/upcomingSeminarData.json";

const httpsOptions = {
        cert: fs.readFileSync("/etc/letsencrypt/live/durbah.org/fullchain.pem"),
        key: fs.readFileSync("/etc/letsencrypt/live/durbah.org/privkey.pem")
}

app.use(cors());

https.createServer(httpsOptions, app).listen(port);

var upcomingSeminarData = JSON.parse(fs.readFileSync(UPCOMING_SEMINAR_DATA_JSON_FILE_PATH));

app.get("/upcomingSeminarData", (req, res) => {
    res.send(upcomingSeminarData);
})

app.post("/upcomingSeminarDataPost", (req, res) => {
    console.log(req.body);
    // fs.writeFileSync(UPCOMING_SEMINAR_DATA_JSON_FILE_PATH)
})
