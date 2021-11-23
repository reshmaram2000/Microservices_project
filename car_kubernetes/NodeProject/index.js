var express = require('express'); 
var app = express();  

app.get('/welcome', function (req, res) {  
   res.sendFile( __dirname + "/" + "welcome.html" );  
    
})

app.get('/register', function (req, res) {  
    res.sendFile( __dirname + "/" + "form.html" );  
     
 })  

app.get('/car_get', function (req, res) {  
response = {  
       first_name:req.query.first_name,  
       last_name:req.query.last_name,
       car_model:req.query.car_model,  
       car_reg:req.query.car_reg,    
   };  
   console.log(response); 
	console.log("Sent data are (GET): first name :"+req.query.first_name+" and last name :"+req.query.last_name+" and car model name :"+req.query.car_model+" and last name :"+req.query.car_reg);   
   //res.end(JSON.stringify(response));  
   res.end("Sent data are (GET): first name :"+req.query.first_name+" and last name :"+req.query.last_name+" and car model name :"+req.query.car_model+" and last name :"+req.query.car_reg);
})  
var server = app.listen(8080, function () {  
  
  var host = server.address().address  
  var port = server.address().port  
  console.log("Example app listening at http://%s:%s", host, port)  
  
})  