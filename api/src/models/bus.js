const { DataTypes } = require ('sequelize');

module.exports = ( sequelize ) => {
    sequelize.define( "bus" , {
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        driver: {
            type: DataTypes.STRING,
            defaultValue: " Nombre sin definir ",
            allowNull: false,
        },
        patente: {
            type: DataTypes.STRING,
            defaultValue: " Nombre sin definir ",
            allowNull: false,
        },
        typevehicle: {
            type: DataTypes.STRING,
            defaultValue: " Nombre sin definir ",
            allowNull: false,
        },
        isdelete:{
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        }

    } 

    )
}