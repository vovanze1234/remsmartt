import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/accii.scss';

const Akcii = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/akcii')
      .then((res) => {
        console.log('Fetch response:', res);
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then((data) => setNews(data))
      .catch((err) => console.error('Error fetching akcii:', err));
  }, []);

  return (
    <>
      <Header />
      <section className="main-content">
        <h1>Следите за нашими новостями</h1>
        <div className="akcii-container">
          {news.map((item) => (
            <div key={item._id} className='accii'>
              {item.imageUrl && <img src={item.imageUrl} alt={item.title} style={{ maxWidth: '300px' }} />}
              <div className="accii-content">
                <div className="accii-main-content">
                  <h2 className="accii_h2">{item.title}</h2>
                  <p className="accii_text">{item.text}</p>
                </div>
                <div className="accii-date-wrapper">
                  <p className="accii_date"><small>Опубликовано: {new Date(item.publishDate).toLocaleDateString()}</small></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Akcii;