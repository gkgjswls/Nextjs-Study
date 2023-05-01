import EventList from '../components/events/eventList'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { getFeaturedEvents } from './dummy-data'
export default function HomePage() {
  const featuredEvednts = getFeaturedEvents()
  return (
    <div>
      <EventList items={featuredEvednts}/>
    </div>
  )
}
