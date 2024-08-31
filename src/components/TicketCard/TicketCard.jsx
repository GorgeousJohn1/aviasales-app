import classes from './TicketCard.module.scss';

export default function TicketCard() {
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
