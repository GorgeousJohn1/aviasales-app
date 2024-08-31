import classes from './App.module.scss';
import Filter from '../Filter/Filter';
import Sorter from '../Sorter/Sorter';
import TicketsList from '../TicketsList/TicketsList';

function App() {
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
