import { Routes, Route } from 'react-router-dom';
import HomePage from './routes/HomePage/HomePage';
import ProjectPage from './routes/ProjectPage/ProjectPage';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import NotFound from './routes/NotFound/NotFound'
import SketchbookPage from './routes/SketchbookPage/SketchbookPage';

function App() {

  return (
    <>
    <ScrollToTop></ScrollToTop>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/portfolio/sketchbook" element={<SketchbookPage></SketchbookPage>} />
      <Route path="/portfolio/:slug" element={<ProjectPage />} />
      {/* Catch-all route */}
        <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  );
}

export default App;