import { getAllEvents } from "../../data/dummy-data";
import EventList from '../../components/events/eventList'
import EventSearch from "../../components/events/events-search";
import { useRouter } from "next/router";
const Event= () =>{
    const router = useRouter();

    const events = getAllEvents();

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