const articles = require('./../modules/articles/routes');
const users = require('./../modules/users/routes');

module.exports=(app)=>{

    app
    .use(articles)
    .use(users);

}