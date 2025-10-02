import Header from '../components/Header';
import Footer from '../components/Footer';
import FAQList from '../components/FAQList';

const CommonProblems = () => {
  const faqData = [
    { question: "Почему мой ноутбук не включается?", answer: "Проверьте зарядное устройство и аккумулятор." },
    { question: "Как восстановить данные с повреждённого диска?", answer: "Используйте специализированное ПО или обратитесь в сервис." },
    { question: "Почему телефон перегревается?", answer: "Закройте лишние приложения и проверьте температуру батареи." },
  ];

  return (
    <>
      <Header />
      <section className='main-content'>
        <h1>Часто задаваемые вопросы</h1>
        <FAQList faqs={faqData} />
      </section>
      <Footer />
    </>
  );
};

export default CommonProblems;
