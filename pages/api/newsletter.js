import { connectDatabase, insertDocument } from "../../helpers/db-util";

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
      await insertDocument(client,'newsletters',{email: userEmail})
      client.close();
    }
    catch(err){
      res.status(500).json({message: 'Inserting data failed!'})
      return;
    }
    res.status(201).json({message: "signup"})
  }
}
