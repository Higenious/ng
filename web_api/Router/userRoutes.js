var express          =  require('express');
var router           =  express.Router();
var userController   =  require('../Controller/userController');




 

/**Routes */
router.post('/user/register', userController.addUser);
router.get('/user/getall', userController.getalluser);
router.post('/user/delete', userController.removeUser);
router.post('/user/edit', userController.editUser);


/** Exporting Routes */
module.exports = router;