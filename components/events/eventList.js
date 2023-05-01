import EventItem from './eventItem';
const EventList = ({items}) =>{
  
  return(
    <ul>
      {items.map((event => <EventItem title={event.title} image={event.image} date={event.date} location={event.location} id={event.id}/>))}
    </ul>
  )
}

export default EventList;