import React, { useRef } from "react";
import "./Popular.css";

import pop1 from './pop1.png';
import pop2 from './pop2.png';
import pop3 from './pop3.png';
import pop4 from './pop4.png';

const Popular = () => {
    const carouselRef = useRef(null);

    const scrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({
                left: -300,
                behavior: "smooth",
            });
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({
                left: 300,
                behavior: "smooth",
            });
        }
    };


    const cards = [
        {
            id: 1,
            title: "Обзорная по Сочи (из Адлера)",
            duration: "6 часов",
            price: "818 ₽",
            description: "Приглашаем вас на экскурсию Обзорная по Большому Сочи: Экскурсия начнется с подъёма на гору Большой Ахун - это  высшая точка (665 метров) на побережьи Сочи. На вершине горы Большой Ахун есть смотровая башня, построенная в 1935-36 годах по проекту архитектора С. И. Воробьева...",
            image: pop1,
        },
        {
            id: 2,
            title: "Конные прогулки",
            duration: "1.5 часа",
            price: "1 809 ₽",
            description: "Конные прогулки проходят в Лазурной долине. С долины открывается красивый вид на море, горы и лес. На всем пути следования экскурсии вас будут сопровождать опытные инструктора. Катание на лошадях или иппотерапия очень полезна для детей и взрослых...",
            image: pop2,
        },
        {
            id: 3,
            title: "Пасть дракона",
            duration: "2.5 часа",
            price: "3 515 ₽",
            description: "Маршрут на Квадроциклах проходит по горной реке Мзымта вдоль белых скал и самшитовый лес к водопаду Глубокий Яр или 'Пасть Дракона' (экскурсионное название).Высота водопада 41,5 метр - это один из самых высоких водопадов Большого Сочи...",
            image: pop3,
        },
        {
            id: 4,
            title: "Женский монастырь",
            duration: "4 часа",
            price: "1 500 ₽",
            description: "Троице - Георгиевский женский монастырь расположен в селе Лесное в живописном месте, в котором гармонично сочетаются красота природы и красота архитектуры сотворенная руками человека.Это удивительное место расположено совсем недалеко от Чёрного моря - всего в 20 километрах ",
            image: pop4,
        },
    ];

    return (
        <div className="carousel-wrapper">
            <h2 className="carousel-title">Популярные экскурсии <span className="a"> <a href="" >Смотреть все</a></span></h2>
           
            
            <div className="carousel" ref={carouselRef}>
                {cards.map((card) => (
                    <div
                        key={card.id}
                        className="carousel-card"
                        style={{
                            backgroundImage: `url(${card.image})`,
                        }}
                    >
                        <div className="card-overlay">
                            <h3 className="card-title">{card.title}</h3>
                            <p className="card-duration">
                                {card.duration} • {card.price}
                            </p>
                            <p className="card-description">
                                {card.description} 
                            </p>
                            <button className="details-button">Подробнее</button>
                        </div>
                    </div>
                ))}
            </div>
           <div className="scroll"> <button className="nav-button left" onClick={scrollLeft}>
                &#8592;
            </button>
            <button className="nav-button right" onClick={scrollRight}>
                &#8594;
            </button></div>
        </div>
    );
};

export default Popular;
