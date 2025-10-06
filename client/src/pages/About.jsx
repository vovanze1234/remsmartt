import { useState, useEffect } from "react";
import "../styles/about.scss";
import { Users, Star, Wrench } from "lucide-react";

const teamMembers = [
  { name: "Алексей", role: "Инженер по ремонту смартфонов", img: "/img/team1.jpg" },
  { name: "Георгий", role: "Мастер по ноутбукам и ПК", img: "/img/team2.jpg" },
  { name: "Александр", role: "Мастер-пайщик", img: "/img/team3.jpg" }
];

const reviews = [
  { author: "Анна К.", text: "Отличный сервис, починили iPhone за пару часов!" },
  { author: "Алексей С.", text: "Заменили SSD в ноутбуке, работает быстрее чем новый." },
  { author: "Ирина Л.", text: "Довольна обслуживанием и отношением к клиенту." }
];

const About = () => {
  const [stats, setStats] = useState({ years: 0, clients: 0, repairs: 0 });
  const [reviewIndex, setReviewIndex] = useState(0);

  useEffect(() => {
    let years = 0, clients = 0, repairs = 0;
    const interval = setInterval(() => {
      years = Math.min(years + 1, 15);
      clients = Math.min(clients + 50, 5000);
      repairs = Math.min(repairs + 75, 10000);
      setStats({ years, clients, repairs });
      if (years === 15 && clients === 5000 && repairs === 10000) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setReviewIndex((prev) => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="about-page">
      <div className="about-history">
        <div className="text">
          <h1>О компании RemSmart</h1>
          <p>
            Мы начинали как маленькая мастерская в 2010 году. Сегодня RemSmart —
            это современный сервисный центр с командой профессионалов,
            готовых помочь в ремонте любой техники.
          </p>
        </div>
        <div className="image">
          <img src="/img/history.jpg" alt="Наша история" />
        </div>
      </div>

      <div className="about-stats">
        <div className="stat">
          <Wrench size={40} />
          <h2>{stats.years}+</h2>
          <p>Лет опыта</p>
        </div>
        <div className="stat">
          <Users size={40} />
          <h2>{stats.clients}+</h2>
          <p>Довольных клиентов</p>
        </div>
        <div className="stat">
          <Star size={40} />
          <h2>{stats.repairs}+</h2>
          <p>Выполненных ремонтов</p>
        </div>
      </div>

      <div className="about-team">
        <h2>Наша команда</h2>
        <div className="team-grid">
          {teamMembers.map((m, i) => (
            <div key={i} className="team-card">
              <img src={m.img} alt={m.name} />
              <h3>{m.name}</h3>
              <p>{m.role}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="about-reviews">
        <h2>Что говорят клиенты</h2>
        <div className="review-card">
          <p>"{reviews[reviewIndex].text}"</p>
          <span>- {reviews[reviewIndex].author}</span>
        </div>
      </div>

      <div className="about-cta">
        <h2>Нам можно доверять!</h2>
        <p>Свяжитесь с нами и получите бесплатную консультацию прямо сейчас.</p>
        <a href="/contact" className="cta-btn">Связаться</a>
      </div>
    </section>
  );
};

export default About;
