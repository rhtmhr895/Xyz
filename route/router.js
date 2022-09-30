const express = require('express');
const router = express.Router();

const Add = require('../controller/Register');
const Get = require('../controller/SeeUser');
const Updt = require ('../controller/UpdateUSer');
const DelAll = require('../controller/DeleteUser');


router.post('/signup', Add.NewUser);
router.get('/getuser', Get.GetAll);
router.put('/update/:id',Updt.UserUpdate);
router.delete('/deleteAll',DelAll.DeleteAll);


module.exports = router;