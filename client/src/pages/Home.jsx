import Slider from '../components/Slider';
import { Zap, CheckCircle, Headphones, Smartphone } from "lucide-react";
import '../styles/home.scss';

const Home = () => {
  return (
    <section className="home-page">
      <Slider />
      <div className="home-intro">
        <h1>Ремонт смартфонов в Бутово</h1>
        <p>
          Сервисный центр RemSmart специализируется на профессиональном ремонте
          смартфонов, телефонов, ноутбуков, планшетов и компьютеров всех популярных брендов:
          Apple, Samsung, Xiaomi, Huawei, Lenovo, Asus и других.
        </p>
      </div>

      <h2 className="home-section-title">Наши преимущества</h2>
      <div className="home-benefits">
        <div className="benefit">
          <Zap size={40} />
          <h3>Быстрое обслуживание</h3>
          <p>Ремонт за 24 часа в большинстве случаев.</p>
        </div>
        <div className="benefit">
          <CheckCircle size={40} />
          <h3>Высокое качество</h3>
          <p>Используем только оригинальные запчасти.</p>
        </div>
        <div className="benefit">
          <Headphones size={40} />
          <h3>Поддержка 24/7</h3>
          <p>Отвечаем на ваши вопросы в любое время.</p>
        </div>
      </div>

      {/* Популярные услуги */}
      <h2 className="home-section-title">Популярные услуги</h2>
      <div className="home-services">
        <div className="service-card">
          <Smartphone size={36} />
          <h3>Замена экрана</h3>
          <p>Быстрая замена экрана на смартфонах любых брендов.</p>
        </div>
        <div className="service-card">
          <Smartphone size={36} />
          <h3>Ремонт батареи</h3>
          <p>Восстановление или замена аккумулятора.</p>
        </div>
        <div className="service-card">
          <Smartphone size={36} />
          <h3>Диагностика</h3>
          <p>Бесплатная диагностика устройства.</p>
        </div>
        <div className="service-card">
          <Smartphone size={36} />
          <h3>Ремонт камеры</h3>
          <p>Качественное восстановление камеры смартфона.</p>
        </div>
      </div>
    </section>
  );
};

export default Home;
