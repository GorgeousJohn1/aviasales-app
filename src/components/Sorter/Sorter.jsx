import classes from './Sorter.module.scss';
import TabButton from './TabButton';

export default function Sorter() {
  return (
    <div className={classes.sorter}>
      <TabButton value="cheapest">Самый дешевый</TabButton>
      <TabButton value="fastest">Самый быстрый</TabButton>
    </div>
  );
}
