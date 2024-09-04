import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { changeFilter } from '../../features/filterSlice';
import classes from './Filter.module.scss';

export default function InputFilter({ value, children }) {
  const filter = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  const onFilterChange = () => {
    if (filter.includes(value)) {
      dispatch(changeFilter(value, 'removed'));
    } else dispatch(changeFilter(value, 'added'));
  };

  return (
    <label>
      <input
        checked={filter.includes(value)}
        onChange={onFilterChange}
        className={classes.checkbox}
        type="checkbox"
      />{' '}
      <span className={classes['custom-checkbox']} />
      {children}
    </label>
  );
}

InputFilter.propTypes = {
  value: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
