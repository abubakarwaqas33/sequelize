module.exports= (sequelize, Sequelize)=>{

    const Users= sequelize.define('users',{

        name: {
            type: Sequelize.STRING(255),
            allowNull: false,
        },
       role: {
            type: Sequelize.STRING(255),
            allowNull: false
        },

    });
        
    return Users;
    
}