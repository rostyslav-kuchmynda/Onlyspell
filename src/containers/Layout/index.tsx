import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

// import { Navigation } from '../../components/Navigation';
import { DropDown } from '../../containers/DropDown';

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
      <DropDown />
      <main className={classes.contentLayout}>
        <Routes>
          <Route path="/" element={<div>Home Page</div>}></Route>
        </Routes>
      </main>
    </div>
  );
};
