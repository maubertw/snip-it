const Sequelize = require('sequelize')
const db = new Sequelize('postgres://localhost:5432/snip-it', {
  logging: false
})

module.exports = db
