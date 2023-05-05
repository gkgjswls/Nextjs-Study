import { useRouter } from "next/router";
import EventList from "../../components/events/eventList";
import ResultsTitle from "../../components/events/results-title";
import Button from "../../components/ui/button";
import ErrorAlert from '../../components/ui/error-alert'
import { getFilteredEvents } from '../../helpers/api-util';
const FilteredEventsPage = (props) =>{

    if(props.hasError){
            return (
                <>
                <ErrorAlert>
                    <p>Invalid filter Please adjust your values!</p>
                </ErrorAlert>
                <div className="center">
                    <Button link='/events'>Show All Events</Button>
                </div>
                </>
            )
        
    }
    const filteredEvents = props.events;

    if(!filteredEvents || filteredEvents.length === 0){
        return (
        <>
        <ErrorAlert>
            <p>No events found for the filter!</p>
        </ErrorAlert>
        <div className="center">
            <Button link='/events'>Show All Events</Button>
        </div>
        </>
        )
    }
    const date = new Date(props.year,props.month - 1)
    return(
        <div>
            <ResultsTitle date={date}/>
            <EventList items={filteredEvents}/>
        </div>
    )

}

export default FilteredEventsPage;

export async function getServerSideProps(context){
    const {params} = context;
    const filterData = params.slug;

    const filteredYear = filterData[0];
    const filteredMonth = filterData[1];
    const numYear = + filteredYear
    const numMonth = + filteredMonth
    if(isNaN(numYear)  ||
        isNaN(numMonth)||
        numYear > 2030 ||
        numYear < 2021 || 
        numMonth > 12 ||
        numMonth < 1){
        return{
            props: {
                hasError: true
            },
            // notFound: true,
            }}

    const filteredEvents =  await getFilteredEvents({
        year: numYear,
        month: numMonth,
    })
    return {
        props: {
            events: filteredEvents,
            year: numYear,
            month: numMonth,
        }
    }
}