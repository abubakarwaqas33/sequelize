const express = require('express');
const app = express();
const config= require('./app/config/config')
const db = require('./app/config/db.config.js');
const routes= require('./app/routes/routes')

app.use(express.json());
app.use(express.urlencoded({extended:true}))

db.sequelize.sync({ alter: true }).then(() => {
    console.log('Update with { alter: true}');
});

routes(app)


var port = config.SERVER_PORT;
app.listen(port, () => {
    console.log(`serever connected at port:${port}`)
  })