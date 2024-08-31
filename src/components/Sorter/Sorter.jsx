import classes from './Sorter.module.scss';

export default function Sorter() {
  return (
    <div className={classes.sorter}>
      <button className={classes.btn} type="button">
        Самый дешевый
      </button>
      <button className={classes.btn} type="button">
        Самый быстрый
      </button>
    </div>
  );
}
