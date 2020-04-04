const mongoose         =   require('mongoose');
const userModel        =   require('../Model/userModel').users;



function createUser(data,  successData, errorData){
    try {
        userModel(data).save().
            then(function (result) {
                successData({status: 200, data: data, message : "suceesfullly inserted"});
            }).catch(function (error) {
                errorData(error) 
            })
    } catch  (error) {
        errorData(); 
           
    }
}



/** get all users */
function getalluser(successData, errorData){
    try {
        userModel.find({}).
            then(function (result) {
                successData({status: 200, result, message : "suceesfullly fetched all users"});
            }).catch(function (error) {
                errorData(error) 
            })
    } catch  (error) {
        errorData(); 
           
    }
}



/** Delete user */
function removeUser(id,successData, errorData){
    try {
        userModel.findById(id)
            .then(function (result) {
                if (result) {
                    try {
                        userModel.deleteOne({ _id: id })
                            .then(function (result) {
                                successData({status: 200,  message : "User Deleted Successfully!"});
                            }).catch(function (error) {
                                errorData(error)
                            });
                    } catch (error) {
                        errorData(error)
                    }
                } else {
                    successData({status: 200, result, message : "User not Found"});
                }
            }).catch(function (error) {
                errorData(error)
            })
    } catch (error) {
        errorData(error)
    }
}



/** edit user */
function editUser(data,successData, errorData){
    try {
        userModel.findOneAndUpdate({ "_id": data.Id }, { $set: data }, { new: true, upsert: true }, function (error, result) {
            if (error) {
                errorData(error)
            } else {
                successData({status: 200, result, message : "User updated Successfully !"});

            }
        })
    } catch (error) {
        errorData(error)
    }
}






/** exporting modules */
module.exports.createUser     =  createUser;
module.exports.getalluser     =   getalluser;
module.exports.removeUser     =  removeUser;
module.exports.editUser       =   editUser