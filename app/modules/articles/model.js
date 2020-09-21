module.exports = (sequelize, Sequelize) => {

    const Articles = sequelize.define('articles', {

        title: {
            type: Sequelize.STRING(255),
            allowNull: false,
        },
        description: {
            type: Sequelize.STRING(1000),
            allowNull: false
        },
       

    },{
        timestamps:false
    });

    return Articles;
}