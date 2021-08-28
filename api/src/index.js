const express = require('express');
const mongoose = require('mongoose');
const { connectDB } = require('./services/db');
const { port } = require('./config');

const app = new express();

const postSchema = new mongoose.Schema({
    name: String
});

const Post = mongoose.model('Post', postSchema);

const startServer = () => {
    app.listen(port, () => {
        const silence = new Post({ 
            name: 'Silence'
        });
        // Post.find((err, posts) => {
        //     if (err)
        //         throw err;
        //     console.log(posts);
        // });
        silence.save((err, savedSilence) => {
            if(err) 
                return console.error(err);
            console.log('saved', savedSilence);
            // savedSilence.speak();
        })
        console.log(`Server started on port: ${port}`);
        console.log(silence.name);
    });
};

const cb = (req, res) => {
    res.send(`It works. Requested address is ${req.url}.`);
};

app.get('/', cb);
app.get('/test', cb);

connectDB()
    .on('error', console.log)
    .on('disconnected', connectDB)
    .once('open', startServer)