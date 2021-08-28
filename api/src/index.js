const express = require('express');
const { connectDB } = require('./services/db');
const { port } = require('./config');
const app = new express();

const cb = (req, res) => {
    res.send(`It works. Requested address is ${req.url}.`);
};

app.get('/', cb);
app.get('/test', cb);

const startServer = () => {
    app.listen(port, () => {
        console.log(`Server started on port: ${port}`);
    });
};

connectDB()
    .on('error', console.log)
    .on('disconnected', connectDB)
    .once('open', startServer)