import { useRouter } from 'next/router';
const ClientProjectsPage = ()=>{
  const router = useRouter();
  const loadProjectHandler = () =>{
    // router.push('/clients/max/projecta ')
    router.push({
      pathname: '/clients/[id]/[clientprojectsid]',
      query: {
        id: 'max',
        clientprojectsid:'projecta'
      }
    })
    // router.replace('/clients/max/projecta ')
  }
  return <div>
    <h1>The Projects of a Given Client</h1>
    <button onClick={loadProjectHandler}>Load Project A</button>
  </div>
}

export default ClientProjectsPage;