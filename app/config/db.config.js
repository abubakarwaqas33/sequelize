const Sequelize = require('sequelize');

const sequelize = new Sequelize('sqltest', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: 0,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    timezone: '+05:00',
});

const db={};

db.Sequelize= Sequelize;
db.sequelize=sequelize;

db.Articles = require('../modules/articles/model')(sequelize, Sequelize);
db.Users = require('../modules/users/model')(sequelize, Sequelize);
db.Emploeyee = require('../modules/employee/model')(sequelize, Sequelize);
db.Compnay = require('../modules/company/model')(sequelize, Sequelize);


db.Users.hasMany(db.Articles, { as: "articles",foreignKey: "uploaderId",});

//db.Articles.belongsTo(db.Users, { foreignKey: "uploaderId", });

  
module.exports= db;


// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);
//   });