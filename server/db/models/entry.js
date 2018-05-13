const Sequelize = require('sequelize')
const db = require('../db.js')



const Entry = db.define('entries', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = Entry;
