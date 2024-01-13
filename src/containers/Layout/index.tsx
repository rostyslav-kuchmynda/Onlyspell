import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import { HomePage } from '../HomePage';

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
      <main className={classes.contentLayout}>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
        </Routes>
      </main>
    </div>
  );
};
