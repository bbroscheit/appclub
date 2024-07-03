const { DataTypes } = require ('sequelize');

module.exports = ( sequelize ) => {
    sequelize.define( "category" , {
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            defaultValue: " Nombre sin definir ",
            allowNull: false,
        },
        type: {
            type: DataTypes.INTEGER,
            defaultValue: 11111111,
            allowNull: false,
        },
        isdelete:{
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        }

    } 

    )
}