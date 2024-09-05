import PropTypes from 'prop-types';
import classes from './TicketCard.module.scss';

export default function TicketCard() {
  // const { price, carrier, segments } = data;

  return (
    <div className={classes.card}>
      <div className={classes.card__meta}>
        <p>13 400 P</p>
        <img src="../../../public/template.png" alt="" />
      </div>
      <div className={classes.card__destination}>
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
      </div>
      <div className={classes.card__destination}>
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
      </div>
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
