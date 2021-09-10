// app.listen(PORT, () => console.log(`hey girl hey ✨ listening on port ${PORT}!`));

const fs = require('fs');
const key = fs.readFileSync('./cert/CA/localhost/localhost.decrypted.key');
const cert = fs.readFileSync('./cert/CA/localhost/localhost.crt');

const express = require('express');
const app = express();

app.use(express.json({limit: '25mb'}));
app.use(express.static("public"));

app.get('/', (req, res, next) => {
  console.log(`we good`);
});

app.post("/api", (request, response) => {
    console.log(`I got a reqest!`)
    console.log(request.body);
    const data = request.body;
    response.json({
        status: "success",
        latitude: data.lat,
        longitude: data.lon,
    });
});



const https = require('https');
const server = https.createServer({ key, cert }, app);

const port = 3069;

server.listen(port, () => {
  console.log(`Server is listening on https://localhost:${port}`);
});

