const User= require('../model/user');
const Bcrypt= require('bcrypt');
const jwt= require('jsonwebtoken');

const UserRegsister=(req,res)=>{
    Bcrypt.hash(req.body.password,10,(err,hash)=>{
        if(err){
            res.json({
                error: err
            })
        }
        let user=new User({
            email:req.body.email,
            password:hash
        })
        user.save()
         .then(result=>{
             res.status(201).json({
                 message: 'User is create Successfully',
                 user:result
             })
         })
         .catch(error=>{
             res.json({
                 error
             })
         })
    })

}

const loginFunction =(req,res)=>{
   let email= req.body.email;
   let password=req.body.password;
   
   User.findOne({email})
    .then(user=>{
        if(user){
            Bcrypt.compare(password,user.password,(err,result2)=>{
                if(err){
                    res.json({
                        message:'Error Occured'
                    })
                }
                if (result2){
                    let token= jwt.sign({email:user.email,_id: user._id}, 'mitu',
                    {expiresIn: '2h'})
                    res.json({
                        message:'Login successfully',
                        token
                    })
                }else{
                    res.json({
                        message:'login failed'
                    })
                }
            })
        }
        else{
            res.json({
                message:'Unvalid request'
            })
        }
    })

}

const ViwesAllUser=(req,res)=>{
    User.find()
    .then(data =>{
        res.status(200).json({
            message: 'All data',
            data: data
        })
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({
            message: 'Error Occured', 
            error: err
        })
    })
}


module.exports={
    UserRegsister,
    loginFunction,
    ViwesAllUser
}

