const articles = require('./../modules/articles/routes');
const users = require('./../modules/users/routes');
const company = require('./../modules/company/routes');
const  employee = require('./../modules/employee/routes');


module.exports=(app)=>{

    app
    .use(articles)
    .use(users)
    .use(company)
    .use(employee)
    
}