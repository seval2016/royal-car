import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import HomePage from '@/pages/HomePage';
import CarsPage from '@/pages/CarsPage';
import CarDetailPage from '@/pages/CarDetailPage';
import AboutPage from '@/pages/AboutPage';
import ContactPage from '@/pages/ContactPage';
import GalleryPage from '@/pages/GalleryPage';
import DriversPage from '@/pages/DriversPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cars" element={<CarsPage />} />
          <Route path="/cars/:id" element={<CarDetailPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/drivers" element={<DriversPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
