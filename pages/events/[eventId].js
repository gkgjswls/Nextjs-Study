import { useRouter } from "next/router"; 
import EventSummary from '../../components/event-detail/event-summary'
import EventLogistics from '../../components/event-detail/event-logistics'
import EventContent from '../../components/event-detail/event-content'
import { getEventById,getFeaturedEvents } from '../../helpers/api-util';
import Head from 'next/head';
const EventDetail = (props) =>{
    const event = props.selectedEvent
    if(!event){
        return <p>Loading...</p>
    }

    return(
    <>
        <Head>
            <title>{event.title}</title>
            <meta name='description' content={event.description}/>
        </Head>
        <EventSummary title={event.title}/>
        <EventLogistics 
            date={event.date} 
            address={event.location} 
            image={event.image} 
            imageAlt={event.title}/>
        <EventContent>
            <p>{event.description}</p>
        </EventContent>
    </>  
    )
    

}

export default EventDetail;

export async function getStaticProps(context) {
    const eventId = context.params.eventId;
    const event = await getEventById(eventId)


    return {
        props: {
            selectedEvent: event,
        },
        revalidate: 30,
    }
}
export async function getStaticPaths(context){

    const featuredEvent = await getFeaturedEvents();
    const eventPaths = featuredEvent.map(event=>{return {params: {eventId: event.id}}})

    return {

        paths: eventPaths,
        fallback: true
    }


}