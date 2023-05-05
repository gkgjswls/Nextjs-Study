import EventList from '../components/events/eventList'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { getFeaturedEvents } from '../helpers/api-util'
export default function HomePage(props) {

  const featuredEvednts = getFeaturedEvents()
  return (
    <div>
      <EventList items={props.events}/>
    </div>
  )
}
export async function getStaticProps(context){
  const featuredEvednts = await getFeaturedEvents();

  return {
    props: {
      events:  featuredEvednts
    }
  }
}