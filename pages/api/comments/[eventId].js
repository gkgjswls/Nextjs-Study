
export default function handler(req, res) {
  const eventId = req.query.eventId;
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
      id:  new Date().toISOString(),
      email,
      name,
      text,
    }
    
    
    return res.status(201).json({message: 'Added comment', comment: newComment})
  }
  if(req.method === 'GET'){
    //받기
    const dummyList = [
      {id: 'c1', name: '하헌진', text: 'hi'},
      {id: 'c2', name: '함민우', text: 'hi'},
      {id: 'c3', name: '유안서', text: 'hi'}
    ]

    return res.status(201).json({data: dummyList})

  }
}


