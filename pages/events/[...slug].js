import { useRouter } from "next/router";
import { getFilteredEvents } from "../../data/dummy-data";
import EventList from "../../components/events/eventList";
import ResultsTitle from "../../components/events/results-title";
import Button from "../../components/ui/button";
import ErrorAlert from '../../components/ui/error-alert'
const FilteredEventsPage = () =>{
    const router = useRouter();
    const filteredData = router.query.slug
    if(!filteredData){
        return <p>...loading</p>
    }
    const filteredYear = filteredData[0];
    const filteredMonth = filteredData[1];
    const numYear = + filteredYear
    const numMonth = + filteredMonth
    if(isNaN(numYear)  ||
        isNaN(numMonth)||
        numYear > 2030 ||
        numYear < 2021 || 
        numMonth > 12 ||
        numMonth < 1){
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
    const filteredEvents = getFilteredEvents({
        year: numYear,
        month: numMonth,
    })
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
    const date = new Date(numYear,numMonth - 1)
    return(
        <div>
            <ResultsTitle date={date}/>
            <EventList items={filteredEvents}/>
        </div>
    )

}

export default FilteredEventsPage;