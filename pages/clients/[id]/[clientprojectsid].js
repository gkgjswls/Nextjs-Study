import { useRouter } from 'next/router'

const SelectedClientProjecPage = ()=>{
  const router = useRouter();
  console.log(router.query)

return(
  <div>
      <h1>SelectedClientProjecPage</h1>
  </div>
  )
}
export default SelectedClientProjecPage