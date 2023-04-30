
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function HomePage() {
  return (
    <div>
      <h1>The Home Page</h1>
      <ul>
        <li>
          <Link href='/portfolio'>Portfolio</Link>
          { /* http 요청을 보내지도 않고 기존 상태(reactContext,redux의 값 변화없이 이동가능) */}
        </li>
        <li>
          <Link href='/clients'>Clients</Link>
        </li>
      </ul>
    </div>
  )
}
