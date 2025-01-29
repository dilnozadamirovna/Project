import React from "react";
import "./Next2.css";

const Next2 = () => {
  return (
    <div className="description-container">
      
      <div className="description-text">
        <h2>Описание экскурсии</h2>
        <p>
          Вас ждет путешествие по "Золотому Кольцу Абхазии" на Мерседес
          Спринтер (20 мест). По маршруту вас будет сопровождать профессиональный
          гид. Посадка на экскурсию осуществляется с вашего отеля или ближайшей
          автобусной остановки. Пересечение границы без пересадок.
        </p>
      </div>

      {/* Info Cards */}
      <div className="info-cards">
        <div className="info-card">
          <span className="iconN">💳</span>
          <div>
            <h3>1 618 ₽</h3>
            <p>Взрослый билет</p>
          </div>
        </div>
        <div className="info-card">
          <span className="iconN">💳</span>
          <div>
            <h3>1 412 ₽</h3>
            <p>Детский билет</p>
          </div>
        </div>
        <div className="info-card">
          <span className="iconN">⏰</span>
          <div>
            <h3>12 часов</h3>
            <p>Продолжительность</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Next2;
