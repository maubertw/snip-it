
const {db, Topic, SubTopic, Entry, Tag, Snippet} = require('../server/db/models')



const seed = async () => {
  await db.sync({force: true})


  const testTopic = await Topic.create({title : 'monkies', links : ['www.google.com']})

  const spiderMonkies = await SubTopic.create({ title : 'Spider Monkies'})

  const babyMonkies = await Entry.create({
    title : 'baby monkies',
  })

  const monkeySnip = await Snippet.create({
    code : 'this is some code',
    description : 'cool things about baby monkies',
    image : 'http://www.zooborns.com/.a/6a010535647bf3970b015432abed86970c-800wi',
    source : 'https://en.wikipedia.org/wiki/Spider_monkey' ,
    tags : ['cuteness', 'tails']
  })

  await Tag.create({ content : 'monkey'})


  db.close()
  console.log(`

    Seeding successful!


  `)
}

seed().catch(err => {
  db.close()
  console.log(`

    Error seeding:

    ${err.message}

    ${err.stack}

  `)
})
