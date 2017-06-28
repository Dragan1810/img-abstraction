const express = require('express');
const router = express.Router();


router.get('/api/imagesearch/:Search*',(req,res)=>{
   const {Search} = req.params;
   const {offset} = req.query;

   res.json({Search,offset}); 
})

module.exports=router;