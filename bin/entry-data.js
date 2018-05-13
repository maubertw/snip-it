

const entryItems = {
  //if topic exists, push entry to that list, else create new entry on the topic table
  sequelize : [entry1]
}

//findOrCreate for topic, subtopic, and tags

const entry1 = ({
    //if subtopic exists, push entry to that list, else create new entry on the subtopic table
    subtopic : 'many to many relationships',
    //loop through tags and if they exist in the tags table add the id association, if not create new entry on the tags table and then add id

    tags : ['tags', 'denormalization'],
    source : ('https://stackoverflow.com/questions/334183/what-is-the-most-efficient-way-to-store-tags-in-a-database?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa'),
    //format as code snippet
    snippet : 'Table: Items \nColumns: Item_ID, Title, Content\nTable: Tags\nColumns: Title, Item_ID',
    notes : ("can make a topic (subtopic) table where each topic has a name and an id, then tags are associated with a subject id on a join table"),
    other : null,
  })



module.exports = entryItems
