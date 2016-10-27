var express = require("express");
var app = express();
var multer  = require('multer');
var upload = multer({ dest: 'uploads/' });
var path = require("path");



app.set('view engine', 'jade');
app.set('views', 'public');
app.get('/', function(req, res){

    res.render('form', {});

});
app.listen(8080);


app.post('/process-form', upload.single('theFile'), function (req, res, next) {
  var file = req.file;
  var size = file.size;
  res.send(JSON.stringify({'size':size}));
})