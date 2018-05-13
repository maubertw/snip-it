const db = require('../db.js')
const SubTopic = require('./subtopic')
const Topic = require('./topic')
const Tag = require('./tag')
const Entry = require('./entry')
const Snippet = require('./snippet')



SubTopic.belongsTo(Topic)
Entry.belongsTo(SubTopic)
Entry.hasMany(Snippet)
Entry.belongsToMany(Tag, {through : 'TagsList'})
Tag.belongsToMany(Entry, {through : 'TagsList'})
Snippet.belongsTo(Entry)




module.exports = {
  db,
  Entry,
  SubTopic,
  Topic,
  Tag,
  Snippet
}
