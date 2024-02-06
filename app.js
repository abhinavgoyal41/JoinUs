var express = require('express');
var mysql = require('mysql');
var app = express();
var bodyparser  = require('body-parser');
app.set('view engine', 'ejs');
app.use(bodyparser.urlencoded({extended : true}))
app.use(express.static(__dirname + '/public'))
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'sqluser',
    password : 'password' ,    // your root username
    database : 'joinus'   // the name of your db
  });
app.get('/' , function(req,res){
    var q='select count(*) as count from user'
    connection.query(q,function(err,result){
        if (err) throw err;
        var count = result[0].count
        // res.send('As of now ' +count+ ' customers have registered in this portfolio')
        res.render('home',{count:count})
    })
})  
app.post('/register' , function(req,res){
    var person = {
        email:req.body.email

    };
    connection.query('INSERT INTO user SET ?' , person,function(err,result){ 
        if (err) throw err ;
        res.redirect('/')
    });
});

app.get('/joke' , function(req,res){
    var joke= ' look at you '
    res.send(joke)
})
app.get('/Random_num' , function(req,res){
    var num = Math.floor(Math.random() * 10)+1;
    res.send("your number is " +num)
});
app.listen(8080,function(){
    console.log('Server running on 8080');
});
// to kill port :  kill-port --port 8080