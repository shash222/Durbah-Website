const express = require('express');
const app = express();
const port = 5000;
const fs = require('fs');
const https = require('https');

const UPCOMING_SEMINAR_DATA_JSON_FILE_PATH = "../constants/upcomingSeminarData.json";

const httpsOptions = {
        cert: fs.readFileSync("/etc/letsencrypt/live/hashmi.site/fullchain.pem"),
        key: fs.readFileSync("/etc/letsencrypt/live/hashmi.site/privkey.pem")
}

https.createServer(httpsOptions, app).listen(port);

var upcomingSeminarData = JSON.parse(fs.readFileSync(UPCOMING_SEMINAR_DATA_JSON_FILE_PATH));

app.get("/upcomingSeminarData", (req, res) => {
    res.send(upcomingSeminarData);
})

