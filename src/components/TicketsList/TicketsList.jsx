import classes from './TicketsList.module.scss';
import TicketCard from '../TicketCard/TicketCard';

export default function TicketsList() {
  return (
    <>
      <ul className={classes['tickets-list']}>
        <TicketCard />
        <TicketCard />
        <TicketCard />
        <TicketCard />
        <TicketCard />
      </ul>
      <button className={classes.btn} type="button" aria-label="show more">
        Показать еще 5 билетов!
      </button>
    </>
  );
}
