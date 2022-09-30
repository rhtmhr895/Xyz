const UpdtUsr = require('../model/Register');

const UserUpdate = async(req,res)=>{
    try{
        UpdtUsr.findByIdAndUpdate(req.params.id,req.body, (err)=>{
            if (err) {
              return res.status(400).send({error: "Please send correct data "})
            };
            res.status(200).send({success: "Updation successfull"});
          })
        }

    catch(err){
        res.status(500).send(err)
    }


}

module.exports = {UserUpdate}