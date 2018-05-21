var express = require('express');
var app = express();
var service = require('./service');
//var con = require('./mysqlconfig');


app.get('/', function (req, res) {
    res.send("Hello Api");
});

app.get('/api',function(req,res){
    var uniq_id = req.param('uniq_id');
    var property_type = req.param('property_type');
    var city = req.param('city');
    var amenities = req.param('amenities');
    var room_price = req.param('room_price');
    var location = req.param('location');

    if(typeof uniq_id !== 'undefined'){
        service.getuid(res,uniq_id);
    }
    
    if(typeof property_type !== 'undefined'){
        service.getproperty(res,property_type);
    }

    if(typeof city !== 'undefined'){
        service.getcity(res,city);
    }

    if(typeof amenities !== 'undefined'){
        service.getamenities(res,amenities);
    }

    if(typeof room_price !== 'undefined'){
        service.getroom_price(res,room_price);
    }

    if(typeof location !== 'undefined'){
        service.getlocation(res,location);
    }
});
 
app.listen(3000);