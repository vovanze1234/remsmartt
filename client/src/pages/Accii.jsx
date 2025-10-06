import React, { useState, useEffect } from 'react';
import '../styles/accii.scss';

const Akcii = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/akcii')
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then((data) => setNews(data))
      .catch((err) => console.error('Error fetching akcii:', err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="akcii-page">
      <h1>Следите за нашими новостями</h1>

      {loading ? (
        <p>Загрузка...</p>
      ) : news.length === 0 ? (
        <div className="akcii-placeholder">
          <h2>Раздел в разработке</h2>
          <p>
            В данный момент мы готовим интересные акции и специальные предложения для вас.
            Совсем скоро здесь появятся новые материалы!
          </p>
          <div className="construction">
            <span role="img" aria-label="tools">🛠️</span>
            <span role="img" aria-label="hourglass">⏳</span>
          </div>
        </div>
      ) : (
        <div className="akcii-container">
          {news.map((item) => (
            <div key={item._id} className="accii">
              {item.imageUrl && (
                <img src={item.imageUrl} alt={item.title} style={{ maxWidth: '300px' }} />
              )}
              <div className="accii-content">
                <h2 className="accii_h2">{item.title}</h2>
                <p className="accii_text">{item.text}</p>
                <p className="accii_date">
                  <small>Опубликовано: {new Date(item.publishDate).toLocaleDateString()}</small>
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Akcii;
