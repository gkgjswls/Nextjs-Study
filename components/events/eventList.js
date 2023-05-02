import EventItem from './eventItem';
import classes from './eventList.module.css'
const EventList = ({items}) =>{
  
  return(
    <ul className={classes.list}>
      {items.map((event => <EventItem title={event.title} image={event.image} date={event.date} location={event.location} id={event.id}/>))}
    </ul>
  )
}

export default EventList;