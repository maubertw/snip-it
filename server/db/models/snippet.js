const Sequelize = require('sequelize')
const db = require('../db.js')



const Snippet = db.define('snippets', {
  code : {
    type: Sequelize.STRING,
    allowNull: false
  },
  description : {
    type : Sequelize.TEXT,
    allowNull : false,
  },
  image : Sequelize.STRING,
  source : Sequelize.STRING,
})

module.exports = Snippet;
