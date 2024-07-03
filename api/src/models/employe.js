const { DataTypes } = require ('sequelize');

module.exports = ( sequelize ) => {
    sequelize.define( "employe" , {
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
        surname: {
            type: DataTypes.STRING,
            defaultValue: " Nombre sin definir ",
            allowNull: false,
        },
        document: {
            type: DataTypes.INTEGER,
            defaultValue: 11111111,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            defaultValue: " Nombre sin definir ",
            allowNull: false,
        },
        phone: {
            type: DataTypes.INTEGER,
            defaultValue: 11111111,
            allowNull: false,
        },
        picture: {
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