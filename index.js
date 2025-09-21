const express = require('express');
const path = require('path');
const app = express();

app.use('/img',express.static(path.join(__dirname, 'img')));
app.use('/css',express.static(path.join(__dirname, 'css')));
app.use('/fonts',express.static(path.join(__dirname, 'fonts')));
app.use('/js',express.static(path.join(__dirname, 'js')));

app.get('/knifes', (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.listen(3002, () => {
    console.log('Ready')
});