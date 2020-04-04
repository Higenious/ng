const express    = require('express');
const userModel  =  require('../Model/userModel').users;
const log4js = require('log4js');
const logger = log4js.getLogger();
const userServices = require('../Services/userServices');





/** add user */
function addUser(req, res){
   var reqBody = req.body;
   logger.info('adduser', reqBody);
      try {
         userModel(reqBody).save().
             then(function (result) {
                 res.send({status: 200, data: reqBody, message : "user added suceesfullly"});
             }).catch(function (error) {
                if (error.name == 'ValidationError') {
                 res.send(error) 
                }
             })
     } catch  (error) {
            res.send(error); 
            
     }
      
   }






/** Get All user */
   function getalluser(req, res) {
    try {
        userServices.getalluser(function (successData) {
            res.send(successData);
        }, function (errorData) {
            res.send(errorData);
        });
    } catch (error) {
        res.send(RESPONSE.internalServerError(error.message));
    }
}




/** deleting user */
function removeUser(req, res){
    try {
         let Id = req.body.Id;
         userServices.removeUser(Id, function (successData) {
        res.send(successData);
    }, function (errorData) {
        res.send(errorData);
    });
} catch (error) {
    res.send(RESPONSE.internalServerError(error.message));
}
}




/** Edit user */
function editUser(req, res){
    try {
    let reqBody = req.body;
    logger.debug('reqbody', reqBody);
    userServices.editUser(reqBody, function (successData) {
        res.send(successData);
    }, function (errorData) {
        res.send(errorData);
    });
} catch (error) {
    res.send(RESPONSE.internalServerError(error.message));
}
}




/** Exporting modules */
module.exports.getalluser = getalluser;
module.exports.removeUser = removeUser;
module.exports.editUser   = editUser;
module.exports.addUser =addUser;
