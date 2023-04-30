import {useRouter} from 'next/router';

export default function PortfolioProjectPage() {
  const router = useRouter();

  console.log('🚀 ~ file: [projectId].js:13 ~ PortfolioProjectPage ~ router.pathname:', router.pathname)
  console.log('🚀 ~ file: [projectId].js:7 ~ PortfolioProjectPage ~ router.query:', router.query)
  return (
    <div>
      <h1>PortfolioProjectPage</h1>
    </div>
  )
}
