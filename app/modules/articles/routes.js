const router= require('express').Router();
const controller= require('./controller');
const PATH='/articles'

router
.get(PATH, controller.findAll)
.post(PATH, controller.create);


module.exports= router;