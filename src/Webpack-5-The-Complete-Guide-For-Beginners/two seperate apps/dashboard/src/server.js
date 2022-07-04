const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

app.use('/', express.static(path.resolve(__dirname, '../dist')));

app.get('*', function(req, res) {
    const pathToHtrmlFile = path.resolve(__dirname, '../dist/dashboard.html');
    const contentFromHtmlFile = fs.readFileSync(pathToHtrmlFile, 'utf-8');
    res.send(contentFromHtmlFile);
});

app.listen(9000, function () {
    console.log('Application is running on http://localhost:9000');
});