var con = require('./mysqlconfig');

function getuid(res,uniq_id){
    con.query("select uniq_id,property_id,room_price,CONCAT(latitude,',',longitude) as location,city,amenities,property_type,check_in_date,check_out_date from properties where uniq_id = '"+uniq_id+"'",function (error, results, fields){
        if (error) throw error;
        res.json(results);
    });
}

function getproperty(res,property_type){
    con.query("select uniq_id,property_id,room_price,CONCAT(latitude,',',longitude) as location,city,amenities,property_type,check_in_date,check_out_date from properties where property_type = '"+property_type+"'",function(error, results, fields){
        if (error) throw error;
        res.json(results);
    });  
}

function getcity(res,city){
    con.query("select uniq_id,property_id,room_price,CONCAT(latitude,',',longitude) as location,city,amenities,property_type,check_in_date,check_out_date from properties where city = '"+city+"'",function(error, results, fields){
        if (error) throw error;
        res.json(results);
    });  
}

function getamenities(res,amenities){
    con.query("select uniq_id,property_id,room_price,CONCAT(latitude,',',longitude) as location,city,amenities,property_type,check_in_date,check_out_date from properties where amenities = '"+amenities+"'",function(error, results, fields){
        if (error) throw error;
        res.json(results);
    });  
}

function getroom_price(res,room_price){
    if(room_price!=''){
        var prices = room_price.split('-');
    }
    con.query("select uniq_id,property_id,room_price,CONCAT(latitude,',',longitude) as location,city,amenities,property_type,check_in_date,check_out_date from properties where room_price between '"+prices[0]+"' and '"+prices[1]+"'",function(error, results, fields){
        if (error) throw error;
        res.json(results);
    });  
}


function getlocation(res,location){
    if(location!=''){
        var loc = location.split(',');
    }
    con.query("select uniq_id,property_id,room_price,CONCAT(latitude,',',longitude) as location,city,amenities,property_type,check_in_date,check_out_date from properties where latitude='"+loc[0]+"' and longitude ='"+loc[1]+"'",function(error, results, fields){
        if (error) throw error;
        res.json(results);
    });  
}


module.exports.getuid = getuid;
module.exports.getproperty = getproperty;
module.exports.getcity = getcity;
module.exports.getamenities = getamenities;
module.exports.getroom_price = getroom_price;
module.exports.getlocation = getlocation;