import { useRouter } from "next/router"; 
import EventSummary from '../../components/event-detail/event-summary'
import EventLogistics from '../../components/event-detail/event-logistics'
import EventContent from '../../components/event-detail/event-content'
import { getAllEvents, getEventById } from '../../helpers/api-util';
const EventDetail = (props) =>{


    return(
    <>
        <EventSummary title={props.selectedEvent.title}/>
        <EventLogistics 
            date={props.selectedEvent.date} 
            address={props.selectedEvent.location} 
            image={props.selectedEvent.image} 
            imageAlt={props.selectedEvent.title}/>
        <EventContent>
            <p>{props.selectedEvent.description}</p>
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
        }
    }
}
export async function getStaticPaths(context){

    const allEvents = await getAllEvents();
    const eventPaths = allEvents.map(event=>{return {params: {eventId: event.id}}})

    return {

        paths: eventPaths,
        fallback: false
    }


}