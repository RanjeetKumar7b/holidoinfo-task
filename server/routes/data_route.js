const express=require('express');
const Storage=require('../models/storage');
const router=express.Router();
router.get("/passdata",async(req,res)=>{
       try {
          const datas=await Storage.find({});
          res.send(datas);
       } catch (error) {
          return res.status(400).json({message:error});
       }
});
module.exports=router;