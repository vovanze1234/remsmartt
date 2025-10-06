import FAQList from '../components/FAQList';
import { Wrench, ShieldCheck, Clock4 } from "lucide-react"; // иконки
import "../styles/common-problems.scss";

const CommonProblems = () => {
  const faqData = [
    { question: "Почему мой ноутбук не включается?", answer: "Чаще всего проблема в блоке питания или аккумуляторе. Попробуйте подключить оригинальное зарядное устройство. Если не помогает – мы проведём диагностику бесплатно." },
    { question: "Как восстановить данные с повреждённого диска?", answer: "Для этого используется специализированное ПО. Наши мастера помогут восстановить данные максимально безопасно." },
    { question: "Почему телефон перегревается?", answer: "Часто это связано с приложениями, работающими в фоне, либо с неисправной батареей. В сервисе мы проверим устройство и заменим аккумулятор при необходимости." },
    { question: "Сколько времени занимает ремонт?", answer: "Большинство ремонтов выполняется в течение 1 рабочего дня. Сложные случаи – до 3 дней." },
    { question: "Даёте ли вы гарантию?", answer: "Да, на все виды ремонта предоставляется гарантия до 6 месяцев." },
  ];

  return (
    <section className='faq-page'>
      <div className="faq-intro">
        <h1>Часто задаваемые вопросы</h1>
        <p>
          Мы собрали ответы на популярные вопросы клиентов. 
          Если вы не нашли нужный ответ – свяжитесь с нами через форму или по телефону.
        </p>
      </div>

      <div className="faq-benefits">
        <div className="benefit">
          <Wrench size={48} strokeWidth={1.5} />
          <h3>Бесплатная диагностика</h3>
          <p>Вы платите только за ремонт, диагностика всегда бесплатна.</p>
        </div>
        <div className="benefit">
          <ShieldCheck size={48} strokeWidth={1.5} />
          <h3>Гарантия до 6 месяцев</h3>
          <p>Мы уверены в своей работе и предоставляем гарантию на все услуги.</p>
        </div>
        <div className="benefit">
          <Clock4 size={48} strokeWidth={1.5} />
          <h3>Ремонт за 1 день</h3>
          <p>Большинство неисправностей устраняются за один рабочий день.</p>
        </div>
      </div>

      <div className="faq-steps">
        <h2>Как мы работаем</h2>
        <div className="steps-container">
          <div className="step">1. Заявка</div>
          <div className="step">2. Диагностика</div>
          <div className="step">3. Ремонт</div>
          <div className="step">4. Гарантия</div>
        </div>
      </div>

      <FAQList faqs={faqData} />

      <div className="faq-form">
        <h2>Не нашли ответ на свой вопрос?</h2>
        <p>Заполните форму, и мы ответим вам в ближайшее время.</p>
        <form>
          <input type="text" placeholder="Ваше имя" required />
          <input type="email" placeholder="Ваш email" required />
          <textarea placeholder="Ваш вопрос..." required></textarea>
          <button type="submit">Отправить</button>
        </form>
      </div>
    </section>
  );
};

export default CommonProblems;
