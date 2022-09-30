const DelUser = require('../model/Register');

const DeleteAll = async(req,res)=>{
    await DelUser.deleteMany(req.body);
    res.send("All data deleted successfully");

};

module.exports ={DeleteAll}