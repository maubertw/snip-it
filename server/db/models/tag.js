const Sequelize = require('sequelize')
const db = require('../db.js')



const Tag = db.define('tags', {
  content: {
    type: Sequelize.STRING,
    allowNull: false
  },
})

module.exports = Tag;
