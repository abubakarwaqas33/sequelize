module.exports= (sequelize, Sequelize)=>{

    const Employee= sequelize.define('employee',{

        name: {
            type: Sequelize.STRING(255),
            allowNull: false,
        },
        email: {
            type: Sequelize.STRING(255),
            allowNull: false
        },
        role: {
            type: Sequelize.STRING(255),
            allowNull: false
        },

    });
        
    return Employee;
    
}