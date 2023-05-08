import Link from 'next/link';
import Image from 'next/image';
import classes from './eventItem.module.css';
import Button from '../ui/button';
import DateIcon from '../icons/date-icon'
import AddressIcon from '../icons/address-icon';
import ArrowRightIcon from '../icons/arrow-right-icon'
const EventItem = ({title, date, id, location, image,}) =>{
  const humanReadableDate = new Date(date).toLocaleDateString('ko-KR',
  {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const formattedAddress = location.replace(', ', '\n')
  const exploreLink = `/events/${id}`
  return (<li className={classes.item}>
    <Image src={'/'+image} alt={image} width={250} height={160} ></Image>
    {/* <img src={'/'+image} alt={image} /> */}
    <div className={classes.content}>
      <div  className={classes.summary}>{title}</div>
      <div className={classes.date}>
        <DateIcon />
        <time>{humanReadableDate}</time>
      </div>
      <div className={classes.address}>
        <AddressIcon />
        <address>{formattedAddress}</address>
      </div>
      <div className={classes.actions}>
        <Button link={exploreLink}>Explore Event<span className={classes.icon}><ArrowRightIcon/></span></Button>
      </div>
    </div>
  </li>)
}
export default EventItem;