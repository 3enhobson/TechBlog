const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');
const User = require('./User');

class Post extends Model {}
 

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    body: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len:[1, 500]
        }
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        refrences: {
            model: 'user',
            key: 'id'
        },
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'post',
  }
);

module.exports = Post;
