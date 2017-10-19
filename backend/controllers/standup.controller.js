var Standup = require('./../models/standup.model');


//exports and module.exports point to the same object
//var exports = module.exports = {};

exports.create = function(req,res){
    var entry = new Standup({
        name:req.body.memberName,
        project:req.body.projectName,
        workYesterday:req.body.workYesterday,
        workToday:req.body.workToday,
        impediment:req.body.impediment        
    });

    entry.save();
    res.status(200);
    res.send({status:'Success'});
};//end:create

exports.listAllRecords = function(req,res,db){
    Standup.find(function(err,results){
        res.status(200);
        res.send({status:'Success',data:results});
    });//end:find
};//end:listAllRecords