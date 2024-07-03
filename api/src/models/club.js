const { DataTypes } = require ('sequelize');

module.exports = ( sequelize ) => {
    sequelize.define( "club" , {
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
        razonsocial: {
            type: DataTypes.STRING,
            defaultValue: " Nombre sin definir ",
            allowNull: false,
        },
        cuit: {
            type: DataTypes.INTEGER,
            defaultValue: 11111111,
            allowNull: false,
        },
        address: {
            type: DataTypes.STRING,
            defaultValue: " Nombre sin definir ",
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
        isdelete:{
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        }

    } 

    )
}
