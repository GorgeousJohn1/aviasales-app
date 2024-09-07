import { useState } from 'react';
import { useSelector } from 'react-redux';
import classes from './TicketsList.module.scss';
import TicketCard from '../TicketCard/TicketCard';

export default function TicketsList() {
  const [ticketsLength, setTicketsLength] = useState(5);

  const tickets = useSelector((state) => state.tickets.ticketsData);
  const sorter = useSelector((state) => state.sorter);
  const filters = useSelector((state) => state.filters);

  const onTicketsAdd = () => {
    setTicketsLength(ticketsLength + 5);
  };

  const filterTickets = (tckts) =>
    tckts.filter((ticket) => {
      if (filters.includes('all')) return true;
      if (filters.includes('none'))
        return ticket.segments.some((segment) => segment.stops.length === 0);
      if (filters.includes('three'))
        return ticket.segments.some((segment) => segment.stops.length === 3);
      if (filters.includes('two'))
        return ticket.segments.some((segment) => segment.stops.length === 2);
      if (filters.includes('one'))
        return ticket.segments.some((segment) => segment.stops.length === 1);

      return false;
    });

  const filteredTickets = filterTickets(tickets);

  const fastestTickets = filteredTickets.toSorted(
    (a, b) =>
      a.segments.reduce((acc, item) => acc + item.duration, 0) -
      b.segments.reduce((acc, item) => acc + item.duration, 0)
  );
  const cheapestTickets = filteredTickets.toSorted((a, b) => a.price - b.price);

  const visibleTickets =
    sorter === 'cheapest'
      ? cheapestTickets.slice(0, ticketsLength)
      : fastestTickets.slice(0, ticketsLength);

  return filters.length === 0 || filteredTickets.length === 0 ? (
    <p className={classes['no-filters']}>
      Рейсов, подходящих под заданные фильтры, не найдено
    </p>
  ) : (
    <>
      <ul className={classes['tickets-list']}>
        {visibleTickets.map((ticket) => (
          <TicketCard
            key={`${ticket.carrier}-${ticket.price}-${ticket.segments[0].duration}-${ticket.segments[1].duration}`}
            data={ticket}
          />
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
