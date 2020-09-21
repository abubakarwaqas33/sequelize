const router= require('express').Router();
const controller=require('./controller')

const path= '/user'

router
.post(path,controller.create);


module.exports=router;