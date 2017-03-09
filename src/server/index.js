var express = require('express');
var app = express();

var fs = require('fs');

app.set('view engine', 'pug');
app.set('views', './src/server/views');

app.use('/js', express.static('./build/client'));

app.get('/', function (req, res) {
  res.render('index', {
    title: 'Hey',
    message: 'Hello there xxx!'
  });
});


app.get('/data', function (req, res) {
  fs.readFile('./data/index.json', {encoding: 'utf8'}, function (error, file_content) {
    console.log('file_content', file_content);
    res.json(JSON.parse(file_content));
  });
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});