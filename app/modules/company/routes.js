const router= require('express').Router();
const controller=require('./controller')

const path= '/company'

router
.post(path,controller.create);


module.exports=router;