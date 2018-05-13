const Sequelize = require('sequelize')
const db = require('../db.js')



const Topic = db.define('topics', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  links : Sequelize.ARRAY(Sequelize.TEXT)
})

module.exports = Topic;
