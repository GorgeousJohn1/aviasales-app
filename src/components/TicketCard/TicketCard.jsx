import { format, add, minutesToHours } from 'date-fns';
import PropTypes from 'prop-types';
import classes from './TicketCard.module.scss';

export default function TicketCard({ data }) {
  const { price, carrier, segments } = data;

  return (
    <div className={classes.card}>
      <div className={classes.card__meta}>
        <p>{price} P</p>

        <img
          src={`http://pics.avs.io/110/36/${carrier}.png`}
          alt="carrier logo"
        />
      </div>
      {segments.map((item) => {
        const destinations = `${item.origin} - ${item.destination}`;
        let transfers;
        switch (item.stops.length) {
          case 0:
            transfers = 'Без пересадок';
            break;
          case 1:
            transfers = '1 пересадка';
            break;
          case 2:
            transfers = '2 пересадки';
            break;
          case 3:
            transfers = '3 пересадки';
            break;

          default:
            transfers = 'Без пересадок';
            break;
        }
        const transfersIATA = item.stops.join(', ');
        const timeA = format(item.date, 'HH:mm');
        const timeB = format(
          add(item.date, { minutes: item.duration }),
          'HH:mm'
        );

        return (
          <div
            key={`${item.origin}-${item.duration}`}
            className={classes.card__destination}
          >
            <div className={classes['card__destination-tab']}>
              <p className={classes['card__destination-heading']}>
                {destinations}
              </p>
              <p className={classes['card__destination-description']}>
                {`${timeA} - ${timeB}`}
              </p>
            </div>
            <div className={classes['card__destination-tab']}>
              <p className={classes['card__destination-heading']}>В ПУТИ</p>
              <p
                style={{ textTransform: 'none' }}
                className={classes['card__destination-description']}
              >
                {`${minutesToHours(item.duration) % 24}ч ${item.duration % 60}м`}
              </p>
            </div>
            <div className={classes['card__destination-tab']}>
              <p className={classes['card__destination-heading']}>
                {transfers}
              </p>
              <p className={classes['card__destination-description']}>
                {transfersIATA}
              </p>
            </div>
            {/* <div className={classes['card__destination-heading']}>
              
              
              
            </div>
            <div className={classes['card__destination-description']}>

              
              
            </div> */}
          </div>
        );
      })}
      {/* <div className={classes.card__destination}>
        <div className={classes['card__destination-heading']}>
          <p>MOW-HKT</p>
          <p>В ПУТИ</p>
          <p>3 ПЕРЕСАДКИ</p>
        </div>
        <div className={classes['card__destination-description']}>
          <p>16:13-11:20</p>
          <p>22ч 7м</p>
          <p>DOH, JNB, DXB</p>
        </div>
      </div> */}
      {/* <div className={classes.card__destination}>
        <div className={classes['card__destination-heading']}>
          <p>MOW-HKT</p>
          <p>В ПУТИ</p>
          <p>3 ПЕРЕСАДКИ</p>
        </div>
        <div className={classes['card__destination-description']}>
          <p>16:13-11:20</p>
          <p>22ч 7м</p>
          <p>DOH, JNB, DXB</p>
        </div>
      </div> */}
    </div>
  );
}

TicketCard.propTypes = {
  data: PropTypes.shape({
    price: PropTypes.number,
    carrier: PropTypes.string,
    segments: PropTypes.arrayOf(
      PropTypes.shape({
        origin: PropTypes.string,
        destination: PropTypes.string,
        date: PropTypes.string,
        stops: PropTypes.arrayOf(PropTypes.string),
        duration: PropTypes.number,
      })
    ),
  }).isRequired,
};
