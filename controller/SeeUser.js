const CheckUser = require('../model/Register');

const GetAll = (req,res)=>{
    try{
        CheckUser.find({},(err,result)=>{
            if(err){
                res.send(err)
            }
            else{
                res.send(result)
            }

        })

    }catch(e){
    
        res.status(500).send(e)
    }
}

module.exports = {GetAll}