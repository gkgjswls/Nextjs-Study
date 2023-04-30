import Link from 'next/link'
export default function ClientsPage() {
  const clients = [
    { 
      id: 'max', name: 'Maximilian',
    },
    {
      id:'manu', name: 'Manuel',
    },
  ];
  return (
    <>
      <div>
        <h1>The ClientsPage</h1>
      </div>
      <ul>
        {/* {
          clients.map(client => <li key={client.name}>
            <Link href={`/clients/${client.id}`}>{client.name}</Link>
          </li>)
        } */}
        {
          clients.map(client => <li key={client.name}>
            <Link href={
              {
                pathname: 'clients/[id]',
                query: {id: client.id},
              }
            }>{client.name}</Link>
          </li>)
        }
      </ul>
    </>
  )
}
