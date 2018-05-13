const Sequelize = require('sequelize')
const db = require('../db.js')



const SubTopic = db.define('subtopics', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
})

module.exports = SubTopic;
