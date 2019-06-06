//server.js
const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const port = process.env.PORT || 5000;
const app = express();
app.use(favicon(__dirname + '/client/public/favicon.ico'));
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
app.get('/ping', function (req, res) {
 return res.send('pong');
});
app.get("/", function(req, res) {
    res.json(path.join(__dirname, "/client/public/index.html"));
    
  });
  

app.listen(port);

console.log(`App is listening on PORT ` + port + ".");