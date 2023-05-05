import { useRouter } from 'next/router';
import EventList from '../../components/events/eventList'
import EventSearch from "../../components/events/events-search";
import { getAllEvents } from '../../helpers/api-util';
const Event= (props) =>{
    const router = useRouter()
    const events = props.allEvents;
    const findEventHandler = (year,month)=>{
        const fullPath = `/events/${year}/${month}`
        router.push(fullPath);
    }
    return(
        <div>
            <EventSearch onSearch={findEventHandler} />
            <EventList
                items ={events}
            ></EventList>
        </div>
    )

}

export default Event;

export async function getStaticProps(context){

    const allEvents = await getAllEvents()


    return {
        props: {
            allEvents: allEvents
        }
    }
}