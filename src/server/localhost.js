var bodyParser = require('body-parser');
var mysql = require('mysql');
var express = require('express'); 
var app = express();
var sql;
var request = require("request");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

/* This file is used for localhost testing */
var connection = mysql.createConnection({
    host: 'stefanswebsitereact.cplpxcngd7cy.us-east-2.rds.amazonaws.com',
    user: process.argv[2],
    password: process.argv[3],
    database: 'StefansWebsiteReact',
    port: '3306'
});

connection.connect(function(err){
    if (err) throw err;
    console.log("good!");
});

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

app.listen(3000, '0.0.0.0', () => console.log('Listening on port 3000!'));