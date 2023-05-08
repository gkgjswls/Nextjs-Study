import EventList from '../components/events/eventList'
import styles from '../styles/Home.module.css'
import Head from 'next/head'
import { getFeaturedEvents } from '../helpers/api-util'
export default function HomePage(props) {

  const featuredEvednts = getFeaturedEvents()
  return (
    <div>
      <Head>
        <title>Next Events</title>
        <meta name="description" content='Find a lot of great events that allow you to evolve...'/>
      </Head>
      <EventList items={props.events}/>
    </div>
  )
}
export async function getStaticProps(context){
  const featuredEvednts = await getFeaturedEvents();

  return {
    props: {
      events:  featuredEvednts
    },
    revalidate: 1800, 
  }
}