import { MongoClient } from "mongodb";


export default async function handler(req, res) {
  const eventId = req.query.eventId;
  const client = await MongoClient.connect('mongodb+srv://gkgjswls842:1234@cluster0.ht9pwmc.mongodb.net/events?retryWrites=true&w=majority')

  if(req.method ==='POST'){
    //추가
    const {email, name, text} = req.body;
    if(!email.includes('@') ||
        !name||
        name.trim() ===''||
        !text ||
        text.trim() === ''
    ) {
      return res.status(422).json({message: 'Invalid input'});
      
    }
    const newComment = {
      email,
      name,
      text,
      eventId
    }
    
    const db  = client.db();
    const result= await db.collection('comments').insertOne({newComment})
    console.log(result)
;   newComment.id = result.insertedId;

    res.status(201).json({message: 'Added comment', comment: newComment})
  }
  if(req.method === 'GET'){
    //받기
    const db = client.db();
    const document = await db.collection('comments').find().sort({_id: -1}).toArray()


    return res.status(201).json({data: document})

  }

  client.close()
}