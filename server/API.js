const express = require('express');
const app = express();
const port = 5000;
const fs = require('fs');
const https = require('https');
const cors = require('cors');

const UPCOMING_SEMINAR_DATA_JSON_FILE_PATH = "../constants/upcomingSeminarData.json";

const httpsOptions = {
        cert: fs.readFileSync("/etc/letsencrypt/live/durbah.org/fullchain.pem"),
        key: fs.readFileSync("/etc/letsencrypt/live/durbah.org/privkey.pem")
}

app.use(cors());

app.use(require("body-parser").json())

https.createServer(httpsOptions, app).listen(port);

var upcomingSeminarData = JSON.parse(fs.readFileSync(UPCOMING_SEMINAR_DATA_JSON_FILE_PATH));

app.get("/upcomingSeminarData", (req, res) => {
    res.send(upcomingSeminarData);
})

app.post("/upcomingSeminarData", (req, res) => {
	Object.keys(req.body).map((key) => {
		upcomingSeminarData[key] = req.body[key];
	})
    fs.writeFileSync(UPCOMING_SEMINAR_DATA_JSON_FILE_PATH, upcomingSeminarData);
})
