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
        date: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            allowNull: false,
        },
        place: {
            type: DataTypes.STRING,
            defaultValue: " Nombre sin definir ",
            allowNull: false,
        },
        versus: {
            type: DataTypes.STRING,
            defaultValue: " Nombre sin definir ",
            allowNull: false,
        },
        state: {
            type: DataTypes.STRING,
            defaultValue: " Nombre sin definir ",
            allowNull: false,
        },
        result: {
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