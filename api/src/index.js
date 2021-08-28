const express = require('express');
const app = new express();

const cb = (req, res) => {
    res.send(`It works. Requested address is ${req.url} `);
};

app.get('/', cb);
app.get('/test', cb);

app.listen(3000, () => {
    console.log('Server started');
});