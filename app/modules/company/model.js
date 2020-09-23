module.exports= (sequelize, Sequelize)=>{

    const Company= sequelize.define('company',{

        name: {
            type: Sequelize.STRING(255),
            allowNull: false,
        },
      
    });
        
    return Company;
    
}