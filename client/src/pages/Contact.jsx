import { useState, useEffect } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { FaTelegramPlane, FaWhatsapp, FaVk } from "react-icons/fa"; 
import "../styles/contact.scss";

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const now = new Date();
    const hour = now.getHours();
    setIsOpen(hour >= 9 && hour < 20);
  }, []);

  return (
    <section className="contact-page">
      <div className="contact-intro">
        <h1>Свяжитесь с нами</h1>
        <p>Мы всегда рады помочь вам с ремонтом техники!</p>
      </div>
      <div className="contact-info">
        <a
          href="https://yandex.ru/maps/-/CLBRQVns"
          target="_blank"
          rel="noopener noreferrer"
          className="info-card"
        >
          <MapPin size={28} />
          <h3>Адрес</h3>
          <p>Москва, ул. Южнобутовская, 50</p>
        </a>
        <a href="tel:+79990000000" className="info-card">
          <Phone size={28} />
          <h3>Телефон</h3>
          <p>+7 (999) 000-00-00</p>
        </a>
        <a href="mailto:remsmarthost@gmail.com" className="info-card">
          <Mail size={28} />
          <h3>Email</h3>
          <p>remsmarthost@gmail.com</p>
        </a>
        <div className="info-card">
          <Clock size={28} />
          <h3>Часы работы</h3>
          <p>{isOpen ? "Мы открыты!" : "Сейчас закрыто"} (Пн-Вс: 9:00 - 20:00)</p>
        </div>
      </div>

      <div className="contact-map">
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A16d30b3f0f9d8c38dcb4f16d3d34dca94c84950ad88cc22d8a1f95ed2b417b77&amp;source=constructor"
          width="100%"
          height="400"
          frameBorder="0"
          title="Карта"
        ></iframe>
      </div>

      <div className="contact-form">
        <h2>Напишите нам</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Ваше имя" required />
          <input type="email" placeholder="Ваш email" required />
          <textarea placeholder="Ваш вопрос..." required></textarea>
          <button type="submit">Отправить</button>
        </form>
      </div>

      <div className="contact-socials">
        <h2>Мы в соцсетях</h2>
        <div className="social-icons">
          <a href="https://t.me" target="_blank" rel="noopener noreferrer">
            <FaTelegramPlane size={30} />
          </a>
          <a href="https://wa.me" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp size={30} />
          </a>
          <a href="https://vk.com" target="_blank" rel="noopener noreferrer">
            <FaVk size={30} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
