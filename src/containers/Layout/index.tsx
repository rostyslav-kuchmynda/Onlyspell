import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import { HomePage } from '../HomePage';
import { AboutPage } from '../AboutPage';
import { ArticlesPage } from '../ArticlesPage';
import { BlogPage } from '../BlogPage';
import { BroadcastPage } from '../BroadcastPage';
import { CalculatorPage } from '../CalculatorPage';
import { ContactUsPage } from '../ContactUsPage';
import { NotFoundPage } from '../NotFoundPage';
import { PortfolioPage } from '../PortfolioPage';
import { ProductPage } from '../ProductPage';
import { ProjectsPage } from '../ProjectsPage';
import { QnAPage } from '../QnAPage';
import { ServicesPage } from '../ServicesPage';
import { ShopPage } from '../ShopPage';
import { TestimonialsPage } from '../TestimonialsPage';

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
          <Route path="about" element={<AboutPage />} />
          <Route path="articles" element={<ArticlesPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="broadcast" element={<BroadcastPage />} />
          <Route path="calculator" element={<CalculatorPage />} />
          <Route path="contactUs" element={<ContactUsPage />} />
          <Route path="portfolio" element={<PortfolioPage />} />
          <Route path="product" element={<ProductPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="questions-and-answers" element={<QnAPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="shop" element={<ShopPage />} />
          <Route path="testimonials" element={<TestimonialsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
};
