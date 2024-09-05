import { useState } from 'react';
import { useSelector } from 'react-redux';
import classes from './TicketsList.module.scss';
import TicketCard from '../TicketCard/TicketCard';

export default function TicketsList() {
  const [ticketsLength, setTicketsLength] = useState(5);

  const tickets = useSelector((state) => state.tickets.ticketsData);

  const onTicketsAdd = () => {
    setTicketsLength(ticketsLength + 5);
  };

  const visibleTickets = tickets.slice(0, ticketsLength);

  return (
    <>
      <ul className={classes['tickets-list']}>
        {visibleTickets.map((ticket) => (
          <TicketCard key={`${ticket.carrier}-${ticket.price}`} data={ticket} />
        ))}
      </ul>
      <button
        onClick={onTicketsAdd}
        className={classes.btn}
        type="button"
        aria-label="show more"
      >
        Показать еще 5 билетов!
      </button>
    </>
  );
}
