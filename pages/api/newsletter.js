import { MongoClient } from "mongodb";


export default async function handler(req, res) {

  if(req.method ==='POST'){
    const userEmail = req.body.email;
    if(!userEmail || !userEmail.includes('@')){
      return res.status(422).json({message: 'Invalid email address'})
    }
    const client = await MongoClient.connect('mongodb+srv://gkgjswls842:1234@cluster0.ht9pwmc.mongodb.net/newsletter?retryWrites=true&w=majority')
    const db  = client.db();
    return db.collection('emails').insertOne({email: userEmail})}
    client.close();
    res.status(201).json({news: userEmail})
  }


