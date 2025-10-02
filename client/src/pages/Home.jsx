import Header from '../components/Header';
import Footer from '../components/Footer';
import Slider from '../components/Slider';
import '../styles/home.scss';

const Home = () => {
  return (
    <>
      <Header />
      <section className="main-content">
        <Slider />
        <h1>Ремонт смартфонов в Бутово</h1>
        <p>Сервисный центр RemSmart – специализируется на профессиональном ремонте смартфонов, телефонов, ноутбуков, планшетов и компьютеров всех популярных брендов: Apple, Samsung, Xiaomi, Huawei, Lenovo, Asus и многих других.</p>
        <h3 className='HomePage__h3'>Наши преимущества</h3>
        <div className="HomePage__preimushestva">
          <div className="HomePage__preimushestva-item">
            <img src="/img/repairing.jpg" alt="Fast Service" className="HomePage__preimushestva-icon" />
            <h3 className="HomePage__preimushestva-title">Быстрое обслуживание</h3>
            <p className="HomePage__preimushestva-text">Ремонт за 24 часа в большинстве случаев.</p>
          </div>
          <div className="HomePage__preimushestva-item">
            <img src="/img/repairing.jpg" alt="Quality" className="HomePage__preimushestva-icon" />
            <h3 className="HomePage__preimushestva-title">Высокое качество</h3>
            <p className="HomePage__preimushestva-text">Используем только оригинальные запчасти.</p>
          </div>
          <div className="HomePage__preimushestva-item">
            <img src="/img/repairing.jpg" alt="Support" className="HomePage__preimushestva-icon" />
            <h3 className="HomePage__preimushestva-title">Круглосуточная поддержка</h3>
            <p className="HomePage__preimushestva-text">Помощь доступна 24/7.</p>
          </div>
          <div className="HomePage__preimushestva-item">
            <img src="/img/repairing.jpg" alt="Support" className="HomePage__preimushestva-icon" />
            <h3 className="HomePage__preimushestva-title">Круглосуточная поддержка</h3>
            <p className="HomePage__preimushestva-text">Помощь доступна 24/7.</p>
          </div>
        </div>
        <h3 className='HomePage__h3'>Популярные услуги</h3>
        <div className="HomePage__popularuslugi">
          <div className="HomePage__popularuslugi-item">
            <img src="/img/repairing.jpg" alt="Fast Service" className="HomePage__preimushestva-icon" />
            <h3 className="HomePage__popularuslugi-title">Замена экрана</h3>
            <p className="HomePage__popularuslugi-text">Быстрая замена экрана на смартфонах.</p>
          </div>
          <div className="HomePage__popularuslugi-item">
            <img src="/img/repairing.jpg" alt="Fast Service" className="HomePage__preimushestva-icon" />
            <h3 className="HomePage__popularuslugi-title">Ремонт батареи</h3>
            <p className="HomePage__popularuslugi-text">Восстановление или замена аккумулятора.</p>
          </div>
          <div className="HomePage__popularuslugi-item">
            <img src="/img/repairing.jpg" alt="Fast Service" className="HomePage__preimushestva-icon" />
            <h3 className="HomePage__popularuslugi-title">Диагностика</h3>
            <p className="HomePage__popularuslugi-text">Бесплатная диагностика устройства.</p>
          </div>
          <div className="HomePage__popularuslugi-item">
            <img src="/img/repairing.jpg" alt="Fast Service" className="HomePage__preimushestva-icon" />
            <h3 className="HomePage__popularuslugi-title">Ремонт камеры</h3>
            <p className="HomePage__popularuslugi-text">Восстановление камеры вашего устройства.</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;