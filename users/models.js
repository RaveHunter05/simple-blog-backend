const {Sequelize, DataTypes} = require('sequelize')

const {db} = require('../main/settings')

const User = db.define('User', {
    name:{
        type:DataTypes.STRING,
        allowNull: false
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false
    },
    nickname:{
        type: DataTypes.STRING,
        allowNull: false
    }
}) 

module.exports = {User}