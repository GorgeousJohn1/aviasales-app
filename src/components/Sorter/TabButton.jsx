import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { changeSorter } from '../../features/sorterSlice';
import classes from './Sorter.module.scss';

export default function TabButton({ children, value }) {
  const dispatch = useDispatch();
  const sorter = useSelector((state) => state.sorter);

  const onSorterChange = () => {
    if (value === sorter) return;
    dispatch(changeSorter(value));
  };

  return (
    <button
      className={`${classes.btn} ${sorter === value ? classes.btn__active : ''}`}
      type="button"
      onClick={onSorterChange}
    >
      {children}
    </button>
  );
}

TabButton.propTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.string.isRequired,
};
