var bodyParser = require('body-parser');
var express = require('express');
var mysql = require('mysql');
var app = express();
var sql;
var request = require("request");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

/* This file is used for localhost testing */
var connection = mysql.createConnection({
    host: 'stefanswebsitereact.cplpxcngd7cy.us-east-2.rds.amazonaws.com',
    user: 'zoro_Cherry027_',
    password: 'Cherry9fz',
    database: 'StefansWebsiteReact',
    port: '3306'
});


connection.connect(function(err){
    if (err) throw err;
    console.log("good!");
});

app.use(express.static(__dirname + '/build'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
  });

app.get('/api/education', (req, res) => {
    let sql = 'SELECT * FROM Education';

    let query = connection.query(sql, (err, result)=> {
        if( err ) throw err;
        console.log(result);
        res.send(result);
    });
});

app.get('/api/education', (req, res) => {
    let sql = 'SELECT * FROM Education';

    let query = connection.query(sql, (err, result)=> {
        if( err ) throw err;
        console.log(result);
        res.send(result);
    });
});

app.get('*', (req, res) => {
    res.status(200).sendFile(__dirname + '/build/index.html');
    console.log(req);
  });

app.listen(9000, '0.0.0.0', () => console.log('Listening on port 9000!'));
