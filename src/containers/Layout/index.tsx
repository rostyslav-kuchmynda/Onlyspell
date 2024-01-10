import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';

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
          <Route path="/" element={<div>Home Page</div>}></Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
};
