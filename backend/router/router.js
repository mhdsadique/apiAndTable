const express=require("express")
const { UserModel } = require("../model/model")
const router=express.Router()

router.get("/",async(req,res)=>{
    const data=req.query
     try{
        const user=await UserModel.find(data)
        res.send(user)
     }catch(e){
        console.log(e);
     }

})
router.post("/",async(req,res)=>{
     const body=req.body
     try{
         const save=new UserModel(body)
         await save.save()
         res.send("product saved")
    }catch(e){
            console.log(e);
            res.send(e)
 }
})
router.delete("/:id",async(req,res)=>{
    const id=req.params.id
    try{
       await  UserModel.findByIdAndDelete({_id:id})
         res.send("product has been deleted")
    }catch(e){
        res.send(e)
    }
})
router.patch("/:id",async(req,res)=>{
    const pay=req.body
    const id=req.params.id
    try{
      await UserModel.findByIdAndUpdate({_id:id},pay)
       res.send("product has been updated")
    }catch(e){
        res.send(e)
    }
})
module.exports={router}