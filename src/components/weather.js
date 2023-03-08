import React, { useState, useEffect } from 'react';

const Meteo = ({ ville }) => {
  const [meteo, setMeteo] = useState(null);

  useEffect(() => {
    const fetchMeteo = async () => {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=c7f271cc0e11ed6d950f8fa069d937f9&units=metric`);
      const data = await response.json();
      setMeteo(data);
    };

    fetchMeteo();
  }, [ville]);

  if (!meteo) {
    return <div>Fetching...</div>;
  }

  return (
    <div>
      <div> Paris</div>
      <div>{meteo.main && meteo.main.temp}°C</div>
      <div><img src={`https://openweathermap.org/img/wn/${meteo.weather && meteo.weather[0].icon}.png`} alt="Météo" /></div>
    </div>
  );
};

export default Meteo;
