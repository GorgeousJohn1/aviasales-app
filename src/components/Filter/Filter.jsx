import classes from './Filter.module.scss';
import InputFilter from './InputFilter';

export default function Filter() {
  return (
    <div className={classes.filter}>
      <h2>Количество пересадок</h2>
      <ul>
        <li>
          <InputFilter value="all">Все</InputFilter>
        </li>
        <li>
          <InputFilter value="none">Без пересадок</InputFilter>
        </li>
        <li>
          <InputFilter value="one">1 пересадка</InputFilter>
        </li>
        <li>
          <InputFilter value="two">2 пересадки</InputFilter>
        </li>
        <li>
          <InputFilter value="three">3 пересадки</InputFilter>
        </li>
      </ul>
    </div>
  );
}
