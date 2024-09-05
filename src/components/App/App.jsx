import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getSearchIdThunk, getTicketsThunk } from '../../features/ticketsSlice';

import classes from './App.module.scss';
import Filter from '../Filter/Filter';
import Sorter from '../Sorter/Sorter';
import TicketsList from '../TicketsList/TicketsList';

function App() {
  const dispatch = useDispatch();
  const searchID = useSelector((state) => state.tickets.searchID);

  useEffect(() => {
    if (!searchID) dispatch(getSearchIdThunk());
    if (searchID) dispatch(getTicketsThunk(searchID));
  }, [searchID, dispatch]);

  return (
    <div className={classes.app}>
      <header className={classes['app-header']}>
        <img src="./public/Logo.png" alt="aviasales-logo" />
      </header>
      <main className={classes['app-main']}>
        <Filter />
        <section className={classes['app-tickets']}>
          <Sorter />
          <TicketsList />
        </section>
      </main>
    </div>
  );
}

export default App;
