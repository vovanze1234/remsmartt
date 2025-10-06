import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Uslugi from './pages/Uslugi';
import About from './pages/About';
import Contact from './pages/Contact';
import Accii from './pages/Accii';
import CommonProblems from './pages/CommonProblems';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="uslugi" element={<Uslugi />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="accii" element={<Accii />} />
          <Route path="common-problems" element={<CommonProblems />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
