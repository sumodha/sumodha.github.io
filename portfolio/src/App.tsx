import { Routes, Route } from 'react-router-dom';
import HomePage from './routes/HomePage';
import ProjectPage from './routes/ProjectPage';
import ScrollToTop from './components/ScrollToTop';
import NotFound from './routes/NotFound'
import SketchbookPage from './routes/SketchbookPage';

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