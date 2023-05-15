import { MongoClient } from "mongodb";

async function connectDatabase() {
  const client = await MongoClient.connect('mongodb+srv://gkgjswls842:1234@cluster0.ht9pwmc.mongodb.net/events?retryWrites=true&w=majority')

  return client;
}

async function insertDocument(client,document){
  const db  = client.db();
  await db.collection('newsletters').insertOne(document)

}

export default async function handler(req, res) {

  if(req.method ==='POST'){
    const userEmail = req.body.email;
    if(!userEmail || !userEmail.includes('@')){
      return res.status(422).json({message: 'Invalid email address'})
    }
    let client;
    try{
      client = await connectDatabase()
    }
    catch(err){
      res.status(500).json({message: 'connecting to the database failed!'})
      return;
    }
    try{
      await insertDocument(client,{email: userEmail})
      client.close();
    }
    catch(err){
      res.status(500).json({message: 'Inserting data failed!'})
      return;
    }
    res.status(201).json({message: "signup"})
  }
}
