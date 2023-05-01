import Link from 'next/link';
const EventItem = ({title, date, id, location, image}) =>{
  const humanReadableDate = new Date(date).toLocaleDateString('ko-KR',
  {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const formattedAddress = location.replace(', ', '\n')
  const exploreLink = `/events/${id}`
  return (<li>
    <img src={'/'+image} alt={image} />
    <div>
      <div>Title{title}</div>
      <div>
        <time>Date{humanReadableDate}</time>
      </div>
      <div>
        <address>{formattedAddress}</address>
      </div>
      <div>
        <Link href={exploreLink}></Link>
      </div>
    </div>
  </li>)
}
export default EventItem;