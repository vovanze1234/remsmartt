import { Link, useLocation } from 'react-router-dom';
import { Wrench } from "lucide-react";
import "../styles/header-footer.scss";

const Header = () => {
  const location = useLocation();

  return (
    <header className="site-header">
      <div className="header-container">
        <Link to="/" className="logo">
          <Wrench size={28} />
          <span>RemSmart</span>
        </Link>

        <nav className="nav-menu">
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Главная</Link>
          <Link to="/uslugi" className={location.pathname === '/uslugi' ? 'active' : ''}>Услуги</Link>
          <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>О нас</Link>
          <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Контакты</Link>
          <Link to="/accii" className={location.pathname === '/accii' ? 'active' : ''}>Акции</Link>
          <Link to="/common-problems" className={location.pathname === '/common-problems' ? 'active' : ''}>FAQ</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
