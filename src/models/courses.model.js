// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const { HasMany } = require('sequelize');
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const courses = sequelizeClient.define('courses', {
    subject: {
      type: DataTypes.STRING,
      allowNull: false
    },
    number: {
      type: DataTypes.STRING,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    section: {
      type: DataTypes.STRING,
      allowNull: false
    },
    professor: {
      type: DataTypes.STRING,
      allowNull: false
    }

  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  courses.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
    courses.belongsToMany(models.students,{through: 'courses_students'})
    courses.hasMany(models.messages)
  };

  return courses;
};
