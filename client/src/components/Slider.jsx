import React, { useState, useEffect } from 'react';

const Slider = () => {
  const slides = [
    { id: 1, content: 'Slide 1: Laptop Repair', image: 'https://avatars.mds.yandex.net/get-ydo/2375918/2a000001754a1918a8cc18bf0a1d5d5f774f/diploma' },
    { id: 2, content: 'Slide 2: PC Repair', image: 'https://avatars.mds.yandex.net/get-ydo/2375918/2a000001754a1918a8cc18bf0a1d5d5f774f/diploma' },
    { id: 3, content: 'Slide 3: Phone Repair', image: 'https://avatars.mds.yandex.net/get-ydo/2375918/2a000001754a1918a8cc18bf0a1d5d5f774f/diploma' },
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
    }, 5000); // Автопрокрутка каждые 5 секунд
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider">
      <div className="slider-container" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide) => (
          <div key={slide.id} className="slide">
            <img src={slide.image} alt={`Slide ${slide.id}`} />
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