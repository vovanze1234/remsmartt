import { FaTelegramPlane, FaWhatsapp, FaVk } from "react-icons/fa";
import "../styles/header-footer.scss";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-info">
          <h3>RemSmart</h3>
          <p>Москва, ул. Южнобутовская, 50</p>
          <p><a href="tel:+79990000000">+7 (999) 000-00-00</a></p>
          <p><a href="mailto:remsmarthost@gmail.com">remsmarthost@gmail.com</a></p>
        </div>

        <div className="footer-links">
          <h4>Навигация</h4>
          <a href="/">Главная</a>
          <a href="/uslugi">Услуги</a>
          <a href="/about">О нас</a>
          <a href="/contact">Контакты</a>
        </div>

        <div className="footer-socials">
  <h4>Мы в соцсетях</h4>
  <div className="icons">
    <a href="https://t.me" target="_blank" rel="noopener noreferrer"> 
      <FaTelegramPlane size={24} />
    </a>
    <a href="https://wa.me" target="_blank" rel="noopener noreferrer">
      <FaWhatsapp size={24} />
    </a>
    <a href="https://vk.com" target="_blank" rel="noopener noreferrer">
      <FaVk size={24} />
    </a>
  </div>
</div>

      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} RemSmart. Все права защищены.</p>
      </div>
    </footer>
  );
};

export default Footer;
