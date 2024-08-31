import classes from './Filter.module.scss';

export default function Filter() {
  return (
    <div className={classes.filter}>
      <h2>Количество пересадок</h2>
      <ul>
        <li>
          <label>
            <input className={classes.checkbox} type="checkbox" />{' '}
            <span className={classes['custom-checkbox']} />
            Все
          </label>
        </li>
        <li>
          <label>
            <input className={classes.checkbox} type="checkbox" />{' '}
            <span className={classes['custom-checkbox']} />
            Без пересадок
          </label>
        </li>
        <li>
          <label>
            <input className={classes.checkbox} type="checkbox" />{' '}
            <span className={classes['custom-checkbox']} />1 пересадка
          </label>
        </li>
        <li>
          <label>
            <input className={classes.checkbox} type="checkbox" />{' '}
            <span className={classes['custom-checkbox']} />2 пересадки
          </label>
        </li>
        <li>
          <label>
            <input className={classes.checkbox} type="checkbox" />{' '}
            <span className={classes['custom-checkbox']} />3 пересадки
          </label>
        </li>
      </ul>
    </div>
  );
}
