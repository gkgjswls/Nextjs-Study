
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
      {id: 'c1', name: '김 풍', text: 'hi'},
      {id: 'c2', name: '주호민', text: 'hi'},
      {id: 'c3', name: '침착맨', text: 'hi'}
    ]

    return res.status(201).json({data: dummyList})

  }
}


