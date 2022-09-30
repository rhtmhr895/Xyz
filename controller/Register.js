const Register = require('../model/Register');

const NewUser = async(req,res)=>{

    try{
        let Usr = new Register(req.body);
        let data = await Usr.save();
        res.status(201).json({
            success:"true",
            data:{data}
         
        })

    }catch(e){
        res.status(400).send(e)
    }

};

module.exports = {NewUser}