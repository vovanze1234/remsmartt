import { useEffect, useState } from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';

const Uslugi = () => {
  const [devicesByBrand, setDevicesByBrand] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedBrand, setExpandedBrand] = useState(null);
  const [expandedDevice, setExpandedDevice] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/devices")
      .then(res => res.json())
      .then(data => {
        // Группируем устройства по бренду
        const grouped = data.reduce((acc, device) => {
          const brand = device.manufacturer;
          if (!acc[brand]) acc[brand] = [];
          acc[brand].push(device);
          return acc;
        }, {});

        const result = Object.entries(grouped).map(([brand, devices]) => ({ manufacturer: brand, devices }));
        setDevicesByBrand(result);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <Header />
      <section className='main-content'>
        <h1>Сломался телефон?</h1>
        {loading ? (
          <p>Загрузка устройств...</p>
        ) : (
          devicesByBrand.map((brandItem, idx) => (
            <div key={idx} style={{ marginBottom: 20 }}>
              <h2
                style={{ cursor: "pointer" }}
                onClick={() =>
                  setExpandedBrand(expandedBrand === brandItem.manufacturer ? null : brandItem.manufacturer)
                }
              >
                {brandItem.manufacturer}
              </h2>

              {expandedBrand === brandItem.manufacturer && (
                <ul style={{ paddingLeft: 20 }}>
                  {brandItem.devices.map((device, i) => (
                    <li key={i}>
                      <div
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          setExpandedDevice(expandedDevice === device.model ? null : device.model)
                        }
                      >
                        {device.model}
                      </div>

                      {expandedDevice === device.model && (
                        <ul style={{ paddingLeft: 20 }}>
                          <li>Экран: {device.priceScreen}$</li>
                          <li>Батарея: {device.priceBattery}$</li>
                          <li>Задняя крышка: {device.priceBackCover}$</li>
                          {device.priceOther && <li>Прочее: {device.priceOther}$</li>}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))
        )}
      </section>
      <Footer />
    </>
  );
};

export default Uslugi;
