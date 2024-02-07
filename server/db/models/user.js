'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Order }) {
      this.hasMany(Order, { foreignKey: 'user_id' });
    }
  }
  User.init({
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    date_of_birth: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};