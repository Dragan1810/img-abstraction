const express = require('express');
const router = express.Router();

router.get('/api/resentsearch',(req,res,next)=>{
    Search.find({},(err,data)=>{
        res.json(data);
    })
})

router.get('/api/imagesearch/:Search*',(req,res,next)=>{
   const {Search} = req.params;
   const {offset} = req.query;

   res.json({Search,offset}); 
})

module.exports=router;