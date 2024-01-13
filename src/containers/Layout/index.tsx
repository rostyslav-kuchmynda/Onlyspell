import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';

import { useTypedDispatch } from '../../hooks/storeHooks';
import { uiGetTemplates } from '../../store';

import classes from './styles.module.scss';

export const Layout: React.FC = () => {
  const dispatch = useTypedDispatch();

  useEffect(() => {
    dispatch(uiGetTemplates()); // initial fetch example
  }, []);

  return (
    <div className={classes.layoutBody}>
      <Navigation />
      <main className={classes.contentLayout}>
        <Routes>
          <Route
            path="/"
            element={<Header multiRowText={['Let us conjure', 'a love spell on', 'your costumers']} rowIndex={1} />}
          ></Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
};
