import { Routes, Route } from 'react-router-dom';
import HomePage from './routes/HomePage/HomePage';
import ProjectPage from './routes/ProjectPage/ProjectPage';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import NotFound from './routes/NotFound/NotFound';
import { CARD_ROUTE } from './utils/paths';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path={CARD_ROUTE} element={<ProjectPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
