const router= require('express').Router();
const controller=require('./controller')

const path= '/employee'

router
.post(path,controller.create);


module.exports=router;