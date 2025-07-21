import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  return (
    <header>
      <nav>
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Главная</Link>
        <Link to="/uslugi" className={location.pathname === '/uslugi' ? 'active' : ''}>Услуги</Link>
        <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>О нас</Link>
        <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Контакты</Link>
        <Link to="/accii" className={location.pathname === '/accii' ? 'active' : ''}>Акции</Link>
        <Link to="/common-problems" className={location.pathname === '/common-problems' ? 'active' : ''}>Частые проблемы</Link>
      </nav>
    </header>
  );
};

export default Header;