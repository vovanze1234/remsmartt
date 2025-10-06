import React, { useState, useEffect } from 'react';

const Slider = () => {
  const slides = [
    { id: 1, title: 'Ремонт ноутбуков', text: 'Быстро и качественно', image: '/img/slide3.jpeg' },
    { id: 2, title: 'Ремонт ПК', text: 'Диагностика и ремонт любой сложности', image: '/img/slide1.jpeg' },
    { id: 3, title: 'Ремонт смартфонов', text: 'Все бренды и модели', image: '/img/slide2.jpeg' },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  },);

  return (
    <div className="slider">
      <div
        className="slider-container"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="slide">
            <img src={slide.image} alt={slide.title} />
            <div className="slide-overlay">
              <h2>{slide.title}</h2>
              <p>{slide.text}</p>
            </div>
          </div>
        ))}
      </div>
      <button onClick={prevSlide} className="slider-arrow prev">❮</button>
      <button onClick={nextSlide} className="slider-arrow next">❯</button>
      <div className="slider-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slider;
