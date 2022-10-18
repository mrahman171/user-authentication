const S_inf= require('../model/Note');

const addinformation =(req,res)=>{
    let newNote= new S_inf({
        name: req.body.name,
        address: req.body.address,
        phone: req.body.phone
    })
    newNote.save();
    res.redirect("/");
}

const findStudent=(req,res)=>{
    let id= req.params.id
    S_inf.findById(id)
     .then(node=>{
         res.status(200).json({
             node
         })
     })
     .catch(err=>{
         console.log(err)
         res.status(500).json({
             message:'Error occured',
             error: err
         })
     })
}
 
const checking =(req,res)=>{
    S_inf.find()
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

const DeleteStudent=(req,res)=>{
    let id= req.params.id
    S_inf.findByIdAndRemove(id)
     .then(result=>{
         res.json({
             message:'Student information delete',
             result

         })
     })
     .catch(err=>{
         console.log(err)
         res.status(500).json({
             message:'Error occured',
             error: err
         })
     })
}

const StudentEditor=(req,res)=>{
    let id= req.params.id
    let Updatedinformation={
        name:req.body.name,
        address: req.body.address,
        phone: req.body.phone

    }
    S_inf.findByIdAndUpdate(id,{$set: Updatedinformation})
    .then(node=>{
        res.json({
            message:'Student information Updated Successfully',
            node

        })
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({
            message:'Error occured',
            error: err
        })
    })
}


module.exports={
    checking,
    addinformation,
    findStudent,
    DeleteStudent,
    StudentEditor

}