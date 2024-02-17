var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var teht15Router = require('./routes/teht15');


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/teht15', teht15Router);

app.use(
    function(req,res,next){
        console.log('The common middleware called');
        next();
    }
);
app.get('/example/:name',
    function(request,response){
        response.send('No Terve '+request.params.name);
    }
);

app.get('/example/:Nimi/:Sukunimi',
    function(request, response){
        response.send('Terve '+request.params.Nimi+" "+request.params.Sukunimi);
    }
);
app.post('/',
    function(request,response){
        response.send(request.body);
        console.log(request.body);
    }
);

module.exports = app;
