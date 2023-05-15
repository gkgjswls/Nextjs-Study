import { connectDatabase, insertDocument,getAllDocuments } from "../../../helpers/db-util";


export default async function handler(req, res) {
  const eventId = req.query.eventId;
  let client;
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
    
    try{
      client = await connectDatabase();
    }
    catch(err){
      res.status(500).json({message: 'connecting to the database failed!'})
      return ;
    }
    let result;
    try{
      result = await insertDocument(client,'comments',{newComment})
      newComment._id = result.insertedId
  
      res.status(201).json({message: 'Added comment', comment: newComment})
    }
    catch(err){
      res.status(500).json({message: 'Inserting data failed!'})

    }
  }
  if(req.method === 'GET'){
    //받기
    let client;
    try{
      client =await connectDatabase()
    }
    catch(err){
      res.status(500).json({message: 'connecting to the database failed!'})
      return ;
    }
    let document;
    try{
      document = await getAllDocuments(client,'comments',{_id: -1})
    }
    catch(err){
      res.status(500).json({message: 'Data fetching failed'})
      return;
    }

    return res.status(201).json({data: document})

  }

  client.close()
}