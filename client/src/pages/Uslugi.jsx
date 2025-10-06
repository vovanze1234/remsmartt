import { useEffect, useState } from "react";
import { Smartphone, Laptop, Monitor, Tablet, Watch, ChevronDown, ChevronUp, ShieldCheck, Zap, Wrench, MessageSquare } from "lucide-react";
import "../styles/uslugi.scss";

const categoryIcons = {
  smartphone: <Smartphone size={40} />,
  laptop: <Laptop size={40} />,
  pc: <Monitor size={40} />,
  tablet: <Tablet size={40} />,
  other: <Watch size={40} />
};

const categoryNames = {
  smartphone: "Смартфоны",
  laptop: "Ноутбуки",
  pc: "Персональные компьютеры",
  tablet: "Планшеты",
  other: "Прочее"
};

const Uslugi = () => {
  const [devices, setDevices] = useState([]);
  const [loading, setLoading] = useState(true);

  const [expandedCategory, setExpandedCategory] = useState(null);
  const [expandedBrand, setExpandedBrand] = useState(null);
  const [expandedModel, setExpandedModel] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/devices")
      .then(res => res.json())
      .then(data => setDevices(data))
      .finally(() => setLoading(false));
  }, []);

  const groupedData = devices.reduce((acc, device) => {
    if (!acc[device.category]) acc[device.category] = {};
    if (!acc[device.category][device.manufacturer]) acc[device.category][device.manufacturer] = [];
    acc[device.category][device.manufacturer].push(device);
    return acc;
  }, {});

  const toggleBrand = (brand) => {
    setExpandedBrand(prev => (prev === brand ? null : brand));
    setExpandedModel(null);
  };

  const toggleModel = (e, model) => {
    e.stopPropagation();
    setExpandedModel(prev => (prev === model ? null : model));
  };

  return (
    <section className="uslugi-page">
      <div className="uslugi-intro">
        <h1>Выберите устройство для ремонта</h1>
        <p>Мы обслуживаем все популярные устройства — смартфоны, ноутбуки, ПК, планшеты и многое другое.</p>
      </div>

      {loading ? (
        <p>Загрузка данных...</p>
      ) : (
        <div className="categories">
          {Object.keys(groupedData).map((catKey) => (
            <div
              key={catKey}
              className={`category-card ${expandedCategory === catKey ? "active" : ""}`}
              onClick={() => {
                setExpandedCategory(expandedCategory === catKey ? null : catKey);
                setExpandedBrand(null);
                setExpandedModel(null);
              }}
            >
              {categoryIcons[catKey]}
              <span>{categoryNames[catKey]}</span>
            </div>
          ))}
        </div>
      )}

      {expandedCategory && (
        <div className="brands">
          <h2>{categoryNames[expandedCategory]}</h2>
          <div className="brand-list">
            {Object.keys(groupedData[expandedCategory]).map((brand) => {
              const isBrandOpen = expandedBrand === brand;
              return (
                <div key={brand} className={`brand-card ${isBrandOpen ? "open" : ""}`}>
                  <button
                    className="brand-header"
                    onClick={() => toggleBrand(brand)}
                    aria-expanded={isBrandOpen}
                  >
                    <span>{brand}</span>
                    {isBrandOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </button>

                  {isBrandOpen && (
                    <div className="models">
                      {groupedData[expandedCategory][brand].map((device) => {
                        const isModelOpen = expandedModel === device.model;
                        return (
                          <div key={device._id || device.model} className={`model-card ${isModelOpen ? "open" : ""}`}>
                            <button
                              className="model-header"
                              onClick={(e) => toggleModel(e, device.model)}
                              aria-expanded={isModelOpen}
                            >
                              <span>{device.model}</span>
                              {isModelOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                            </button>

                            <div
                              className="repairs"
                              style={{
                                maxHeight: isModelOpen ? `${(device.repairs?.length || 0) * 50}px` : 0
                              }}
                            >
                              {(device.repairs || []).map((rep, i) => (
                                <div key={i} className="repair-item">
                                  <span>{rep.type}</span>
                                  <strong>{rep.price}$</strong>
                                </div>
                              ))}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
      <h2 className="benefit">Наши преимущества</h2>
      <div className="uslugi-benefits">
       
        <div className="benefit-card">
          <ShieldCheck size={40} />
          <h3>Гарантия</h3>
          <p>До 6 месяцев на все виды ремонта.</p>
        </div>
        <div className="benefit-card">
          <Zap size={40} />
          <h3>Скорость</h3>
          <p>Большинство ремонтов — в течение суток.</p>
        </div>
        <div className="benefit-card">
          <Wrench size={40} />
          <h3>Оригинальные запчасти</h3>
          <p>Используем только проверенные комплектующие.</p>
        </div>
        <div className="benefit-card">
          <MessageSquare size={40} />
          <h3>Поддержка</h3>
          <p>Всегда на связи — 24/7.</p>
        </div>
      </div>

      <div className="uslugi-steps">
        <h2>Как мы работаем</h2>
        <div className="steps-container">
          <div className="step">1. Заявка</div>
          <div className="step">2. Диагностика</div>
          <div className="step">3. Ремонт</div>
          <div className="step">4. Гарантия</div>
        </div>
      </div>

      <div className="uslugi-form">
        <h2>Не нашли модель?</h2>
        <p>Оставьте заявку и мы подскажем стоимость ремонта.</p>
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

export default Uslugi;
